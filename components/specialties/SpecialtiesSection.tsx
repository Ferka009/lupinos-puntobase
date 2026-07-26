import SpecialtyCard from "./SpecialtyCard";
import { specialtiesData } from "./specialtiesData";

export default function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="bg-[#fbf8f3] py-28"
    >
      <div className="mx-auto max-w-3xl text-center px-6">

        <p className="uppercase tracking-[0.45em] text-[#9b7b3f]">
          Especialidades Lupinos
        </p>

        <h2
          className="
            mt-6
            font-[var(--font-cormorant)]
            text-6xl
            text-[#2E2E2E]
          "
        >
          Nuestros sabores más exclusivos
        </h2>

        <p className="mt-8 text-lg leading-8 text-[#62594d]">
          Cada receta nace de la búsqueda de ingredientes de calidad,
          combinaciones originales y el amor por la elaboración artesanal.
        </p>

      </div>

      <div className="mt-24">
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