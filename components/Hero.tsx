import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#f7f2e8] flex items-center justify-center pt-16 md:pt-20">
      {/* Fondo con textura muy suave */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#b59b62_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Halo detrás del logo */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9c08a] opacity-15 blur-3xl" />

      {/* Lupinos decorativos */}
      <Image
        src="/lupino-dorado.png"
        alt=""
        width={180}
        height={180}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-20
          left-6
          w-[240px]
          h-auto
          opacity-35
          rotate-[-18deg]
          blur-[0.5px]
          drop-shadow-[0_0_18px_rgba(186,150,70,.35)]
        "
      />

      <Image
        src="/lupino-dorado.png"
        alt=""
        width={220}
        height={220}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-6
          right-4
          w-[235px]
          h-auto
          opacity-30
          rotate-[18deg]
          blur-[0.5px]
          drop-shadow-[0_0_18px_rgba(186,150,70,.35)]
        "
      />

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center mt-28 md:mt-32">
        {/* Texto pequeño superior */}
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#9b7b3f] font-medium">
          Pastas artesanales
        </p>

        {/* Logo */}
        <Image
          src="/lupinos-logo-final.png"
          alt="Lupinos"
          width={250}
          height={250}
          priority
          className="mx-auto mb-8 w-[220px] md:w-[250px] h-auto drop-shadow-lg"
        />

        {/* Frase principal */}
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide text-[#29251f]">
          Pastas artesanales
          <br />
          con esencia gourmet
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-[#62594d]">
          Sabores únicos, ingredientes seleccionados y el amor por lo hecho a mano.
        </p>

        {/* Separador */}
        <div className="mt-10 flex items-center justify-center gap-4 text-[#9b7b3f]">
          <span className="h-px w-20 bg-[#9b7b3f]" />
          <span className="text-2xl">✦</span>
          <span className="h-px w-20 bg-[#9b7b3f]" />
        </div>

        {/* Botón */}
        <a
  href="#especialidades"
  className="
    mt-10
    inline-flex
    items-center
    rounded-full
    bg-[#3d4a35]
    px-9
    py-4
    font-medium
    tracking-[0.08em]
    text-white
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-1
    hover:bg-[#2f3929]
  "
>
  Ver nuestras especialidades
</a>
      </div>

      {/* Overlay suave inferior */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f7f2e8] to-transparent" />
    </section>
  );
}