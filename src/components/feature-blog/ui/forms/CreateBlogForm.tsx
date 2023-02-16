import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import { DateTime } from "luxon";
import TextField from "@/components/ui/form-fields/TextField";
import AutocompleteField from "@/components/ui/form-fields/AutocompleteField";
import Button from "@/components/ui/buttons/Button";
import BlogView from "../BlogView";

interface CreateBlogFormProps {
  defaultValues?: FieldValues;
  loading: boolean;
  onSubmit: SubmitHandler<FieldValues>;
}

export default function CreateBlogForm({
  defaultValues,
  loading,
  onSubmit,
}: CreateBlogFormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FieldValues>({
    defaultValues,
  });

  const watchValues = watch();

  return (
    <div className="grid grid-cols-1 gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }} className="w-full">
          <Grid container columnSpacing={3}>
            <Grid item xs={12}>
              <AutocompleteField
                control={control}
                name="category"
                options={["Journey", "Technology", "Tutorial"]}
                value={watchValues.category}
                placeholder="Category"
                required="Must select a category."
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="title"
                type="text"
                placeholder="Title"
                required="Title is required."
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="subtitle"
                type="text"
                placeholder="Subtitle"
                required="Subtitle is required."
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="content"
                type="text"
                placeholder="Content"
                required="Content is required."
                errors={errors}
                multiline
                minRows={6}
              />
            </Grid>
            <Grid item xs={12} className="flex justify-center">
              <Button label="Submit" loading={loading} />
            </Grid>
          </Grid>
        </Box>
      </form>
      <div className="flex justify-center w-full">
        <BlogView
          blog={{
            createdAt: DateTime.fromISO(new Date().toISOString()).toString(),
            updatedAt: DateTime.fromISO(new Date().toISOString()).toString(),
            category: watchValues.category,
            title: watchValues.title,
            subtitle: watchValues.subtitle,
            content: watchValues.content
              ? watchValues.content.split("\n")
              : watchValues.content,
          }}
          noBackButton
        />
      </div>
    </div>
  );
}
