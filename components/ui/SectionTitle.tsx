import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  children,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#2B2B2B]
          tracking-tight
        "
      >
        {children}
      </h2>

      {subtitle && (
        <p
          className="
            mt-4
            text-lg
            text-neutral-600
            max-w-2xl
            mx-auto
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}