import { useQuery } from "@apollo/client";
import { BlogsQuery } from "@/components/graph";
import BlogsView from "@/components/feature-blog/ui/BlogsView";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

export default function BlogEditor() {
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
    return <BlogsView blogs={blogs} editing />;
  }

  return null;
}
