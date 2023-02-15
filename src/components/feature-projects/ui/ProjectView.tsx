import Link from "next/link";
import { Project as ProjectType } from "@/__generated__/graphql";
import { FaArrowLeft, FaLink, FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Maybe } from "@/__generated__/graphql";
import LinkButton from "@/components/ui/buttons/LinkButton";
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// const Content = ({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) => {
//   return (
//     <div className="flex flex-col gap-4 markdown">
//       <MDXRemote {...mdxSource} />
//     </div>
//   );
// };

// export default function ProjectView({
//   mdxSource,
//   project,
//   noBackButton,
// }: {
//   mdxSource: MDXRemoteSerializeResult;
//   project: ProjectType;
//   noBackButton?: boolean;
// }) {
export default function ProjectView({
  project,
  noBackButton,
}: {
  project: ProjectType;
  noBackButton?: boolean;
}) {
  const { name, website, github, category, title, content } = project;
  if (!name || !website || !github || !category || !title || !content) {
    const message = `Required fields haven't been set.`;
    return <div className="flex justify-center items-center">{message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full px-2 sm:px-8 md:w-4/5 md:max-w-3xl lg:max-w-4xl relative">
      {!noBackButton && (
        <Link
          href="/projects"
          className=" absolute text-xl lg:text-2xl top-0 left-0"
        >
          <div className="flex gap-4 items-center button px-2 sm:px-8">
            <FaArrowLeft className="" />
            <div className="">Back to projects</div>
          </div>
        </Link>
      )}
      <div className="flex flex-col items-center gap-8 py-16">
        <div className="flex text-5xl text-fenter">{title}</div>
        <div className="flex items-center gap-4 font-bold text-[#a56baf] text-3xl">
          <LinkButton href={github} label={<FaGithub />} />
          <LinkButton href={website} label={<FaLink />} />
        </div>
        <div className="flex flex-col gap-4">
          {/* <Content mdxSource={mdxSource} /> */}
          {content &&
            content.map((item: Maybe<string>, index: number) => {
              return (
                <ReactMarkdown key={index} className="markdown">
                  {item ? item : ""}
                </ReactMarkdown>
              );
            })}
        </div>
      </div>
    </div>
  );
}
