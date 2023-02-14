import { useQuery } from "@apollo/client";
import { BlogsQuery } from "@/components/graph";
import * as cookie from "cookie";
import Page from "src/components/ui/page/Page";
import { Blog as BlogType } from "src/__generated__/graphql";
import BlogPreview from "@/components/feature-blog/ui/BlogPreview";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

export function getServerSideProps(context: any) {
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    console.log("parsedCookies: ", parsedCookies);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token } };
  }
  return { props: { token: null } };
}

const title = `Noah's narrative.`;

const BlogView = ({ token, blogs }: { token: string; blogs: BlogType[] }) => {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-3/4">
          <h1 className="text-secondary-light">{title}</h1>
          {blogs.map((blog, index) => (
            <div key={index} className="flex justify-center">
              <BlogPreview blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default function Blog({ token }: { token: string }) {
  const { loading, error, data } = useQuery(BlogsQuery);

  if (loading) {
    return <ScreenLoader token={token} />;
  }

  if (error) {
    return <ErrorPage token={token} />;
  }

  if (data) {
    const blogs = [...data.blogs].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return <BlogView token={token} blogs={blogs} />;
  }

  return null;
}
