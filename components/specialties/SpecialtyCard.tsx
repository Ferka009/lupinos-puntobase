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
        flex
        max-w-7xl
        items-center
        gap-16
        py-24
        flex-col
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Imagen */}

      <div className="w-full lg:w-3/5">
        <div className="overflow-hidden rounded-[32px] shadow-2xl group">

          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            className="
              h-[550px]
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

        {/* Lupino de fondo */}

        <div
          className="
            absolute
            -top-10
            -right-10
            text-[180px]
            opacity-[0.04]
            pointer-events-none
          "
        >
          🌿
        </div>

        <span
          className={`
            inline-block
            rounded-full
            px-4
            py-2
            text-sm
            tracking-widest
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

        <h2
          className="
            mt-8
            font-[var(--font-cormorant)]
            text-5xl
            leading-tight
            text-[#2E2E2E]
          "
        >
          {title}
        </h2>

        <p className="mt-6 text-xl italic text-[#7A263A]">
          {subtitle}
        </p>

        <p className="mt-8 leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#D8C8A8]
                px-4
                py-2
                text-sm
                text-[#3d4a35]
                bg-[#faf7f2]
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