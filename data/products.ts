import type { Product } from "@/types/product";


export const products: Product[] = [

  {
    id: "raviolones-carne",

    slug: "raviolones-carne",

    name: "Raviolones de Carne",

    subtitle:
      "Un clásico de Lupinos para compartir.",

    description:
      "Raviolones artesanales elaborados con carne seleccionada y una masa fresca preparada con dedicación.",


    image: {

      src:
        "/images/products/raviolones-carne.jpg",

      alt:
        "Raviolones artesanales de carne Lupinos",

    },


    categoryId:
      "raviolones",


    collectionIds: [

      "clasicos-de-siempre",

      "mesa-familiar",

    ],


    variants: [

      {

        id:
          "raviolones-carne-500g",

        name:
          "Caja 500g",

        weight:
          "500g",

        price:
          8500,

        available:
          true,

      },


      {

        id:
          "raviolones-carne-1kg",

        name:
          "Caja 1kg",

        weight:
          "1kg",

        price:
          15000,

        available:
          true,

      },

    ],


    badges: [

      {

        label:
          "Clásico Lupinos",

        type:
          "featured",

      },

    ],


    status:
      "available",


    personality:
      "classic",


    featured:
      true,

  },



  {
    id:
      "raviolones-ricota-espinaca",


    slug:
      "raviolones-ricota-espinaca",


    name:
      "Raviolones de Ricota y Espinaca",


    subtitle:
      "Suaves, equilibrados y llenos de sabor.",


    description:
      "Una combinación artesanal de ricota cremosa y espinaca seleccionada, pensada para una mesa especial.",


    image: {

      src:
        "/images/products/raviolones-ricota-espinaca.jpg",

      alt:
        "Raviolones de ricota y espinaca Lupinos",

    },


    categoryId:
      "raviolones",


    collectionIds: [

      "clasicos-de-siempre",

      "experiencia-gourmet",

    ],


    variants: [

      {

        id:
          "raviolones-ricota-500g",

        name:
          "Caja 500g",

        weight:
          "500g",

        price:
          8500,

        available:
          true,

      },

      {

        id:
          "raviolones-ricota-1kg",

        name:
          "Caja 1kg",

        weight:
          "1kg",

        price:
          15000,

        available:
          true,

      },

    ],


    badges: [

      {

        label:
          "Favorito",

        type:
          "popular",

      },

    ],


    status:
      "available",


    personality:
      "gourmet",


    featured:
      true,

  },



  {
    id:
      "prepizza-artesanal",


    slug:
      "prepizza-artesanal",


    name:
      "Prepizza Artesanal",


    subtitle:
      "La base perfecta para compartir.",


    description:
      "Prepizzas elaboradas artesanalmente con una masa cuidada para lograr una textura suave y sabrosa.",


    image: {

      src:
        "/images/products/prepizza.jpg",

      alt:
        "Prepizza artesanal Lupinos",

    },


    categoryId:
      "prepizzas",


    collectionIds: [

      "mesa-familiar",

    ],


    variants: [

      {

        id:
          "prepizza-unidad",

        name:
          "Unidad",

        price:
          3000,

        available:
          true,

      },


      {

        id:
          "prepizza-pack-4",

        name:
          "Pack x4",

        price:
          11000,

        available:
          true,

      },

    ],


    status:
      "available",


    personality:
      "family",

  },

];