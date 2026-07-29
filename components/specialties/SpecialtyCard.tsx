import Image from "next/image";

type SpecialtyCardProps = {
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  reverse?: boolean;
};

export default function SpecialtyCard({
  title,
  badge,
  subtitle,
  description,
  image,
  tags,
  reverse = false,
}: SpecialtyCardProps) {
  return (
    <section
      className={`
        mx-auto
        max-w-7xl
        px-6
        py-16
        md:py-24
        flex
        flex-col
        items-center
        gap-10
        lg:gap-16
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Imagen */}

      <div className="w-full lg:w-3/5">
        <div className="group overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl">

          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            className="
              h-[260px]
              sm:h-[360px]
              md:h-[460px]
              lg:h-[550px]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

        </div>
      </div>

      {/* Texto */}

      <div className="relative w-full lg:w-2/5">

        {/* Lupino */}

        <div
          className="
            pointer-events-none
            absolute
            -top-6
            right-0
            text-[90px]
            sm:text-[120px]
            lg:-top-10
            lg:-right-10
            lg:text-[180px]
            opacity-[0.04]
          "
        >
          🌿
        </div>

        {/* Badge */}

        <span
          className={`
            inline-block
            rounded-full
            px-4
            py-2
            text-xs
            sm:text-sm
            tracking-[0.20em]
            uppercase

            ${
              badge === "Producto Insignia"
                ? "bg-[#3d4a35] text-white"
                : "bg-[#7A263A] text-white"
            }
          `}
        >
          {badge}
        </span>

        {/* Título */}

        <h2
          className="
            mt-6
            font-[var(--font-cormorant)]
            text-3xl
            sm:text-4xl
            md:text-5xl
            leading-tight
            text-[#2E2E2E]
          "
        >
          {title}
        </h2>

        {/* Subtítulo */}

        <p
          className="
            mt-5
            text-lg
            md:text-xl
            italic
            leading-relaxed
            text-[#7A263A]
          "
        >
          {subtitle}
        </p>

        {/* Descripción */}

        <p
          className="
            mt-6
            text-base
            md:text-lg
            leading-8
            text-gray-600
          "
        >
          {description}
        </p>

        {/* Tags */}

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#D8C8A8]
                bg-[#faf7f2]
                px-3
                py-2
                text-xs
                sm:px-4
                sm:text-sm
                text-[#3d4a35]
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}