import Link from "next/link";
import { useQuery } from "@apollo/client";
import { ProjectsQuery } from "@/components/graph";
import Page from "src/components/ui/page/Page";
import * as cookie from "cookie";
import { Project as ProjectType } from "src/__generated__/graphql";
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

const title = `My projects.`;

// const projects = [
//   {
//     title: "hygrow",
//     subtitle: "Automated hydroponics system",
//     link: "https://google.com",
//   },
//   {
//     title: "blogger",
//     subtitle:
//       "A space for thinkers to write. Open source web application for hosting and managing blogs.",
//     link: "https://google.com",
//   },

//   {
//     title: "renewed mood",
//     subtitle: "Web application for creating journal entries and tracking mood.",
//     link: "https://google.com",
//   },
//   {
//     title: "lume",
//     subtitle:
//       "Mobile application for controlling individually addressible LEDs over Bluetooth low energy (BLE)",
//     link: "https://google.com",
//   },
//   {
//     title: "noah networks",
//     subtitle: "My personal website and blog.",
//     link: "https://noahnetworks.com",
//   },
//   {
//     title: "anonymess",
//     subtitle: "Real-time anonymous messasge board.",
//     link: "https://anonymess.app",
//   },
//   {
//     title: "Crypto Price Tracker",
//     subtitle: "Real-time crypto price tracker.",
//     link: "https://google.com",
//   },
// ];

const ProjectsView = ({
  token,
  projects,
}: {
  token: string;
  projects: ProjectType[];
}) => {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-3/4">
          <h1 className="text-[#a56baf]">{title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full overflow-auto p-8 gap-8">
            {projects.map((project, index) => {
              console.log("noah - projects - project: ", project);
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
};

export default function Projects({ token }: { token: string }) {
  const { loading, error, data } = useQuery(ProjectsQuery);

  if (loading) {
    return <ScreenLoader token={token} />;
  }

  if (error) {
    return <ErrorPage token={token} />;
  }

  if (data) {
    const projects = [...data.projects].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return <ProjectsView token={token} projects={projects} />;
  }

  return null;
}
