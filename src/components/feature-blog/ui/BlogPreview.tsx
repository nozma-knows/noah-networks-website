import Image from "next/image";
import { DateTime } from "luxon";
import { Blog as BlogType } from "src/__generated__/graphql";
import Router from "next/router";

export default function BlogPreview({
  blog,
}: {
  blog: BlogType;
  buttonLink?: string;
  buttonText?: string;
}) {
  const createdAt = DateTime.fromISO(
    new Date(Number(blog.createdAt)).toISOString()
  ).toLocaleString(DateTime.DATE_FULL);
  return (
    <div
      className="flex flex-col gap-2 w-full button"
      onClick={() => Router.push(`/blog/${blog.id}`)}
    >
      <div className="flex flex-1 relative">
        <Image
          className="rounded-lg"
          alt={`${blog.title} cover photo`}
          src={blog.coverPhoto || ""}
          fill
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 w-full h-full">
        <div className="flex items-center justify-between gap-4">
          <div className="font-bold text-[#a56baf]">{blog.category}</div>
          <div className="text-sm">{createdAt}</div>
        </div>
        <div className="text-xl font-bold">{blog.title}</div>
        <div className="text-base">{blog.subtitle}</div>
      </div>
    </div>
  );
}
