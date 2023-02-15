import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TbMoodCrazyHappy } from "react-icons/tb";
import { IoMenu, IoClose } from "react-icons/io5";
import LogoutButton from "src/components/ui/buttons/LogoutButton";
import TopBarDropdown from "./TopBarDropdown";
import useWindowSize from "@/components/utils/hooks/useWindowSize";

const title = "noah networks";

// export default function TopBar({ token }: TopBarProps) {
export default function TopBar() {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const router = useRouter();
  const size = useWindowSize();
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    if (showDropDown && size.width > 770) {
      setShowDropDown(false);
    }
  }, [showDropDown, size]);

  const pages = ({ token }: { token: string | null }) => {
    if (token) {
      return [
        {
          label: "About",
          link: "/about",
        },
        {
          label: "Projects",
          link: "/projects",
        },
        {
          label: "Blog",
          link: "/blog",
        },
        {
          label: "Contact",
          link: "/contact",
        },
        {
          label: "Editor",
          link: "/editor",
        },
      ];
    }
    return [
      {
        label: "About",
        link: "/about",
      },
      {
        label: "Projects",
        link: "/projects",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "Contact",
        link: "/contact",
      },
    ];
  };

  const pathRoute = `/${router.pathname.split("/")[1]}`;
  return (
    <div className="flex justify-between items-center w-full px-2 sm:px-8 text-main-dark bg-main-dark">
      <Link href="/" className="flex items-center gap-2">
        <TbMoodCrazyHappy className="text-4xl" />
        <div>{title}</div>
      </Link>
      <div className={`flex items-center gap-4`}>
        {pages({ token }).map((page: { label: string; link: string }) => {
          return (
            <Link
              className={`${
                page.link === pathRoute && "text-[#a56baf]"
              } text-lg font-semibold button hidden md:flex`}
              key={page.label}
              href={page.link}
            >
              {page.label}
            </Link>
          );
        })}
        <div>
          {showDropDown ? (
            <>
              <IoClose
                className="flex md:hidden text-3xl button cursor-pointer"
                onClick={() => setShowDropDown(false)}
              />
              <div className="flex md:hidden">
                <TopBarDropdown
                  pages={pages({ token })}
                  close={() => setShowDropDown(false)}
                />
              </div>
            </>
          ) : (
            <IoMenu
              className="flex md:hidden text-3xl button cursor-pointer"
              onClick={() => setShowDropDown(true)}
            />
          )}
        </div>
        {token && (
          <div className="flex gap-8 pl-8">
            <LogoutButton />
          </div>
        )}
      </div>
    </div>
  );
}
