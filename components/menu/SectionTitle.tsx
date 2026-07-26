type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-28 text-center">

      <p className="uppercase tracking-[0.55em] text-[#7A263A] text-sm">
        Lupinos
      </p>

      <h2
        className="
          mt-5
          font-[var(--font-cormorant)]
          text-5xl
          md:text-7xl
          text-[#2E2E2E]
        "
      >
        {title}
      </h2>

      <div className="mx-auto mt-6 h-px w-28 bg-[#D8C8A8]" />

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-gray-600
        "
      >
        {subtitle}
      </p>

    </div>
  );
}