import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { FaTrash } from "react-icons/fa";
import { Project as ProjectType } from "src/__generated__/graphql";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { Grid } from "@mui/material";

interface ProjectPreviewProps {
  project: ProjectType;
  editing: boolean;
  setShowDeletePopup: (showDeletePopup: string | undefined) => void;
}

export default function ProjectPreview({
  project,
  editing,
  setShowDeletePopup,
}: ProjectPreviewProps) {
  if (editing) {
    return (
      <div className="flex flex-col w-full h-full border-2 rounded-xl">
        <div className="flex h-full p-4 sm:p-8 items-center gap-4">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col items-start h-full">
              <div className="text-secondary-light">{project.category}</div>
              <div className="text-2xl font-semibold">{project.name}</div>
            </div>
            <div className="flex text-lg">{project.title}</div>
          </div>
          <div className="flex flex-col h-full justify-between items-center">
            <Tooltip title="Delete project" arrow>
              <div
                className="h-fit"
                onClick={() => setShowDeletePopup(project.id || undefined)}
              >
                <FaTrash className="button text-3xl" />
              </div>
            </Tooltip>
            <div className="self-start pt-4">
              <LinkButton
                className="text-sm sm:text-base bg-main-light px-4 py-2 rounded-xl button text-main-light font-bold"
                label="Update"
                href={`/editor/update-project?project=${project.id}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    // <Grid item sm={12} md={6}>
    //   <Link
    //     href={`/projects/${project.id}`}
    //     className="flex flex-col w-full h-full min-h-full border-2 rounded-xl button bg-blue-500"
    //   >
    //     <div className="flex flex-col p-8 w-full h-full">
    //       <div className="flex flex-1 flex-col items-start h-full">
    //         <div className="text-secondary-light">{project.category}</div>
    //         <div className="text-2xl font-semibold">{project.name}</div>
    //       </div>
    //       <div className="flex h-full text-lg ">{project.title}</div>
    //     </div>
    //   </Link>
    // </Grid>
    <Grid item xs={12} md={6} xl={4}>
      <div className="flex flex-col border-2 h-52 p-4 rounded-lg button">
        <div className="flex flex-1 flex-col items-start h-full">
          <div className="text-secondary-light">{project.category}</div>
          <div className="text-2xl font-semibold">{project.name}</div>
        </div>
        <div className="flex h-full text-lg">
          <p className="line-clamp-4 text-ellipsis">{project.title}</p>
        </div>
      </div>
    </Grid>
  );
}
