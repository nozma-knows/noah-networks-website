import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as cookie from "cookie";
import { FieldValues } from "react-hook-form";
import { CreateSessionMutation } from "src/components/graph";
import { Session } from "src/__generated__/graphql";
import LoginForm from "src/components/ui/forms/auth/LoginForm";
import AuthPage from "src/components/feature-auth/AuthPage";

export function getServerSideProps(context: any) {
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    if (token) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    return { props: {} };
  }
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
    // const setsSessionLink = setContext((request, previousContext) => ({
    //   headers: { session: data.login },
    // }));
    // if (!session.setData) {
    //   console.log("Error - Session is undefined");
    //   return;
    // }
    // session.setData(data.login);

    // if (!session.setCookie) {
    //   console.log("Error - session is undefined");
    //   return;
    // }
    // session.setCookie("session", JSON.stringify(data.login), {
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 60 * 60 * 24 * 30,
    //   path: "/",
    // });

    // cookie.serialize("session", JSON.stringify(data.login));

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
