import { cn } from "@/utils/cn";


interface BadgeProps {

  children:
    React.ReactNode;

  variant?:
    "gold" |
    "olive" |
    "bordo";

  className?:
    string;

}


export default function Badge({

  children,

  variant = "gold",

  className,

}: BadgeProps) {


  const variants = {

    gold:
      `
      bg-lupinos-gold-soft
      text-lupinos-cacao
      `,

    olive:
      `
      bg-lupinos-olive
      text-white
      `,

    bordo:
      `
      bg-lupinos-bordo
      text-white
      `,

  };


  return (

    <span

      className={cn(

        `
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        tracking-wide
        `,
        
        variants[variant],

        className

      )}

    >

      {children}

    </span>

  );

}