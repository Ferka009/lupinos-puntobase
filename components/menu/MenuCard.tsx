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
        flex
        max-w-7xl
        flex-col
        items-center
        gap-16
        py-20
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Imagen */}
      <div className="w-full lg:w-3/5">
        <div className="group overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={900}
            loading="lazy"
            className="
              h-[500px]
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
        <p className="uppercase tracking-[0.45em] text-[#7A263A] text-sm">
          Lupinos
        </p>

        <h3 className="mt-4 font-[var(--font-cormorant)] text-5xl text-[#2E2E2E]">
          {title}
        </h3>

        <h4 className="mt-6 text-xl italic text-[#7A263A]">
          {subtitle}
        </h4>

        <p className="mt-8 leading-8 text-gray-600">{description}</p>

        <div className="mt-10 space-y-5">
          {products.map((product) => (
            <div key={product} className="flex items-center gap-4">
              <Image
                src="/lupino-dorado.png"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="h-4 w-4 shrink-0 opacity-80"
              />

              <span className="text-lg text-[#2E2E2E]">{product}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-16 bg-[#D8C8A8]" />
          <Image
            src="/lupino-dorado.png"
            alt=""
            width={18}
            height={18}
            aria-hidden="true"
            className="h-[18px] w-[18px] shrink-0 opacity-80"
          />
          <div className="h-px w-16 bg-[#D8C8A8]" />
        </div>
      </div>
    </section>
  );
}