export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        bg-[#2A1D1B]
        text-[#F8F1E7]
        px-6
        py-16
        md:py-28
      "
    >
      <div className="mx-auto max-w-5xl text-center">

        <p
          className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.45em]
            text-[#D8C8A8]
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
            md:text-6xl
          "
        >
          Contacto
        </h2>


        <div
          className="
            mx-auto
            mt-6
            h-px
            w-20
            md:w-24
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
            text-[#E8DFD2]
          "
        >
          Elaboramos cada pasta de manera artesanal para que disfrutes una
          experiencia auténtica desde el primer bocado.
        </p>



        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            md:grid-cols-4
            md:gap-8
            md:mt-20
          "
        >

          {/* Ubicación */}

          <div className="rounded-3xl bg-white/5 p-6 md:p-8 border border-white/10">
            <div className="text-4xl">📍</div>

            <h3 className="mt-4 text-xl md:text-2xl font-[var(--font-cormorant)]">
              Ubicación
            </h3>

            <p className="mt-3 text-sm md:text-base text-[#E8DFD2]">
              Luján, Buenos Aires
            </p>
          </div>



          {/* WhatsApp */}

          <div className="rounded-3xl bg-white/5 p-6 md:p-8 border border-white/10">
            <div className="text-4xl">📱</div>

            <h3 className="mt-4 text-xl md:text-2xl font-[var(--font-cormorant)]">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm md:text-base text-[#E8DFD2]">
              +54 9 2323 53-0407
            </p>
          </div>



          {/* Instagram */}

          <div className="rounded-3xl bg-white/5 p-6 md:p-8 border border-white/10">
            <div className="text-4xl">📷</div>

            <h3 className="mt-4 text-xl md:text-2xl font-[var(--font-cormorant)]">
              Instagram
            </h3>

            <a
              href="https://instagram.com/lupinopastas"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3
                inline-block
                text-sm
                md:text-base
                text-[#D8C8A8]
                transition
                hover:text-white
              "
            >
              @lupinopastas
            </a>
          </div>



          {/* Pedidos */}

          <div className="rounded-3xl bg-white/5 p-6 md:p-8 border border-white/10">
            <div className="text-4xl">🍝</div>

            <h3 className="mt-4 text-xl md:text-2xl font-[var(--font-cormorant)]">
              Pedidos
            </h3>

            <p className="
              mt-3
              text-sm
              leading-6
              text-[#E8DFD2]
            ">
              Tomamos pedidos
              <br />
              <strong>Lunes a Jueves</strong>

              <br /><br />

              Entregas
              <br />
              <strong>Sábados y Domingos</strong>

              <br />

              9:00 a 13:00 hs
              <br />
              16:00 a 20:00 hs
            </p>
          </div>

        </div>



        {/* Botón WhatsApp */}

        <a
          href="https://wa.me/5492323530407"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            md:mt-20
            inline-flex
            w-full
            sm:w-auto
            items-center
            justify-center
            rounded-full
            bg-[#7A263A]
            px-8
            py-4
            md:px-12
            md:py-5
            text-base
            md:text-lg
            font-semibold
            transition-all
            duration-300
            hover:bg-[#5C6B3C]
            hover:scale-105
            shadow-2xl
          "
        >
          🍝 Hacer mi pedido por WhatsApp
        </a>



        <p className="mt-12 md:mt-16 text-xs sm:text-sm text-[#B9A88B]">
          © {new Date().getFullYear()} Lupinos · Pastas Artesanales
        </p>

      </div>
    </section>
  );
}