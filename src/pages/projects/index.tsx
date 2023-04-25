import { useQuery } from "@apollo/client";
import { ProjectsQuery } from "@/components/graph";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import ProjectsView from "@/components/feature-projects/ui/ProjectsView";
import Page from "@/components/ui/page/Page";

const title = `My projects.`;

export default function Projects() {
  const { loading, error, data } = useQuery(ProjectsQuery);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    console.log("Error: ", error);
    return <ErrorPage />;
  }

  if (data) {
    const projects = [...data.projects].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return (
      <Page>
        <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-8">
          <div className=" flex flex-col gap-8 p-2 w-full sm:w-3/4">
            <h1 className="text-secondary-light">{title}</h1>
            <ProjectsView projects={projects} />
          </div>
        </div>
      </Page>
    );
  }

  return null;
}
