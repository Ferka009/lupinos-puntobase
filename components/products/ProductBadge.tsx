import type { ProductBadge as ProductBadgeType } from "@/types/product";
import { cn }  from "@/utils/cn";


interface ProductBadgeProps {

  badge: ProductBadgeType;

}


const badgeStyles = {

  new:
    "bg-lupinos-olive text-white",

  featured:
    "bg-lupinos-gold text-lupinos-cacao",

  popular:
    "bg-lupinos-bordo text-white",

  seasonal:
    "bg-lupinos-gold-soft text-lupinos-cacao",

};


export default function ProductBadge({
  badge,
}: ProductBadgeProps) {

  return (

    <span
      className={cn(
        "inline-flex",
        "items-center",
        "rounded-[var(--radius-small)]",
        "px-3",
        "py-1",
        "text-xs",
        "font-semibold",
        "tracking-wide",
        badgeStyles[badge.type],
      )}
    >

      {badge.label}

    </span>

  );

}