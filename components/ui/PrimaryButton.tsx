import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self";
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  target = "_self",
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`
        group
        relative
        inline-flex
        items-center
        justify-center
        gap-3
        overflow-hidden

        rounded-full

        border
        border-[#C7A76C]

        bg-[#F8F3EC]

        px-8
        py-4

        font-semibold
        text-[#2B2B2B]

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
        hover:border-[#B9924D]

        ${className}
      `}
    >
      {/* Brillo */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10">
        {children}
      </span>

      <ArrowRight
        size={18}
        className="
          relative
          z-10
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}