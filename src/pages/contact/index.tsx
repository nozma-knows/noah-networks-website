import React, { useState } from "react";
import Page from "src/components/ui/page/Page";
import * as cookie from "cookie";
import ContactForm from "src/components/ui/forms/contact/ContactForm";

export function getServerSideProps(context: any) {
  if (context.req.headers.cookie) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    console.log("parsedCookies: ", parsedCookies);
    const sessionCookie = JSON.parse(parsedCookies.session);
    const { token } = sessionCookie;
    return { props: { token } };
  }
  return { props: { token: null } };
}

const title = `Contact me.`;

export default function Contact({ token }: { token: string }) {
  const [loading, setLoading] = useState(false);

  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16 ">
        <div className="flex flex-col gap-8 w-3/4">
          <h1 className="text-secondary-light">{title}</h1>
          <div className="flex justify-center">
            <ContactForm loading={loading} />
          </div>
        </div>
      </div>
    </Page>
  );
}
