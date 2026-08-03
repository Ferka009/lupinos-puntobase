import type { Product } from "@/types/product";
import { getStartingPrice } from "@/utils/product";


interface ProductPriceProps {

  product: Product;

  className?: string;

}


export default function ProductPrice({

  product,

  className = "",

}: ProductPriceProps) {


  const startingPrice = getStartingPrice(product);


  const formattedPrice = new Intl.NumberFormat(
    "es-AR",
    {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }
  ).format(startingPrice);



  return (

    <span
      className={`
        font-semibold
        text-lupinos-cacao
        ${className}
      `}
    >

      Desde {formattedPrice}

    </span>

  );

}