import type { Product } from "@/types/product";

import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import ProductBadge from "./ProductBadge";
import AddToMesaButton from "./AddToMesaButton";


interface ProductCardProps {

  product: Product;

}



export default function ProductCard({

  product,

}: ProductCardProps) {


  return (

    <article
      className="
        group
        overflow-hidden
        rounded-[var(--radius-card)]
        bg-white
        shadow-[var(--shadow-soft)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[var(--shadow-floating)]
      "
    >


      <div className="relative">


        <ProductImage

          image={product.image}

        />


        {product.badges &&
          product.badges.length > 0 && (

          <div
            className="
              absolute
              left-4
              top-4
              flex
              flex-wrap
              gap-2
            "
          >

            {product.badges.map((badge) => (

              <ProductBadge

                key={badge.label}

                badge={badge}

              />

            ))}

          </div>

        )}


      </div>



      <div
        className="
          flex
          flex-col
          gap-5
          p-6
        "
      >


        <ProductInfo

          product={product}

        />


        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >

          <ProductPrice

            product={product}

          />


          <AddToMesaButton

            product={product}

          />

        </div>


      </div>


    </article>

  );

}