export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        bg-[#2A1D1B]
        text-[#F8F1E7]
        py-28
        px-6
      "
    >
      <div className="max-w-5xl mx-auto text-center">

        <p
          className="
            uppercase
            tracking-[0.55em]
            text-sm
            text-[#D8C8A8]
          "
        >
          Lupinos
        </p>

        <h2
          className="
            mt-4
            text-6xl
            font-[var(--font-cormorant)]
          "
        >
          Contacto
        </h2>

        <div className="mx-auto mt-8 w-24 h-px bg-[#D8C8A8]"></div>

        <p
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-lg
            text-[#E8DFD2]
            leading-8
          "
        >
          Elaboramos cada pasta de manera artesanal para que disfrutes una
          experiencia auténtica desde el primer bocado.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {/* Ubicación */}

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-4xl">📍</div>

            <h3 className="mt-5 text-2xl font-[var(--font-cormorant)]">
              Ubicación
            </h3>

            <p className="mt-3 text-[#E8DFD2]">
              Luján, Buenos Aires
            </p>
          </div>

          {/* WhatsApp */}

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-4xl">📱</div>

            <h3 className="mt-5 text-2xl font-[var(--font-cormorant)]">
              WhatsApp
            </h3>

            <p className="mt-3 text-[#E8DFD2]">
              +54 9 2323 53-0407
            </p>
          </div>

          {/* Instagram */}

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-4xl">📷</div>

            <h3 className="mt-5 text-2xl font-[var(--font-cormorant)]">
              Instagram
            </h3>

            <a
              href="https://instagram.com/lupinopastas"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-3
                inline-block
                text-[#D8C8A8]
                hover:text-white
                transition
              "
            >
              @lupinopastas
            </a>
          </div>

          {/* Pedidos */}

          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <div className="text-4xl">🍝</div>

            <h3 className="mt-5 text-2xl font-[var(--font-cormorant)]">
              Pedidos
            </h3>

            <p className="mt-3 text-[#E8DFD2] text-sm leading-7">
              Tomamos pedidos
              <br />
              <strong>Lunes a Jueves</strong>

              <br />
              <br />

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

        {/* Botón */}

        <a
          href="https://wa.me/5492323530407"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            mt-20
            rounded-full
            bg-[#7A263A]
            px-12
            py-5
            text-lg
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

        <p className="mt-16 text-sm text-[#B9A88B]">
          © {new Date().getFullYear()} Lupinos · Pastas Artesanales
        </p>

      </div>
    </section>
  );
}