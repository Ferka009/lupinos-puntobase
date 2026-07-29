import { priceData } from "./priceData";

export default function PriceSection() {
  return (
    <section
      id="carta"
      className="
        scroll-mt-24
        bg-[#F8F1E5]
        px-6
        py-16
        md:py-32
      "
    >

      {/* Título */}

      <div
        className="
          mx-auto
          max-w-4xl
          text-center
          mb-16
          md:mb-24
        "
      >

        <p
          className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.45em]
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
            md:text-6xl
            leading-tight
            text-[#2E2E2E]
          "
        >
          Nuestra Carta
        </h2>


        <div
          className="
            mx-auto
            mt-6
            h-px
            w-20
            md:w-28
            bg-[#D8C8A8]
          "
        />


        <p
          className="
            mt-6
            text-base
            sm:text-lg
            leading-7
            sm:leading-8
            text-gray-600
          "
        >
          Productos artesanales elaborados diariamente,
          respetando cada receta y cada ingrediente.
        </p>

      </div>



      {/* Carta */}

      <div
        className="
          mx-auto
          max-w-4xl
          space-y-14
          md:space-y-20
        "
      >

        {priceData.map((section) => (

          <div key={section.category}>


            <h3
              className="
                mb-8
                text-center
                font-[var(--font-cormorant)]
                text-3xl
                sm:text-4xl
                text-[#7A263A]
              "
            >
              {section.category}
            </h3>



            <div className="space-y-8">


              {section.items.map((item) => (

                <div
                  key={item.name}
                  className="
                    border-b
                    border-[#D8C8A8]/60
                    pb-6
                    md:pb-8
                  "
                >


                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <h4
                      className="
                        font-[var(--font-cormorant)]
                        text-xl
                        sm:text-2xl
                        leading-tight
                        text-[#2E2E2E]
                      "
                    >
                      {item.name}
                    </h4>


                    {!item.products && (
                      <span
                        className="
                          text-base
                          sm:text-lg
                          font-semibold
                          text-[#7A263A]
                          whitespace-nowrap
                        "
                      >
                        {item.price}
                      </span>
                    )}

                  </div>



                  <p
                    className="
                      mt-2
                      text-xs
                      sm:text-sm
                      uppercase
                      tracking-wider
                      text-[#7A263A]
                    "
                  >
                    {item.format}
                  </p>



                  <p
                    className="
                      mt-3
                      text-sm
                      sm:text-base
                      leading-7
                      text-gray-600
                    "
                  >
                    {item.description}
                  </p>



                  {item.products && (

                    <div
                      className="
                        mt-5
                        space-y-3
                      "
                    >

                      {item.products.map((product) => (

                        <div
                          key={product.name}
                          className="
                            flex
                            items-center
                            justify-between
                            gap-4
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
                                text-sm
                                sm:text-base
                                text-[#4A3A32]
                              "
                            >
                              {product.name}
                            </span>

                          </div>



                          <span
                            className="
                              text-sm
                              sm:text-base
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