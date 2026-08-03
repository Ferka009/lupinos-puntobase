import { categories } from "@/data/categories";
import { products } from "@/data/products";
import formatPrice from "@/utils/formatPrice";

type PriceListItem = {
  name: string;
  format: string;
  description: string;
  price: string;
  products?: Array<{ name: string; price: string }>;
};

type PriceCategory = {
  category: string;
  items: PriceListItem[];
};

export const priceData: PriceCategory[] = categories.map((category) => ({
  category: category.name,
  items: products
    .filter((product) => product.categoryId === category.id && product.status === "available")
    .map((product) => ({
      name: product.name,
      format: product.attributes?.find((attribute) => attribute.label === "Presentación")?.value ?? "",
      description: product.description,
      price: formatPrice(
  Math.min(
    ...product.variants
      .filter(
        (variant) => variant.available
      )
      .map(
        (variant) => variant.price
      )
  )
),
    })),
}));
