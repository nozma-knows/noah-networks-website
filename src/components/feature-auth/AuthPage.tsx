import React from "react";
import { ApolloError } from "@apollo/client";
import { FieldValues } from "react-hook-form";
import { FormProps } from "src/components/ui/forms/auth/FormProps";
import AuthTopbar from "./AuthTopbar";

interface AuthPageProps {
  title: string;
  loading: boolean;
  onSubmit: (data: FieldValues) => void;
  Form: ({ loading, onSubmit }: FormProps) => JSX.Element;
  error: ApolloError | undefined;
  errorMessage: string | undefined;
}

export default function AuthPage({
  title,
  loading,
  onSubmit,
  Form,
  error,
  errorMessage,
}: AuthPageProps) {
  return (
    <div className="relative flex flex-col h-screen w-screen items-center justify-center gap-8 bg-main-light text-main-light">
      <div className="absolute top-0 flex w-full">
        <AuthTopbar />
      </div>

      <h1 className="text-main-light">{title}</h1>
      <div className="w-4/5 md:w-2/3 max-w-[720px]">
        <Form loading={loading} onSubmit={onSubmit} />
      </div>
      {error && <div>{`${errorMessage}`}</div>}
    </div>
  );
}
