import React from "react";
import { useQuery } from "@apollo/client";
import { UsersQuery } from "@/components/graph";
import * as cookie from "cookie";
import Typewriter from "typewriter-effect";
import Page from "src/components/ui/page/Page";
import LinkButton from "src/components/ui/buttons/LinkButton";
import ScreenLoader from "@/components/ui/loaders/ScreenLoader";
import ErrorPage from "@/components/ui/page/ErrorPage";

export function getServerSideProps(context: any) {
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token } };
  }
  return { props: { token: null } };
}

const title = `Hi, my name is Noah.`;
const subtitle = `You've stumbled upon my personal website.`;
const note = `I'm a passionate learner, creator and friend. My goal is to make the world happier. I choose to do it through building.`;
const words = [
  " technology.",
  " innovation.",
  " hardware.",
  " software.",
  " building.",
  " shipping.",
];

// const title = ``
const HomeView = ({ token }: { token: string }) => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center w-full gap-8">
        <div className="flex items-center justify-center gap-8">
          <div className="flex text-6xl animate-waving-hand h-fit w-fit">
            👋
          </div>
          <div className=" flex flex-col justify-center items-center gap-8 w-3/4">
            <div className="flex flex-col gap-4 min-w-4/5">
              <h1 className="text-secondary-light">{title}</h1>
              <h2>{subtitle}</h2>
              <span>{note}</span>
            </div>
          </div>
        </div>
        <div className="">
          <LinkButton
            className="text-sm sm:text-base bg-main-light p-4 rounded-xl button text-main-light font-bold"
            label="Check out my blog"
            href="/blog"
          />
        </div>
      </div>
    </Page>
  );
};

export default function Home({ token }: { token: string }) {
  const { loading, error, data } = useQuery(UsersQuery);

  if (loading) {
    return <ScreenLoader token={token} />;
  }

  if (error) {
    return <ErrorPage token={token} />;
  }

  if (data) {
    return <HomeView token={token} />;
  }

  return null;
}
