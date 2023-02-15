import React from "react";
import Page from "src/components/ui/page/Page";
import ContactForm from "src/components/ui/forms/contact/ContactForm";

const title = `Contact me.`;

export default function Contact() {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16 ">
        <div className="flex flex-col gap-8 w-full p-2 sm:w-3/4">
          <h1 className="text-secondary-light">{title}</h1>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </Page>
  );
}
