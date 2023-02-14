import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { ProjectQuery } from "@/components/graph";
import * as cookie from "cookie";
import Page from "src/components/ui/page/Page";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import ProjectView from "@/components/feature-projects/ui/ProjectView";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import client from "./../../../apollo-client";
import { gql } from "@apollo/client";

export async function getServerSideProps(context: any) {
  const { project } = context.params;
  const content = await client
    .query({
      query: gql`
        query Project($name: String!) {
          project(name: $name) {
            id
            authorId
            createdAt
            updatedAt
            github
            website
            category
            name
            title
            content
          }
        }
      `,
      variables: {
        name: project,
      },
    })
    .then((response) => {
      return response.data.project.content;
    });
  console.log("noah - [project].tsx - content: ", content.join(`\n`));
  const mdxSource = await serialize(content.join(`\n`));
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token, mdxSource } };
  }
  return { props: { token: null, mdxSource } };
}

export default function Projects({
  token,
  mdxSource,
}: {
  token: string;
  mdxSource: MDXRemoteSerializeResult;
}) {
  const router = useRouter();
  const { project } = router.query;

  const { loading, error, data } = useQuery(ProjectQuery, {
    variables: { name: project },
  });

  if (loading) {
    return <ScreenLoader token={token} />;
  }

  if (error) {
    return <ErrorPage token={token} />;
  }

  if (data) {
    return (
      <Page>
        <div className="flex w-full justify-center">
          <ProjectView mdxSource={mdxSource} project={data.project} />
        </div>
      </Page>
    );
  }

  return null;
}
