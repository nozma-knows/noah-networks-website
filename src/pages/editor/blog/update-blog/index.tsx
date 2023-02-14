import React from "react";
import Router, { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { BlogQuery } from "@/components/graph";
import { FieldValues } from "react-hook-form";
import Page from "src/components/ui/page/Page";
import * as cookie from "cookie";
import CreateBlogForm from "@/components/feature-blog/ui/forms/CreateBlogForm";
import { UpdateBlogMutation } from "@/components/graph";
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
  return {
    redirect: {
      destination: "/",
    },
  };
}

const title = `Update blog.`;
export default function UpdateBlog({ token }: { token: string }) {
  const router = useRouter();
  const { blog: blogTitle } = router.query;

  const [updateBlog, { loading, error }] = useMutation(UpdateBlogMutation, {
    onCompleted: () => {
      Router.push("/editor");
    },
    onError: () => console.log("error!"),
  });

  const {
    loading: blogQueryLoading,
    error: blogQueryError,
    data,
  } = useQuery(BlogQuery, {
    variables: { title: blogTitle },
  });

  const onSubmit = async (data: FieldValues) => {
    updateBlog({
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

  if (loading) {
    return <ScreenLoader />;
  }

  if (blogQueryError) {
    return <ErrorPage />;
  }

  if (data) {
    console.log("data: ", data);
    const defaultValues = {
      category: data.blog.category,
      title: data.blog.title,
      subtitle: data.blog.subtitle,
      content: data.blog.content,
    };
    return (
      <Page>
        <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
          <div className=" flex flex-col gap-8 w-3/4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-full">
                <h1 className="text-secondary-light pb-8">{title}</h1>
                <CreateBlogForm
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
}
