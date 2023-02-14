import React from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { FieldValues } from "react-hook-form";
import Page from "src/components/ui/page/Page";
import * as cookie from "cookie";
import CreateBlogForm from "@/components/feature-blog/ui/forms/CreateBlogForm";
import { CreateBlogMutation } from "@/components/graph";

export function getServerSideProps(context: any) {
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    console.log("parsedCookies: ", parsedCookies);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token } };
  }
  return {
    redirect: {
      destination: "/",
    },
  };
}

const title = `Create blog.`;
export default function CreateBlog({ token }: { token: string }) {
  const [createBlog, { loading, error }] = useMutation(CreateBlogMutation, {
    onCompleted: () => {
      Router.push("/editor");
    },
    onError: () => console.log("error!"),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log("data: ", data);
    createBlog({
      variables: {
        input: {
          authorId: "017c1ce0-d7c4-4fa4-a2c1-5973a9977585",
          category: data.category,
          title: data.title,
          subtitle: data.subtitle,
          content: data.content,
        },
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
