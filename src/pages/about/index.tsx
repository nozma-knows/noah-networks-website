import Page from "src/components/ui/page/Page";
import WorkExperience from "@/components/feature-about/work-experience/WorkExperience";
import Skills from "@/components/feature-about/skills/Skills";
import ReactMarkdown from "react-markdown";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { motion } from "framer-motion";

const title = `About me.`;

const aboutMe = [
  `I'm a builder who specializes in software and hardware engineering. I have work experience building full-stack web applications, designing and  testing PCBs along with hardware design support and sales.`,
  `I love learnining how things work and getting hands on, so I spend a lot of my free time researching and tinkering. When I remember to give myself a break, I open up Ableton and play with sounds, or get lost on Netflix and Youtube binges.`,
];

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        {aboutMe.map((item, index) => (
          <ReactMarkdown key={index}>{item}</ReactMarkdown>
        ))}
      </motion.div>
      <div className="flex gap-8 pt-8 text-4xl sm:text-5xl justify-center">
        <LinkButton
          href="https://github.com/nozma-knows"
          label={<FaGithub />}
          newTab
        />
        <LinkButton
          href="https://www.linkedin.com/in/noahmilberger/"
          label={<FaLinkedin />}
          newTab
        />
        <LinkButton
          href="https://twitter.com/noahmilberger"
          label={<FaTwitter />}
          newTab
        />
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit sm:pt-8 pb-16">
        <div className="flex flex-col gap-8 sm:w-3/4 p-2">
          <div>
            <h1 className="text-[#a56baf]">{title}</h1>
          </div>
          <AboutMe />
          <Skills />
          <WorkExperience />
        </div>
      </div>
    </Page>
  );
}
