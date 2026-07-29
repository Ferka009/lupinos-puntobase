import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "5492323530407"; // Reemplazar por tu número
  const message =
    "¡Hola! Quisiera consultar por los productos de Lupinos.";

  const url = `https://wa.me/5492323530407?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      gap-3
      rounded-full
      bg-[#25D366]
      px-5
      py-3
      text-white
      shadow-2xl
      transition-all
      duration-300
      hover:scale-105
      hover:-translate-y-1
      hover:shadow-green-500/40
      animate-pulse
      "
    >
      <MessageCircle size={24} />

      <span className="hidden sm:block font-semibold">
        WhatsApp
      </span>
    </Link>
  );
}