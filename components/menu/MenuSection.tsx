import Image from "next/image";
import MenuCard from "./MenuCard";
import { menuData } from "./menuData";

export default function MenuSection() {
  return (
    <section className="py-10">
      {menuData.map((item, index) => (
        <div key={item.title}>
          <MenuCard
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            products={item.products}
            image={item.image}
            reverse={item.reverse}
          />

          {index < menuData.length - 1 && (
            <div className="flex justify-center py-2">
  <Image
    src="/images/menu/lupino.png"
    alt=""
    width={120}
    height={120}
    aria-hidden
    className="
      w-[90px]
      h-auto
      rotate-90
      opacity-80
      select-none
      pointer-events-none
    "
  />
</div>
          )}
        </div>
      ))}
    </section>
  );
}