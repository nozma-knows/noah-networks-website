import React from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { FieldValues } from "react-hook-form";
import Page from "src/components/ui/page/Page";
import CreateBlogForm from "@/components/feature-blog/ui/forms/CreateBlogForm";
import { CreateBlogMutation } from "@/components/graph";
import VerifyToken from "@/components/utils/conversion/VerifyToken";

const title = `Create blog.`;
export default function CreateBlog() {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const tokenDetails = VerifyToken({ token });
  const userId = tokenDetails ? tokenDetails.userId : undefined;

  const [createBlog, { loading, error }] = useMutation(CreateBlogMutation, {
    onCompleted: () => {
      Router.push("/editor");
    },
    onError: () => console.log("error!"),
  });

  const onSubmit = async (data: FieldValues) => {
    const input = {
      authorId: userId || process.env.NEXT_PUBLIC_DEFAULT_AUTHOR,
      category: data.category,
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
    };
    createBlog({
      variables: {
        input,
      },
    });
  };

  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-3/4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-full">
              <h1 className="text-secondary-light pb-8">{title}</h1>
              <CreateBlogForm loading={loading} onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
