import Link from "next/link";
import Page from "src/components/ui/page/Page";
import * as cookie from "cookie";

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

const title = `About me.`;
const subtitle = `I'm a builder who specializes in software and hardware engineering. I have work experience building full-stack web applications, designing pcbs and interfacing with customers.`;

const ExperienceItem = ({
  title,
  subtitle,
  start,
  end,
  link,
  points,
}: {
  title: string;
  subtitle: string;
  start: string;
  end: string | undefined;
  link: string;
  points: string[];
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Link
          href={link}
          target="_blank"
          className="text-[#a56baf] text-lg font-semibold button"
        >
          {title}
        </Link>
        <span>•</span>
        <div className="text-base italic">{subtitle}</div>
      </div>
      <div className="text-sm lg:text-base">{`${start} ${
        end ? `- ${end}` : ""
      }`}</div>
      <ul className="list-disc pl-8 text-base">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const SkillItem = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[#a56baf] text-xl font-semibold">{title}</div>
      <div className="">{list.join(", ")}</div>
    </div>
  );
};

const workExperience = [
  {
    title: "tbh (Mindset Labs)",
    subtitle: "Full-stack Engineer",
    start: "Jan. 2022",
    end: "Present",
    link: "https://www.tbh.us/",
    points: [
      "Design and build full-stack web applications from idea to deployment",
      `Integrate countless libraries and third party tools such as
       Redux, TailwindCSS, MUI, Google APIs, Calendly,
       SimpleTexting, Datadog, Sentry, Stripe, Zoom, etc...`,
    ],
  },
  {
    title: "Texas Instruments",
    subtitle: "Field Applications Engineer",
    start: "May 2018 - May 2021",
    end: "Present",
    link: "https://www.ti.com/",
    points: [
      `Supported customers throughout their entire design cycle`,
      `Provided customers with solutions to maximize their design care-abouts`,
      `Reviewed / Debugged schematics, layouts, and prototypes`,
      `Designed PCBs with Altium`,
      `Used SPICE simulation software to design and integrate analog circuits`,
    ],
  },
  {
    title: "Textron",
    subtitle: "Engineering Intern",
    start: "Summer 2017",
    link: "https://www.textron.com/",
    points: [
      `Designed, built and tested a device used to program a utility product released to market`,
      `Designed PCB using EAGLE and wrote firmware using Python`,
      `Improved circuit design skills and understanding of the design process`,
    ],
  },
];

const skills = [
  {
    title: "Programming Languages",
    list: [
      `JavaScript`,
      `TypeScript`,
      `HTML`,
      `CSS`,
      `GraphQL`,
      `Python`,
      `C/C++`,
      `MATLAB`,
      `PSpice`,
    ],
  },
  {
    title: "Libraries and Frameworks",
    list: [
      `React`,
      `NextJS`,
      `Redux`,
      `TailwindCSS`,
      `NodeJS`,
      `Express`,
      `NestJS`,
    ],
  },
  {
    title: "Tools and Platforms",
    list: [`Git`, `Webpack`, `Postgres`, `Docker`, `Heroku`, `AWS`, `Apollo`],
  },
  {
    title: "Hardware",
    list: [
      `Digital and analog hardware design`,
      `PCB design - EAGLE/Altium`,
      `Circuit analysis`,
    ],
  },
];

const WorkExperience = () => {
  return (
    // <div className="border-gray border-2 p-8 rounded-xl w-full">
    <div className="p-4 rounded-xl w-full">
      <div className="text-2xl lg:text-3xl pb-8 font-semibold">
        Work Experience
      </div>
      <div className="flex flex-col gap-8">
        {workExperience.map((item, index) => {
          return (
            <div key={index}>
              <ExperienceItem
                title={item.title}
                subtitle={item.subtitle}
                start={item.start}
                end={item.end}
                link={item.link}
                points={item.points}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    // <div className="border-gray border-2 p-8 rounded-xl w-full">
    <div className="p-4 rounded-xl w-full">
      <div className="text-2xl lg:text-3xl pb-8 font-semibold">Skills</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((item, index) => {
          return (
            <div key={index}>
              <SkillItem title={item.title} list={item.list} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function About({ token }: { token: string }) {
  return (
    <Page>
      <div className="flex justify-center items-center w-full h-fit pt-8 pb-16">
        <div className=" flex flex-col gap-8 w-3/4">
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
