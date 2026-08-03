import Image from "next/image";
import type { ProductImage as ProductImageType } from "@/types/product";

interface ProductImageProps {
  image: ProductImageType;
}

export default function ProductImage({ image }: ProductImageProps) {
  return <Image src={image.src} alt={image.alt} width={800} height={600} className="aspect-4/3 w-full object-cover transition-transform duration-[var(--motion-slow)] group-hover:scale-105" />;
}
