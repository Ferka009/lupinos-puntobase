import Image from "next/image";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/5492323530407?text=¡Hola! 👋 Vi la página de Lupinos y me gustaría hacer un pedido. ¿Podrían enviarme el catálogo y los precios? ¡Muchas gracias! 🍝";

  return (
    <section
      className="
        relative
        isolate
        min-h-[100svh]
        md:min-h-screen
        overflow-hidden
        bg-[#f7f2e8]
        flex
        items-center
        justify-center
        pt-20
        md:pt-20
      "
    >
      {/* Fondo */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#b59b62_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Halo */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] md:h-[420px] md:w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9c08a] opacity-15 blur-3xl" />

      {/* Lupino izquierdo */}
      <Image
  src="/lupino-dorado.png"
  alt=""
  width={180}
  height={180}
  aria-hidden="true"
  priority
  className="
    pointer-events-none
    absolute
    top-16
    left-2
    w-[260px]
    h-auto
    opacity-25
    rotate-[-18deg]
    drop-shadow-[0_0_25px_rgba(196,154,74,.45)]
  "
/>

      {/* Lupino derecho */}
      <Image
        src="/lupino-dorado.png"
        alt=""
        width={220}
        height={220}
        aria-hidden="true"
        priority
        className="
          pointer-events-none
          absolute
          bottom-4
          right-[-35px]
          w-[140px]
          sm:w-[180px]
          lg:w-[235px]
          h-auto
          opacity-35
          lg:opacity-30
          rotate-[18deg]
          blur-[0.5px]
          drop-shadow-[0_0_18px_rgba(186,150,70,.35)]
        "
      />

      <Container className="relative z-10">
        <div
          className="
            mx-auto
            max-w-4xl
            text-center
            mt-16
            sm:mt-20
            md:mt-32
            px-2
          "
        >
          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.40em] text-[#9b7b3f] font-medium">
            Pastas Artesanales
          </p>

          <Image
            src="/lupinos-logo-final.png"
            alt="Lupinos"
            width={250}
            height={250}
            priority
            className="
              mx-auto
              mb-6
              w-[170px]
              sm:w-[200px]
              md:w-[250px]
              h-auto
              drop-shadow-lg
            "
          />

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-serif
              tracking-wide
              leading-tight
              text-[#29251f]
            "
          >
            Tradición artesanal,
            <br />
            sabor inolvidable.
          </h1>

          <p
            className="
              mt-5
              mx-auto
              max-w-2xl
              px-2
              text-base
              sm:text-lg
              md:text-xl
              leading-8
              text-[#62594d]
            "
          >
            Cada receta nace del respeto por la tradición,
            ingredientes seleccionados y la pasión por elaborar
            pastas que reúnan a la familia alrededor de la mesa.
          </p>

          {/* Sello */}

          <div className="my-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-[#c7a76c]" />

            <p
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.30em]
                leading-6
                text-[#9b7b3f]
                font-medium
                whitespace-nowrap
              "
            >
              ✦ Inspirado en Villa La Angostura ✦
              <br />
              ✦ Desde Luján, Buenos Aires ✦
            </p>

            <span className="h-px w-8 sm:w-12 bg-[#c7a76c]" />
          </div>

          {/* Características */}

          <div
            className="
              mt-6
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-2
              sm:gap-3
              text-sm
              tracking-wide
              text-[#6b6254]
            "
          >
            <span>Ingredientes seleccionados</span>

            <span className="hidden sm:block text-[#b8944d]">
              •
            </span>

            <span>Elaboración artesanal</span>

            <span className="hidden sm:block text-[#b8944d]">
              •
            </span>

            <span>Pedidos por encargo</span>
          </div>

          {/* BOTONES */}

          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-4
              w-full
            "
          >
            <div className="w-full sm:w-auto">
              <Button
                href={whatsappLink}
                target="_blank"
                className="w-full sm:w-auto"
              >
                🍝 Hacé tu pedido
              </Button>
            </div>

            <div className="w-full sm:w-auto">
              <Button
                href="#especialidades"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Ver productos
              </Button>
            </div>
          </div>

          {/* BENEFICIOS */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              sm:flex
              justify-center
              items-center
              gap-3
              text-sm
              text-[#6b6256]
            "
          >
            <span>🌾 Ingredientes seleccionados</span>

            <span className="hidden md:block text-[#c7a76c]">
              •
            </span>

            <span>🍝 Elaboración artesanal</span>

            <span className="hidden md:block text-[#c7a76c]">
              •
            </span>

            <span>🚚 Pedidos rápidos</span>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f7f2e8] to-transparent" />
    </section>
  );
}
