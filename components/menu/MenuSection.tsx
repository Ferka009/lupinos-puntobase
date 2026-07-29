import Image from "next/image";
import MenuCard from "./MenuCard";
import { menuData } from "./menuData";

export default function MenuSection() {
  return (
    <section className="py-12 md:py-20">
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
            <div className="flex justify-center py-6 md:py-8">
              <Image
                src="/images/menu/lupino.png"
                alt=""
                width={120}
                height={120}
                aria-hidden
                className="
                  w-10
                  sm:w-12
                  md:w-16
                  h-auto
                  opacity-70
                  select-none
                  pointer-events-none
                  rotate-90
                "
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}