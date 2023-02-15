import ExperienceItem from "./ExperienceItem";

const workExperience = [
  {
    title: "tbh",
    subtitle: "Full-stack Engineer",
    start: "Jan. 2022",
    end: "Present",
    link: "https://www.tbh.us/",
    points: [
      `Designed and built our user facing web application for connecting users to live coaches, tools for requesting sessions and interacting with content`,
      `Designed and built a web application for our operations team to help facilitate connecting users with coaches, data analysis and managing communications, notifications and content`,
      `Designed and built a web application for admins to get real-time data on users details, participation and feedback`,
    ],
  },
  {
    title: "Texas Instruments",
    subtitle: "Field Apps Engineer",
    start: "May 2018 - May 2021",
    end: "Present",
    link: "https://www.ti.com/",
    points: [
      `Supported customers throughout their entire design cycle (circuit design, part selction, pcb design, testing)`,
      `Provided customers with solutions to maximize their design care-abouts (reduce cost, higher performance, smaller solutions)`,
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
      `Designed PCBs using EAGLE and wrote firmware using Python`,
      `Improved circuit design skills and understanding of the design process`,
    ],
  },
];

export default function WorkExperience() {
  return (
    <div className="sm:p-4 rounded-xl w-full">
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
}
