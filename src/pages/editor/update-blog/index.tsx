import React from "react";
import Router, { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { BlogQuery } from "@/components/graph";
import { FieldValues } from "react-hook-form";
import Page from "src/components/ui/page/Page";
import CreateBlogForm from "@/components/feature-blog/ui/forms/CreateBlogForm";
import { UpdateBlogMutation } from "@/components/graph";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import VerifyToken from "@/components/utils/conversion/VerifyToken";

const title = `Update blog.`;
export default function UpdateBlog() {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const tokenDetails = VerifyToken({ token });
  const userId = tokenDetails ? tokenDetails.userId : undefined;

  const router = useRouter();
  const { blog: blogId } = router.query;

  const [updateBlog, { loading, error }] = useMutation(UpdateBlogMutation, {
    onCompleted: () => {
      Router.push("/editor");
    },
    onError: () => console.log("error!"),
  });

  const { error: blogQueryError, data } = useQuery(BlogQuery, {
    variables: { id: blogId },
  });

  const onSubmit = async (data: FieldValues) => {
    updateBlog({
      variables: {
        id: blogId,
        input: {
          authorId: userId || process.env.NEXT_PUBLIC_DEFAULT_AUTHOR,
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

  if (data && data.blog) {
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
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        Error - Unable to find blog.
      </div>
    </Page>
  );
}
