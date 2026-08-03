import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/utils/cn";


type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";


interface ButtonBaseProps {

  children:
    ReactNode;

  variant?:
    ButtonVariant;

  className?:
    string;

  showArrow?:
    boolean;

}


interface ButtonLinkProps
  extends ButtonBaseProps {

  href:
    string;

  target?:
    "_blank" | "_self";

  rel?:
    string;

}


interface ButtonActionProps
  extends ButtonBaseProps,
    Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "children" | "className"
    > {

  href?:
    never;

}


type ButtonProps =
  ButtonLinkProps |
  ButtonActionProps;



const variantClasses = {

  primary:
    `
    border
    border-lupinos-gold
    bg-lupinos-cream-soft
    text-lupinos-carbon
    shadow-[var(--shadow-soft)]

    hover:-translate-y-1
    hover:border-lupinos-gold
    hover:shadow-[var(--shadow-floating)]
    `,


  secondary:
    `
    border
    border-lupinos-olive
    bg-lupinos-olive
    text-white

    shadow-[var(--shadow-soft)]

    hover:-translate-y-1
    hover:bg-lupinos-cacao
    `,


  ghost:
    `
    border
    border-transparent
    bg-transparent
    text-lupinos-carbon

    hover:bg-lupinos-cream-soft
    `,


  outline:
    `
    border-2
    border-lupinos-gold
    bg-transparent
    text-lupinos-carbon

    hover:-translate-y-1
    hover:bg-lupinos-cream-soft
    `,

} satisfies Record<ButtonVariant,string>;



export type {
  ButtonProps,
  ButtonVariant,
};



export default function Button(
  props: ButtonProps
) {


  const {

    children,

    variant =
      "primary",

    className =
      "",

    showArrow =
      variant === "primary",

  } = props;



  const content = (

    <>

      {
        variant === "primary" && (

          <span

            aria-hidden

            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              transition-transform
              duration-[var(--motion-slow)]
              group-hover:translate-x-full
            "

          />

        )

      }


      <span className="relative z-10">

        {children}

      </span>



      {
        showArrow && (

          <ArrowRight

            aria-hidden

            size={18}

            className="
              relative
              z-10
              transition-transform
              duration-[var(--motion-normal)]
              group-hover:translate-x-1
            "

          />

        )
      }

    </>

  );



  const classes = cn(

    `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-3
    overflow-hidden

    rounded-[var(--radius-button)]

    px-8
    py-4

    font-semibold

    transition-all
    duration-[var(--motion-normal)]
    `,

    variantClasses[variant],

    className

  );



  if ("href" in props && props.href) {


    return (

      <Link

        href={props.href}

        target={props.target}

        rel={
          props.target === "_blank"
            ? props.rel ??
              "noopener noreferrer"
            : props.rel
        }

        className={classes}

      >

        {content}

      </Link>

    );

  }

const buttonProps = props as ButtonActionProps;

return (

  <button

    type={
      buttonProps.type ??
      "button"
    }

    className={classes}

    {...buttonProps}

  >

    {content}

  </button>

);

}