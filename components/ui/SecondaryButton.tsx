import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  className = "",
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center

        rounded-full

        border-2
        border-[#C7A76C]

        bg-transparent

        px-8
        py-4

        font-semibold
        text-[#2B2B2B]

        transition-all
        duration-300

        hover:bg-[#F8F3EC]
        hover:-translate-y-1

        ${className}
      `}
    >
      {children}
    </Link>
  );
}