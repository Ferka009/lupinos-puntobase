type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 md:mb-28 text-center px-6">

      <p
        className="
          text-xs
          sm:text-sm
          uppercase
          tracking-[0.40em]
          text-[#7A263A]
        "
      >
        Lupinos
      </p>

      <h2
        className="
          mt-4
          font-[var(--font-cormorant)]
          text-4xl
          sm:text-5xl
          md:text-7xl
          leading-tight
          text-[#2E2E2E]
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
          bg-[#D8C8A8]
        "
      />

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
          text-gray-600
        "
      >
        {subtitle}
      </p>

    </div>
  );
}