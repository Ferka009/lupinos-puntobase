import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/lupinos-logo-final.png"
        alt="Lupinos Pastas"
        width={85}
        height={60}
      />
    </Link>
  );
}