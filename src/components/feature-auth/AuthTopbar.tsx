import Link from "next/link";
import { TbMoodCrazyHappy } from "react-icons/tb";

export default function AuthTopbar() {
  return (
    <div className="relative flex w-full items-center justify-center pt-12 px-8 h-20 text-main-light">
      <Link href="/">
        <TbMoodCrazyHappy className="text-6xl" />
      </Link>
    </div>
  );
}
