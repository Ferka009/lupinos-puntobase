import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}


export default function Card({
  children,
  className,
}: CardProps) {

  return (

    <div
      className={cn(
        `
        rounded-[var(--radius-card)]
        bg-white
        shadow-[var(--shadow-soft)]
        overflow-hidden
        `,
        className
      )}
    >

      {children}

    </div>

  );

}