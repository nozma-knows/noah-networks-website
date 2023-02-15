import { useQuery } from "@apollo/client";
import { BlogsQuery } from "@/components/graph";
import Page from "src/components/ui/page/Page";
import { Blog as BlogType } from "src/__generated__/graphql";
import BlogPreview from "@/components/feature-blog/ui/BlogPreview";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

const title = `Noah's narrative.`;

const BlogView = ({ blogs }: { blogs: BlogType[] }) => {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16">
        <div className=" flex flex-col gap-8 p-2 w-full sm:w-3/4">
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

export default function Blog() {
  const { loading, error, data } = useQuery(BlogsQuery);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data) {
    const blogs = [...data.blogs].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return <BlogView blogs={blogs} />;
  }

  return null;
}
