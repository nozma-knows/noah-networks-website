import React from "react";
import Router, { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { ProjectQuery } from "@/components/graph";
import { FieldValues } from "react-hook-form";
import Page from "src/components/ui/page/Page";
import CreateProjectForm from "@/components/feature-projects/ui/forms/CreateProjectForm";
import { UpdateProjectMutation } from "@/components/graph";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import VerifyToken from "@/components/utils/conversion/VerifyToken";

const title = `Update project.`;
export default function UpdateProject() {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const tokenDetails = VerifyToken({ token });
  const userId = tokenDetails ? tokenDetails.userId : undefined;

  const router = useRouter();
  const { project: projectId } = router.query;

  const [updateProject, { loading, error }] = useMutation(
    UpdateProjectMutation,
    {
      onCompleted: () => {
        Router.push("/editor");
      },
      onError: () => console.log("error!"),
    }
  );

  const { error: projectQueryError, data } = useQuery(ProjectQuery, {
    variables: { id: projectId },
  });

  const onSubmit = async (data: FieldValues) => {
    updateProject({
      variables: {
        id: projectId,
        input: {
          authorId: userId || process.env.NEXT_PUBLIC_DEFAULT_AUTHOR,
          name: data.name,
          website: data.website,
          github: data.github,
          category: data.category,
          title: data.title,
          subtitle: data.subtitle,
          content: data.content,
        },
      },
    });
  };

  if (loading) {
    return <ScreenLoader />;
  }

  if (projectQueryError) {
    return <ErrorPage />;
  }

  if (data && data.project) {
    const defaultValues = {
      name: data.project.name,
      website: data.project.website,
      github: data.project.github,
      category: data.project.category,
      title: data.project.title,
      subtitle: data.project.subtitle,
      content: data.project.content,
    };
    return (
      <Page>
        <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
          <div className=" flex flex-col gap-8 w-3/4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <h1 className="text-secondary-light pb-8">{title}</h1>
                <CreateProjectForm
                  defaultValues={defaultValues}
                  loading={loading}
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        Error - Unable to find project.
      </div>
    </Page>
  );
}
