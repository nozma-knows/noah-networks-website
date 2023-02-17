import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { BlogQuery } from "@/components/graph";
import BlogView from "@/components/feature-blog/ui/BlogView";
import Page from "@/components/ui/page/Page";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemoteSerializeResult } from "next-mdx-remote";
// import client from "./../../../apollo-client";
// import { gql } from "@apollo/client";

// export async function getServerSideProps(context: any) {
//   const { blog } = context.params;
//   const content = await client
//     .query({
//       query: gql`
//         query Blog($title: String!) {
//           blog(title: $title) {
//             id
//             authorId
//             createdAt
//             updatedAt
//             category
//             title
//             content
//           }
//         }
//       `,
//       variables: {
//         title: blog,
//       },
//     })
//     .then((response) => {
//       return response.data.blog.content;
//     });
//   const mdxSource = await serialize(content.join(`\n`));
//   return { props: { mdxSource } };
// }

// export default function Blog({
//   mdxSource,
// }: {
//   mdxSource: MDXRemoteSerializeResult;
// }) {
export default function Blog() {
  const router = useRouter();
  const { blog } = router.query;

  const { loading, error, data } = useQuery(BlogQuery, {
    variables: { id: blog },
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
          {/* <BlogView mdxSource={mdxSource} blog={data.blog} /> */}
          <BlogView blog={data.blog} />
        </div>
      </Page>
    );
  }

  return null;
}
