import { priceData } from "./priceData";

export default function PriceSection() {
  return (
    <section
  id="carta"
  className="
    scroll-mt-24
    bg-[#F8F1E5]
    px-6
    py-32
  "
>

      {/* Título */}

      <div className="mx-auto max-w-4xl text-center mb-24">

        <p
          className="
            uppercase
            tracking-[0.55em]
            text-sm
            text-[#7A263A]
          "
        >
          Lupinos
        </p>


        <h2
          className="
            mt-5
            font-[var(--font-cormorant)]
            text-6xl
            text-[#2E2E2E]
          "
        >
          Nuestra Carta
        </h2>


        <div
          className="
            mx-auto
            mt-8
            h-px
            w-28
            bg-[#D8C8A8]
          "
        />


        <p
          className="
            mt-8
            text-lg
            leading-8
            text-gray-600
          "
        >
          Productos artesanales elaborados diariamente,
          respetando cada receta y cada ingrediente.
        </p>

      </div>



      {/* Carta */}

      <div className="mx-auto max-w-4xl space-y-20">


        {priceData.map((section) => (

          <div key={section.category}>


            <h3
              className="
                mb-10
                text-center
                font-[var(--font-cormorant)]
                text-4xl
                text-[#7A263A]
              "
            >
              {section.category}
            </h3>



            <div className="space-y-10">


              {section.items.map((item) => (

                <div
                  key={item.name}
                  className="
                    border-b
                    border-[#D8C8A8]/60
                    pb-8
                  "
                >


                  {/* Nombre y precio general */}

                  <div
                    className="
                      flex
                      justify-between
                      gap-5
                    "
                  >

                    <h4
                      className="
                        text-2xl
                        font-[var(--font-cormorant)]
                        text-[#2E2E2E]
                      "
                    >
                      {item.name}
                    </h4>


                    {/* Solo muestra precio si no tiene variedades */}

                    {!item.products && (
                      <span
                        className="
                          text-lg
                          text-[#7A263A]
                          font-semibold
                          whitespace-nowrap
                        "
                      >
                        {item.price}
                      </span>
                    )}

                  </div>



                  {/* Formato */}

                  <p
                    className="
                      mt-2
                      text-sm
                      uppercase
                      tracking-wider
                      text-[#7A263A]
                    "
                  >
                    {item.format}
                  </p>



                  {/* Descripción */}

                  <p
                    className="
                      mt-4
                      text-gray-600
                      leading-7
                    "
                  >
                    {item.description}
                  </p>



                  {/* Productos con precio individual */}

                  {item.products && (

                    <div className="mt-6 space-y-4">


                      {item.products.map((product) => (

                        <div
                          key={product.name}
                          className="
                            flex
                            justify-between
                            items-center
                            gap-5
                            border-b
                            border-[#D8C8A8]/40
                            pb-3
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-3
                            "
                          >

                            <span className="text-[#D8C8A8]">
                              ✦
                            </span>


                            <span
                              className="
                                text-[#4A3A32]
                              "
                            >
                              {product.name}
                            </span>

                          </div>



                          <span
                            className="
                              font-semibold
                              text-[#7A263A]
                              whitespace-nowrap
                            "
                          >
                            {product.price}
                          </span>


                        </div>

                      ))}


                    </div>

                  )}


                </div>

              ))}


            </div>


          </div>

        ))}


      </div>


    </section>
  );
}