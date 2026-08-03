import { products } from "@/data/products";

export const specialtiesData = products
  .filter((product) => product.featured)
  .map((product, index) => ({
    title: product.name,
    badge: product.badges?.[0]?.label ?? "Especialidad Lupinos",
    subtitle: product.subtitle ?? product.description,
    description: product.description,
    image: product.image.src,
    tags: product.attributes?.map((attribute) => attribute.value) ?? [],
    reverse: index % 2 !== 0,
  }));
