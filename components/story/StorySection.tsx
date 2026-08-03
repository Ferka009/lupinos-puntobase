import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-[#f7f2e8] py-16 md:py-24">
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
          grid
          items-center
          gap-12
          lg:gap-16
          lg:grid-cols-2
        "
      >
        {/* Imagen */}

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            shadow-2xl
            h-[360px]
            sm:h-[450px]
            lg:h-auto
          "
        >
          <Image
            src="/images/lupinos-angostura.jpg"
            alt="Flores de lupinos en Villa La Angostura"
            width={900}
            height={1100}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />
        </div>

        {/* Texto */}

        <div>
          <span
            className="
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.35em]
              text-[#b8944d]
            "
          >
            Nuestra historia
          </span>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-light
              leading-tight
              text-[#2d2a26]
            "
          >
            Inspirados por la naturaleza.
            <br />
            Elaborados para compartir.
          </h2>

          <div
            className="
              mt-8
              space-y-5
              text-base
              sm:text-lg
              leading-8
              sm:leading-9
              text-[#6b6254]
            "
          >
            <p>
              Hay sabores que no se olvidan.
              Son los que nos recuerdan una comida en familia,
              una charla que se extendió más de la cuenta
              o un domingo compartido alrededor de la mesa.
            </p>

            <p>
              En <strong className="text-[#2d2a26]">Lupinos</strong> creemos
              que una buena pasta tiene el poder de crear esos momentos.
            </p>

            <p>
              Nuestro nombre nace inspirado en los{" "}
              <strong className="text-[#2d2a26]">lupinos</strong>,
              una planta que florece cada primavera en
              <strong className="text-[#2d2a26]">
                {" "}Villa La Angostura
              </strong>,
              el lugar donde están nuestras raíces.
            </p>

            <p>
              Sus flores, de colores intensos y elegantes,
              cubren el paisaje patagónico y representan
              la belleza de lo natural, la dedicación y
              el carácter que buscamos transmitir en cada
              uno de nuestros productos.
            </p>

            <p>
              Hoy elaboramos nuestras pastas de manera
              artesanal desde Luján, Buenos Aires,
              seleccionando cuidadosamente cada ingrediente
              y respetando los tiempos de cada proceso,
              porque creemos que las cosas bien hechas
              siempre comienzan con pasión.
            </p>
          </div>

          {/* Frase */}

          <div
            className="
              mt-10
              border-l-2
              border-[#b8944d]
              pl-5
              sm:pl-6
              italic
              text-base
              sm:text-lg
              leading-8
              text-[#7a7165]
            "
          >
            &quot;Así como los lupinos llenan de color los paisajes de la Patagonia,
            queremos que nuestras pastas llenen de sabor cada mesa.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
