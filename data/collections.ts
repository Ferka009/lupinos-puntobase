import type { Collection } from "@/types/collection";


export const collections: Collection[] = [

  {
    id: "clasicos-de-siempre",

    slug: "clasicos-de-siempre",

    name: "Clásicos de Siempre",

    subtitle:
      "Los sabores que nos recuerdan la mesa de los domingos.",

    description:
      "Recetas tradicionales elaboradas con ingredientes seleccionados y el cuidado artesanal que caracteriza a Lupinos.",

    image: {
      src: "/images/collections/clasicos.jpg",
      alt: "Pastas artesanales clásicas Lupinos",
    },

    personality: "traditional",

    featured: true,

    productIds: [],
  },


  {
    id: "mesa-familiar",

    slug: "mesa-familiar",

    name: "Mesa Familiar",

    subtitle:
      "Pastas pensadas para compartir momentos especiales.",

    description:
      "Opciones ideales para reuniones familiares, domingos y encuentros donde la comida es protagonista.",

    image: {
      src: "/images/collections/familiar.jpg",
      alt: "Mesa familiar con pastas artesanales Lupinos",
    },

    personality: "family",

    featured: true,

    productIds: [],
  },


  {
    id: "experiencia-gourmet",

    slug: "experiencia-gourmet",

    name: "Experiencia Gourmet",

    subtitle:
      "Combinaciones únicas para quienes buscan algo diferente.",

    description:
      "Pastas con sabores más sofisticados, ingredientes especiales y una experiencia gastronómica memorable.",

    image: {
      src: "/images/collections/gourmet.jpg",
      alt: "Pastas gourmet artesanales Lupinos",
    },

    personality: "gourmet",

    featured: true,

    productIds: [],
  },


];