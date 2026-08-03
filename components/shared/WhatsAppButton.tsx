import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "5492323530407";
  const message = "¡Hola! Quisiera consultar por los productos de Lupinos.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-green-500/40 animate-pulse">
      <MessageCircle size={24} aria-hidden />
      <span className="hidden font-semibold sm:block">WhatsApp</span>
    </Link>
  );
}
