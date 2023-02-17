import { DateTime } from "luxon";
import { Blog as BlogType } from "src/__generated__/graphql";
import LinkButton from "src/components/ui/buttons/LinkButton";

export default function BlogPreview({
  blog,
  buttonLink,
  buttonText,
}: {
  blog: BlogType;
  buttonLink?: string;
  buttonText?: string;
}) {
  const createdAt = DateTime.fromISO(
    new Date(Number(blog.createdAt)).toISOString()
  ).toLocaleString(DateTime.DATE_FULL);
  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl sm:px-16">
      <div className="flex items-end gap-4">
        <div className="font-bold text-[#a56baf]">{blog.category}</div>
        <div>{createdAt}</div>
      </div>
      <div className="text-2xl font-bold">{blog.title}</div>
      <div className="text-lg">{blog.subtitle}</div>
      <div className="self-start pt-4">
        <LinkButton
          className="text-sm sm:text-base bg-main-light px-4 py-2 rounded-xl button text-main-light font-bold"
          label={buttonText || "Read more"}
          href={buttonLink || `/blog/${blog.title}`}
        />
      </div>
    </div>
  );
}
