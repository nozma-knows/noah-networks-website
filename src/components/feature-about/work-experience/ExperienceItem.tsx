import Link from "next/link";

interface ExperienceItemProps {
  title: string;
  subtitle: string;
  start: string;
  end: string | undefined;
  link: string;
  points: string[];
}

export default function ExperienceItem({
  title,
  subtitle,
  start,
  end,
  link,
  points,
}: ExperienceItemProps) {
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
}
