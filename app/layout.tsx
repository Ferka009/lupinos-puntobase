import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lupinos | Pastas Artesanales en Luján",

  description:
    "Pastas artesanales elaboradas en Luján, Buenos Aires. Raviolones, sorrentinos, pastas frescas y especialidades gourmet hechas con ingredientes seleccionados.",

  keywords: [
    "pastas artesanales",
    "pastas frescas",
    "raviolones",
    "sorrentinos",
    "Luján",
    "Buenos Aires",
    "comida artesanal",
  ],

  authors: [
    {
      name: "Lupinos Pastas Artesanales",
    },
  ],

  openGraph: {
    title: "Lupinos | Pastas Artesanales",

    description:
      "Sabores artesanales inspirados en la naturaleza y elaborados desde Luján, Buenos Aires.",

    type: "website",

    locale: "es_AR",

    siteName: "Lupinos",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lupinos | Pastas Artesanales",
    description:
      "Pastas artesanales elaboradas con dedicación, ingredientes seleccionados y recetas únicas.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          font-[var(--font-poppins)]
          bg-[#f7f2e8]
        "
      >
        {children}
      </body>
    </html>
  );
}