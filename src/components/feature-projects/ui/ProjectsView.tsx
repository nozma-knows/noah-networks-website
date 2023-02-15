import Link from "next/link";
import { Project as ProjectType } from "src/__generated__/graphql";
import Page from "@/components/ui/page/Page";

const title = `My projects.`;

interface ProjectsViewProps {
  projects: ProjectType[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-full p-2 sm:w-3/4">
          <h1 className="text-[#a56baf]">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full sm:h-full overflow-y-auto sm:p-8 gap-8">
            {projects.map((project, index) => {
              return (
                // <Link
                //   href={`/projects/${project.name}`}
                //   key={index}
                //   className="border-2 p-4 sm:p-8 rounded-xl hover:bg-main-light hover:text-main-dark"
                // >
                <Link
                  href={`/projects/${project.name}`}
                  key={index}
                  className="border-2 p-4 sm:p-8 rounded-xl button "
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <div className="text-2xl font-semibold">{project.name}</div>
                    <div className="hidden sm:block">•</div>
                    <div className="text-base text-secondary-light">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex pt-4 sm:pt-0 text-lg">
                    {project.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
