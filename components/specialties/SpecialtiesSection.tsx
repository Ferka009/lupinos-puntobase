import SpecialtyCard from "./SpecialtyCard";
import { specialtiesData } from "./specialtiesData";

export default function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="bg-[#f7f2e8] py-16 md:py-24"
    >
      <div
        className="
          mx-auto
          max-w-3xl
          px-6
          text-center
        "
      >
        <p
          className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.35em]
            text-[#9b7b3f]
          "
        >
          Especialidades Lupinos
        </p>

        <h2
          className="
            mt-4
            font-[var(--font-cormorant)]
            text-4xl
            sm:text-5xl
            md:text-6xl
            leading-tight
            text-[#2E2E2E]
          "
        >
          Nuestros sabores más exclusivos
        </h2>

        <p
          className="
            mt-6
            mx-auto
            max-w-2xl
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-[#62594d]
          "
        >
          Cada receta nace de la búsqueda de ingredientes de calidad,
          combinaciones originales y el amor por la elaboración artesanal.
        </p>
      </div>

      <div className="mt-12 md:mt-24">
        {specialtiesData.map((item) => (
          <SpecialtyCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}