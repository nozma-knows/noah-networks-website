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
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-3/4">
          <h1 className="text-[#a56baf]">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full overflow-auto p-8 gap-8">
            {projects.map((project, index) => {
              return (
                <Link
                  href={`/projects/${project.name}`}
                  key={index}
                  className="border-2 p-8 rounded-xl button"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-semibold">{project.name}</div>
                    <div>•</div>
                    <div className="text-base text-secondary-light">
                      {project.category}
                    </div>
                  </div>
                  <div className="text-lg">{project.title}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
