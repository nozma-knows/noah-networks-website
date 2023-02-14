import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BlogQuery } from "@/components/graph";
import * as cookie from "cookie";
import BlogView from "@/components/feature-blog/ui/BlogView";
import Page from "@/components/ui/page/Page";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import client from "./../../../apollo-client";
import { gql } from "@apollo/client";

export async function getServerSideProps(context: any) {
  const { blog } = context.params;
  const content = await client
    .query({
      query: gql`
        query Blog($title: String!) {
          blog(title: $title) {
            id
            authorId
            createdAt
            updatedAt
            category
            title
            content
          }
        }
      `,
      variables: {
        title: blog,
      },
    })
    .then((response) => {
      return response.data.blog.content;
    });
  const mdxSource = await serialize(content.join(`\n`));
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token, mdxSource } };
  }
  return { props: { token: null, mdxSource } };
}

export default function Blog({
  token,
  mdxSource,
}: {
  token: string;
  mdxSource: MDXRemoteSerializeResult;
}) {
  const router = useRouter();
  const { blog } = router.query;

  const { loading, error, data } = useQuery(BlogQuery, {
    variables: { title: blog },
  });

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data) {
    return (
      <Page>
        <div className="flex w-full justify-center">
          <BlogView mdxSource={mdxSource} blog={data.blog} />
        </div>
      </Page>
    );
  }

  return null;
}
