import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import { DateTime } from "luxon";
import TextField from "@/components/ui/form-fields/TextField";
import AutocompleteField from "@/components/ui/form-fields/AutocompleteField";
import Button from "@/components/ui/buttons/Button";
import ProjectView from "../ProjectView";

interface CreateProjectFormProps {
  defaultValues?: FieldValues;
  loading: boolean;
  onSubmit: SubmitHandler<FieldValues>;
}

export default function CreateProjectForm({
  defaultValues,
  loading,
  onSubmit,
}: CreateProjectFormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FieldValues>({
    ...(defaultValues
      ? {
          defaultValues: {
            name: defaultValues.name,

            website: defaultValues.website,
            github: defaultValues.github,
            category: defaultValues.category,
            title: defaultValues.title,
            subtitle: defaultValues.subtitle,
            content: defaultValues.content.join("\n"),
          },
        }
      : {}),
  });

  const watchValues = watch();

  console.log("watchValues: ", watchValues);

  return (
    <div className="grid grid-cols-1 gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ flexGrow: 1 }} className="w-full">
          <Grid container columnSpacing={3}>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="name"
                type="text"
                placeholder="Name"
                required="Name is required."
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="website"
                type="text"
                placeholder="Website"
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                control={control}
                name="github"
                type="text"
                placeholder="GitHub"
                errors={errors}
              />
            </Grid>
            <Grid item xs={12}>
              <AutocompleteField
                control={control}
                name="category"
                options={["Web Application", "Hardware", "Arduino", "Software"]}
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
        <ProjectView
          project={{
            createdAt: DateTime.fromISO(new Date().toISOString()).toString(),
            updatedAt: DateTime.fromISO(new Date().toISOString()).toString(),
            name: watchValues.name,
            website: watchValues.website,
            github: watchValues.github,
            category: watchValues.category,
            title: watchValues.title,
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
