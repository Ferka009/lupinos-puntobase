import { cn } from "@/utils/cn";


interface SectionTitleProps {

  eyebrow?: string;

  title: string;

  description?: string;

  align?: "center" | "left";

  className?: string;

}


export default function SectionTitle({

  eyebrow = "Lupinos",

  title,

  description,

  align = "center",

  className,

}: SectionTitleProps) {


  return (

    <div

      className={cn(

        `
        mb-16
        md:mb-24

        px-6

        ${
          align === "center"
            ? "text-center"
            : "text-left"
        }
        `,

        className

      )}

    >

      {
        eyebrow && (

          <p

            className="
            text-xs
            sm:text-sm

            uppercase

            tracking-[0.40em]

            text-lupinos-bordo
            "

          >

            {eyebrow}

          </p>

        )
      }



      <h2

        className="
        mt-4

        font-display

        text-4xl
        sm:text-5xl
        md:text-7xl

        leading-tight

        text-lupinos-carbon
        "

      >

        {title}

      </h2>



      <div

        className="
        mx-auto

        mt-5

        h-px

        w-20
        sm:w-24
        md:w-28

        bg-lupinos-gold-soft
        "

      />



      {
        description && (

          <p

            className="
            mx-auto

            mt-6

            max-w-2xl

            text-base
            sm:text-lg

            leading-7
            sm:leading-8

            text-neutral-600
            "

          >

            {description}

          </p>

        )
      }


    </div>

  );

}