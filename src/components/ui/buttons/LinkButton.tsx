import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  label?: string | JSX.Element;
  className?: string;
  textStyle?: string;
  href: string;
}

export default function LinkButton({
  label,
  className,
  textStyle,
  href,
}: LinkButtonProps) {
  return (
    <div className={`${className} button`}>
      <Link
        className={`${textStyle ? `${textStyle}` : "link"}`}
        href={href}
        target="_blank"
      >
        {label || "Link"}
      </Link>
    </div>
  );
}
