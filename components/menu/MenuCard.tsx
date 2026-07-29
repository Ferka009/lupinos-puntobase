import Image from "next/image";

type MenuCardProps = {
  title: string;
  subtitle: string;
  description: string;
  products: string[];
  image: string;
  reverse?: boolean;
};

export default function MenuCard({
  title,
  subtitle,
  description,
  products,
  image,
  reverse = false,
}: MenuCardProps) {
  return (
    <section
      className={`
        mx-auto
        max-w-7xl
        px-6
        flex
        flex-col
        items-center
        gap-10
        py-12
        md:py-20
        lg:flex-row
        lg:gap-16
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Imagen */}

      <div className="w-full lg:w-3/5">
        <div
          className="
            group
            overflow-hidden
            rounded-[24px]
            md:rounded-3xl
            shadow-2xl
          "
        >
          <Image
            src={image}
            alt={title}
            width={1200}
            height={900}
            loading="lazy"
            className="
              h-[260px]
              sm:h-[340px]
              md:h-[450px]
              lg:h-[500px]
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

      <div className="w-full lg:w-2/5">

        <p
          className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.4em]
            text-[#7A263A]
          "
        >
          Lupinos
        </p>


        <h3
          className="
            mt-4
            font-[var(--font-cormorant)]
            text-3xl
            sm:text-4xl
            md:text-5xl
            leading-tight
            text-[#2E2E2E]
          "
        >
          {title}
        </h3>


        <h4
          className="
            mt-5
            text-lg
            sm:text-xl
            leading-relaxed
            italic
            text-[#7A263A]
          "
        >
          {subtitle}
        </h4>


        <p
          className="
            mt-6
            text-base
            sm:text-lg
            leading-8
            text-gray-600
          "
        >
          {description}
        </p>


        {/* Productos */}

        <div className="mt-8 space-y-4">
          {products.map((product) => (
            <div
              key={product}
              className="
                flex
                items-center
                gap-3
              "
            >
              <Image
                src="/lupino-dorado.png"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  shrink-0
                  opacity-80
                "
              />

              <span
                className="
                  text-base
                  sm:text-lg
                  text-[#2E2E2E]
                "
              >
                {product}
              </span>
            </div>
          ))}
        </div>


        {/* Separador */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
          "
        >
          <div className="h-px w-12 bg-[#D8C8A8]" />

          <Image
            src="/lupino-dorado.png"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="
              h-[18px]
              w-[18px]
              shrink-0
              opacity-80
            "
          />

          <div className="h-px w-12 bg-[#D8C8A8]" />
        </div>

      </div>
    </section>
  );
}