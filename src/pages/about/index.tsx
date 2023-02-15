import Page from "src/components/ui/page/Page";
import WorkExperience from "@/components/feature-about/work-experience/WorkExperience";
import Skills from "@/components/feature-about/skills/Skills";

const title = `About me.`;
const subtitle = `I'm a builder who specializes in software and hardware engineering. I have work experience building full-stack web applications, designing pcbs and interfacing with customers.`;

export default function About() {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16">
        <div className="flex flex-col gap-8 sm:w-3/4 p-2">
          <div>
            <h1 className="text-[#a56baf]">{title}</h1>
            <div>{subtitle}</div>
          </div>
          <Skills />
          <WorkExperience />
        </div>
      </div>
    </Page>
  );
}
