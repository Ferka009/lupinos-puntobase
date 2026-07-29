import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
    >
      <Image
        src="/lupinos-logo.png"
        alt="Lupinos Pastas"
        width={90}
        height={64}
        priority
        className="
          h-auto
          w-[72px]
          sm:w-[80px]
          md:w-[90px]
        "
      />
    </Link>
  );
}