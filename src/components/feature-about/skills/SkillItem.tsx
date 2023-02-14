interface SkillItemProps {
  title: string;
  list: string[];
}

export default function SkillItem({ title, list }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[#a56baf] text-xl font-semibold">{title}</div>
      <div className="">{list.join(", ")}</div>
    </div>
  );
}
