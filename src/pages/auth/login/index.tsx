import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { FieldValues } from "react-hook-form";
import { CreateSessionMutation } from "src/components/graph";
import { Session } from "src/__generated__/graphql";
import LoginForm from "src/components/ui/forms/auth/LoginForm";
import AuthPage from "src/components/feature-auth/AuthPage";

export function getServerSideProps(context: any) {
  return { props: {} };
}

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>();

  const [createSession, { loading, error }] = useMutation(
    CreateSessionMutation,
    {
      onCompleted: (data: { login: Session }) => onCompleted(data),
      onError: (error) => setErrorMessage(error.message),
    }
  );

  const onCompleted = (data: { login: Session }) => {
    localStorage.setItem("token", data.login.token);
    router.push("/");
  };

  const onSubmit = async (data: FieldValues) => {
    createSession({
      variables: {
        input: {
          email: data.email,
          password: data.password,
        },
      },
    });
  };

  return (
    <AuthPage
      title="Log in"
      loading={loading}
      onSubmit={onSubmit}
      Form={LoginForm}
      error={error}
      errorMessage={errorMessage}
    />
  );
}
