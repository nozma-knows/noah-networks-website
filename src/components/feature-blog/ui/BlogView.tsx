import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
export default function BlogView({
  blog,
  noBackButton,
}: {
  blog: any;
  noBackButton?: boolean;
}) {
  console.log("blog: ", blog);
  const createdAt = DateTime.fromISO(
    new Date(Number(blog.createdAt)).toISOString()
  ).toLocaleString(DateTime.DATE_FULL);

  const { category, coverPhoto, title, subtitle, content } = blog;

  if (!category || !title || !subtitle || !content) {
    const message = `Required fields haven't been set.`;
    return <div className="flex justify-center items-center">{message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full px-2 sm:px-8 md:w-4/5 md:max-w-3xl lg:max-w-4xl relative">
      {!noBackButton && (
        <Link
          href="/blog"
          className=" absolute text-xl lg:text-2xl top-0 left-0"
        >
          <div className="flex gap-4 items-center button px-2 sm:px-8">
            <FaArrowLeft className="" />
            <div className="">Back to blog</div>
          </div>
        </Link>
      )}
      <div className="flex flex-col items-center gap-8 py-16">
        <div className="flex w-full aspect-video relative">
          <Image
            className="rounded-lg"
            alt={`${title} cover photo`}
            src={coverPhoto || ""}
            fill
          />
        </div>
        <div className="text-5xl font-bold">{title}</div>
        <div className="flex items-center gap-4 font-bold text-[#a56baf] text-lg">
          <div>{category}</div>
          <span>•</span>
          <div className="text-main-dark">{createdAt}</div>
        </div>
        <div className="flex flex-col gap-4 w-ful">
          {content.map((item: string, index: number) => {
            return (
              <ReactMarkdown
                key={index}
                linkTarget="_blank"
                className="markdown"
                rehypePlugins={[rehypeRaw]}
                children={item ? item : ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
