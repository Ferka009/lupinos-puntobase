import Image from "next/image";

export default function SectionDivider() {
  return (
    <div className="flex justify-center py-10 md:py-12 rotate-90">
      <Image
        src="/images/menu/lupino.png"
        alt=""
        width={120}
        height={120}
        aria-hidden
        className="
          w-14
          md:w-16
          h-auto
          rotate -[75deg]
          opacity-65
          select-none
          pointer-events-none
        "
      />
    </div>
  );
}