import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Page from "src/components/ui/page/Page";
import { useQuery, useMutation } from "@apollo/client";
// import { DeleteBlogMutation } from "@/components/graph";
import Tooltip from "@mui/material/Tooltip";
import { BlogsQuery } from "@/components/graph";
// import { Blog as BlogType } from "src/__generated__/graphql";
// import BlogPreview from "@/components/feature-blog/ui/BlogPreview";
import { FaPlus } from "react-icons/fa";
// import Button from "@/components/ui/buttons/Button";
// import Popup from "@/components/ui/popups/Popup";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CodeBlock from "src/components/feature-editor/ui/CodeBlock";
import ReactMarkdown from "react-markdown";
import { FieldValues, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import TextField from "@/components/ui/form-fields/TextField";
import AutocompleteField from "@/components/ui/form-fields/AutocompleteField";
import BlogEditor from "@/components/feature-editor/ui/blog-editor";
import ProjectEditor from "@/components/feature-editor/ui/project-editor";

const title = `Editor.`;
const editorOptions = [`Blog Editor.`, `Project Editor.`];

// interface DeleteBlogPopupProps {
//   title: string;
//   setShowDeletePopup: (showDeletedPopup: string | undefined) => void;
// }

// const EditorView = ({ blogs }: { blogs: BlogType[] }) => {
//   const [showDeletePopup, setShowDeletePopup] = useState<string | undefined>(
//     undefined
//   );
//   const [showEditorSelector, setShowEditorSelector] = useState(false);
//   const [selectedEditor, setSelectedEditor] = useState("Blog");

// const [deleteBlog, { loading, error }] = useMutation(DeleteBlogMutation, {
//   onCompleted: () => {
//     setShowDeletePopup(undefined);
//     Router.reload();
//   },
//   onError: () => console.log("error!"),
// });

//   const DeleteBlogPopup = ({
//     title,
//     setShowDeletePopup,
//   }: DeleteBlogPopupProps) => {
//     return (
//       <Popup onClose={() => setShowDeletePopup(undefined)}>
//         <div className="flex flex-col items-center p-16 gap-8 bg-main-light">
//           <div>
//             Are you sure you want to permenantely delete this blog post?
//           </div>
//           <div className="flex gap-4">
//             <Button
//               label="Yes, I'm sure"
//               secondary
//               onClick={() => DeleteBlog(title)}
//             />
//             <Button
//               label="Cancel"
//               onClick={() => setShowDeletePopup(undefined)}
//             />
//           </div>
//         </div>
//       </Popup>
//     );
//   };

//   const DeleteBlog = async (title: string) => {
//     deleteBlog({
//       variables: {
//         title,
//       },
//     });
//   };

//   return (
//     <Page>
//       <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
//         {showDeletePopup !== undefined && (
//           <DeleteBlogPopup
//             title={showDeletePopup}
//             setShowDeletePopup={setShowDeletePopup}
//           />
//         )}
//         <div className=" flex flex-col gap-8 w-3/4">
//           <div className="flex items-center justify-between">
//             <div className="flex flex-col">
//               <div className="flex items-center gap-2">
//                 <div className="button">
//                   {showEditorSelector ? (
//                     <FaAngleUp
//                       onClick={() => setShowEditorSelector(!showEditorSelector)}
//                     />
//                   ) : (
//                     <FaAngleDown
//                       onClick={() => setShowEditorSelector(!showEditorSelector)}
//                     />
//                   )}
//                 </div>
//                 <h1 className="text-secondary-light">{`${selectedEditor} ${title}`}</h1>
//               </div>
//               {showEditorSelector && (
//                 <div className="flex flex-col gap-2 justify-start bg-red-400 p-4 rounded-xl">
//                   {editorOptions.map((option, index) => (
//                     <Link key={index} href={option.link} className="button">
//                       {option.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center gap-8 text-4xl">
//               <Tooltip title="Create a new blog" arrow>
//                 <div>
//                   <Link href="/editor/blog/create-blog">
//                     <FaPlus className="button" />
//                   </Link>
//                 </div>
//               </Tooltip>
//             </div>
//           </div>
//           <div className="flex flex-col justify-center gap-8">
//             {blogs.map((blog, index) => (
//               <div key={index} className="flex items-center justify-center">
//                 <Tooltip title="Delete blog" arrow>
//                   <div
//                     onClick={() => setShowDeletePopup(blog.title || undefined)}
//                   >
//                     <FaTrash className="button text-4xl" />
//                   </div>
//                 </Tooltip>
//                 <BlogPreview
//                   blog={blog}
//                   buttonText="Edit blog"
//                   buttonLink={`/editor/blog/update-blog?blog=${blog.title}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Page>
//   );
// };

// export default function Editor() {
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     console.log("token: ", token);
//   }, []);

//   const { loading, error, data } = useQuery(BlogsQuery);

//   if (loading) {
//     return <ScreenLoader />;
//   }

//   if (error) {
//     return <ErrorPage />;
//   }

//   if (data) {
//     const blogs = [...data.blogs].sort((a, b) =>
//       a.createdAt < b.craeteAt ? 1 : -1
//     );
//     // return (
//     //     <Page>
//     //       <LiveProvider code="<strong>Hello World!</strong>">
//     //         <div className="flex w-full h-full flex-col">
//     //           <div className="flex flex-1  p-4 gap-4">
//     //             <LiveEditor className="flex flex-1 bg-secondary-dark overflow-auto p-4 rounded-xl" />
//     //             <LivePreview className="flex flex-1 bg-secondary-dark p-4 rounded-xl" />
//     //           </div>
//     //           <div className="h-20 flex justify-start px-4">
//     //             <LiveError />
//     //           </div>
//     //         </div>
//     //       </LiveProvider>
//     //     </Page>
//     // );
//     // return (
//     //   <Page>
//     //     <div className="flex w-full h-full flex-col">
//     //       <div className="flex flex-1  p-4 gap-4">
//     //         <div className="flex flex-1 bg-secondary-dark overflow-auto p-4 rounded-xl" />
//     //         <div className="flex flex-1 bg-secondary-dark p-4 rounded-xl" />
//     //       </div>
//     //       <div className="h-20 flex justify-start px-4">
//     //         <div />
//     //       </div>
//     //     </div>
//     //   </Page>
//     // );
//   }

//   return null;
// }

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
    handleSubmit,
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
              <Tooltip title="Create a new blog" arrow>
                <Link href="/editor/create-blog">
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
