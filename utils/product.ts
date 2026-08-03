import type { Product } from "@/types/product";


export function getStartingPrice(
  product: Product
) {

  const availableVariants =
    product.variants.filter(
      (variant) => variant.available
    );


  return Math.min(
    ...availableVariants.map(
      (variant) => variant.price
    )
  );

}