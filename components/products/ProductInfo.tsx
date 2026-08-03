import type { Product } from "@/types/product";


interface ProductInfoProps {

  product: Product;

}



export default function ProductInfo({

  product,

}: ProductInfoProps) {


  return (

    <div className="space-y-3">


      <div>

        <h3
          className="
            font-display
            text-2xl
            leading-tight
            text-lupinos-cacao
          "
        >

          {product.name}

        </h3>


        {product.subtitle && (

          <p
            className="
              mt-1
              text-sm
              italic
              text-lupinos-olive
            "
          >

            {product.subtitle}

          </p>

        )}

      </div>



      <p
        className="
          text-sm
          leading-relaxed
          text-lupinos-carbon/80
        "
      >

        {product.description}

      </p>



      {product.attributes &&
        product.attributes.length > 0 && (

        <ul
          className="
            flex
            flex-wrap
            gap-2
            pt-2
          "
        >

          {product.attributes.map(
            (attribute) => (

              <li

                key={attribute.label}

                className="
                  rounded-[var(--radius-small)]
                  bg-lupinos-cream-soft
                  px-3
                  py-1
                  text-xs
                  text-lupinos-cacao
                "

              >

                {attribute.label}: {attribute.value}

              </li>

            )

          )}

        </ul>

      )}


    </div>

  );

}