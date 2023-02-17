import { useQuery } from "@apollo/client";
import { ProjectsQuery } from "@/components/graph";
import ProjectsView from "@/components/feature-projects/ui/ProjectsView";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

export default function ProjectEditor() {
  const { loading, error, data } = useQuery(ProjectsQuery);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data) {
    const projects = [...data.projects].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return <ProjectsView projects={projects} editing />;
  }

  return null;
}
