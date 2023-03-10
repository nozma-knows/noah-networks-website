import SkillItem from "./SkillItem";

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
      `C`,
      `C++`,
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
      `MUI`,
      `NodeJS`,
      `Express`,
      `NestJS`,
    ],
  },
  {
    title: "Tools and Platforms",
    list: [`Git`, `Postgres`, `Docker`, `Vercel`, `Heroku`, `AWS`, `Apollo`],
  },
  {
    title: "Hardware",
    list: [
      `Digital and analog hardware design, assembly, bringup and testing`,
      `PCB design`,
      `Circuit analysis`,
    ],
  },
];

export default function Skills() {
  return (
    <div className="sm:p-4 rounded-xl w-full">
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
}
