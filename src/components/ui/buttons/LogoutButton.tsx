import React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { DeleteSessionMutation } from "@/components/graph";
import { Session } from "../../../__generated__/graphql";
import { HiOutlineLogout } from "react-icons/hi";

export default function LogoutButton() {
  const router = useRouter();

  const [deleteSession, { data, loading, error }] = useMutation(
    DeleteSessionMutation,
    {
      onCompleted: (data: { login: Session }) => {
        localStorage.removeItem("token");
        router.push("/");
      },
      // onError: (error) => setErrorMessage(error.message),
    }
  );

  const onSubmit = async (data: any) => {
    deleteSession({
      // variables: {
      //   input: {
      //     sessionId: session.cookie.session.id,
      //   },
      // },
    });
  };

  return (
    <button onClick={onSubmit}>
      <HiOutlineLogout className="text-3xl button" />
    </button>
  );
}
