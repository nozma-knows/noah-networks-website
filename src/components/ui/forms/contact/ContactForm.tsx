import React from "react";
import { FieldValues, useForm, UseFormSetValue } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Box, Grid } from "@mui/material";
import TextField from "./../../../ui/form-fields/TextField";
import Button from "../../buttons/Button";
import { REGEX_EMAIL } from "../../../utils/regex/Regex";

// Credentials for EmailJS
const emailJSAccessToken: string | undefined =
  process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN;
const emailJSServiceId: string | undefined =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJSTempleId: string | undefined =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

const onSubmit = ({
  data,
  setValue,
}: {
  data: any;
  setValue: UseFormSetValue<FieldValues>;
}) => {
  Object.keys(data).map((keys) => setValue(`${keys}`, ""));
  const templateParams = { ...data };
  if (emailJSAccessToken && emailJSServiceId && emailJSTempleId) {
    emailjs
      .send(
        emailJSServiceId,
        emailJSTempleId,
        templateParams,
        emailJSAccessToken
      )
      .then(() => console.log("Success!: "))
      .catch((error) => console.log("Error: ", error));
  }
};

interface ContactFormProps {
  loading: boolean;
}

export default function ContactForm({ loading }: ContactFormProps) {
  // React Hook Form variables
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<FieldValues>();

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ data, setValue }))}>
      <Box sx={{ flexGrow: 1 }} className="w-full max-w-2xl ">
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="name"
              type="text"
              placeholder="Full name"
              required="Full name is required."
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="email"
              type="text"
              placeholder="Email address"
              required="Email address is required."
              pattern={{
                value: REGEX_EMAIL,
                message: "Please enter a valid email address",
              }}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              control={control}
              name="message"
              type="text"
              placeholder="Message"
              required="Message is required."
              errors={errors}
              multiline
              minRows={4}
              maxRows={4}
            />
          </Grid>
          <Grid item xs={12} className="flex justify-center pt-8">
            <Button label="Submit" loading={loading} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
