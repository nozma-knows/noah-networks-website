import React, { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { Grid, Tooltip } from "@mui/material";
import { DeleteProjectMutation } from "@/components/graph";
import { Project as ProjectType } from "src/__generated__/graphql";
import Popup from "@/components/ui/popups/Popup";
import Button from "@/components/ui/buttons/Button";
import ProjectPreview from "./ProjectPreview";
import { motion } from "framer-motion";

interface DeleteProjectPopupProps {
  id: string;
  deleteProjectMutation: any;
  setShowDeletePopup: (showDeletedPopup: string | undefined) => void;
}

const DeleteProjectPopup = ({
  id,
  deleteProjectMutation,
  setShowDeletePopup,
}: DeleteProjectPopupProps) => {
  console.log("id: ", id);
  return (
    <Popup onClose={() => setShowDeletePopup(undefined)}>
      <div className="flex flex-col items-center p-16 gap-8 bg-main-light">
        <div>Are you sure you want to permenantely delete this project?</div>
        <div className="flex gap-4">
          <Button
            label="Yes, I'm sure"
            secondary
            onClick={() =>
              deleteProjectMutation({
                variables: {
                  id,
                },
              })
            }
          />
          <Button
            label="Cancel"
            onClick={() => setShowDeletePopup(undefined)}
          />
        </div>
      </div>
    </Popup>
  );
};

interface ProjectsViewProps {
  projects: ProjectType[];
  editing?: boolean;
}

export default function ProjectsView({ projects, editing }: ProjectsViewProps) {
  const [showDeletePopup, setShowDeletePopup] = useState<string | undefined>(
    undefined
  );

  const [deleteProject, { loading, error }] = useMutation(
    DeleteProjectMutation,
    {
      onCompleted: () => {
        setShowDeletePopup(undefined);
        Router.reload();
      },
      onError: () => console.log("error!"),
    }
  );

  return (
    <motion.div
      className=" w-full sm:h-full overflow-y-auto sm:p-8 gap-8"
      initial={{ opacity: 0, x: 0, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      {showDeletePopup !== undefined && (
        <DeleteProjectPopup
          id={showDeletePopup}
          deleteProjectMutation={deleteProject}
          setShowDeletePopup={setShowDeletePopup}
        />
      )}
      <div className="flex w-full">
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <ProjectPreview
              project={project}
              editing={editing || false}
              setShowDeletePopup={setShowDeletePopup}
            />
          ))}
        </Grid>
      </div>
    </motion.div>
  );
}
