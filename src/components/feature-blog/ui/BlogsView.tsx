import React, { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { DeleteBlogMutation } from "@/components/graph";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { Blog as BlogType } from "src/__generated__/graphql";
import BlogPreview from "@/components/feature-blog/ui/BlogPreview";
import Popup from "@/components/ui/popups/Popup";
import Button from "@/components/ui/buttons/Button";

interface DeleteBlogPopupProps {
  title: string;
  setShowDeletePopup: (showDeletedPopup: string | undefined) => void;
}

interface BlogsViewProps {
  blogs: BlogType[];
  editing?: boolean;
}

export default function BlogsView({ blogs, editing }: BlogsViewProps) {
  const [showDeletePopup, setShowDeletePopup] = useState<string | undefined>(
    undefined
  );

  const [deleteBlog, { loading, error }] = useMutation(DeleteBlogMutation, {
    onCompleted: () => {
      setShowDeletePopup(undefined);
      Router.reload();
    },
    onError: () => console.log("error!"),
  });

  const DeleteBlog = async (title: string) => {
    deleteBlog({
      variables: {
        title,
      },
    });
  };

  const DeleteBlogPopup = ({
    title,
    setShowDeletePopup,
  }: DeleteBlogPopupProps) => {
    return (
      <Popup onClose={() => setShowDeletePopup(undefined)}>
        <div className="flex flex-col items-center p-16 gap-8 bg-main-light">
          <div>
            Are you sure you want to permenantely delete this blog post?
          </div>
          <div className="flex gap-4">
            <Button
              label="Yes, I'm sure"
              secondary
              onClick={() => DeleteBlog(title)}
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

  return (
    <div className="flex flex-col gap-8">
      {showDeletePopup !== undefined && (
        <DeleteBlogPopup
          title={showDeletePopup}
          setShowDeletePopup={setShowDeletePopup}
        />
      )}
      {blogs.map((blog, index) => (
        <div key={index} className="flex justify-center items-center">
          {editing && (
            <Tooltip title="Delete blog" arrow>
              <div
                className="h-fit"
                onClick={() => setShowDeletePopup(blog.title || undefined)}
              >
                <FaTrash className="button text-4xl" />
              </div>
            </Tooltip>
          )}
          <BlogPreview
            blog={blog}
            buttonText="Update blog"
            buttonLink="/editor/update-blog"
          />
        </div>
      ))}
    </div>
  );
}
