import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import TextField from "@/components/ui/form-fields/TextField";
import AutocompleteField from "@/components/ui/form-fields/AutocompleteField";
import Button from "@/components/ui/buttons/Button";

import { useQuery } from "@apollo/client";
import { BlogsQuery } from "@/components/graph";
// import { Blog as BlogType } from "src/__generated__/graphql";
// import BlogPreview from "@/components/feature-blog/ui/BlogPreview";
import BlogsView from "@/components/feature-blog/ui/BlogsView";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

// export default function BlogEditor() {
//   const {
//     control,
//     formState: { errors },
//     handleSubmit,
//     watch,
//   } = useForm<FieldValues>();

//   const [loading, setLoading] = useState(false);
//   const onSubmit = () => console.log("blog-editor - onSubmit clicked!");

//   const watchCategory = watch("category");

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Box sx={{ flexGrow: 1 }} className="w-full">
//         <Grid container columnSpacing={3}>
//           <Grid item xs={12} sm={12} lg={4}>
//             <TextField
//               control={control}
//               name="title"
//               type="text"
//               placeholder="Title"
//               required="Title is required."
//               errors={errors}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} lg={4}>
//             <AutocompleteField
//               control={control}
//               name="category"
//               options={["Option 1", "Option 2", "Option 3"]}
//               value={watchCategory}
//               placeholder="Select a category."
//               required="Must select a category."
//               errors={errors}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} lg={4}>
//             <TextField
//               control={control}
//               name="subtitle"
//               type="text"
//               placeholder="Subtitle"
//               required="Subtitle is required."
//               errors={errors}
//             />
//           </Grid>
//           <Grid item xs={12} className="flex justify-center">
//             <Button label="Submit" loading={loading} />
//           </Grid>
//         </Grid>
//       </Box>
//     </form>
//   );
// }

export default function BlogEditor() {
  const { loading, error, data } = useQuery(BlogsQuery);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (data) {
    const blogs = [...data.blogs].sort((a, b) =>
      a.createdAt < b.craeteAt ? 1 : -1
    );
    return <BlogsView blogs={blogs} editing />;
  }

  return null;
}
