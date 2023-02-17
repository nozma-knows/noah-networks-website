import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Page from "src/components/ui/page/Page";
import Tooltip from "@mui/material/Tooltip";
import { FaPlus } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import AutocompleteField from "@/components/ui/form-fields/AutocompleteField";
import BlogEditor from "@/components/feature-editor/ui/blog-editor";
import ProjectEditor from "@/components/feature-editor/ui/project-editor";

const editorOptions = [`Blog Editor.`, `Project Editor.`];

const EditorSelector = ({ editor }: { editor: string }) => {
  switch (editor) {
    case "Blog Editor.":
      return <BlogEditor />;
    case "Project Editor.":
      return <ProjectEditor />;
    default:
      return null;
  }
};

export default function Editor() {
  const {
    control,
    formState: { errors },
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      editor: editorOptions[0],
    },
  });

  const watchEditor = watch("editor");

  const [editor, setEditor] = useState(watchEditor);

  useEffect(() => {
    setEditor(watchEditor);
  }, [watchEditor]);

  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-full sm:w-3/4">
          <div className="flex gap-4 items-center">
            <AutocompleteField
              control={control}
              name="editor"
              options={editorOptions}
              value={editor}
              placeholder="Select an editor."
              required="Must select an editor."
              errors={errors}
            />
            <div className="h-fit mb-5">
              <Tooltip
                title={`Create a new ${
                  editor === "Blog Editor." ? "blog" : "project"
                }`}
                arrow
              >
                <Link
                  href={`/editor/${
                    editor === "Blog Editor." ? "create-blog" : "create-project"
                  }`}
                >
                  <FaPlus className="button text-3xl" />
                </Link>
              </Tooltip>
            </div>
          </div>

          {editor && EditorSelector({ editor })}
        </div>
      </div>
    </Page>
  );
}
