type ProductVariant = {
  name: string;
  price: string;
};

type MenuItem = {
  name: string;
  format: string;
  description: string;
  price?: string;
  products?: ProductVariant[];
};

type PriceCategory = {
  category: string;
  items: MenuItem[];
};


export const priceData: PriceCategory[] = [

  {
    category: "Pastas Rellenas",
    items: [

      {
        name: "Raviolones Artesanales",
        format: "Caja x 12 unidades",
        description:
          "Pastas rellenas elaboradas artesanalmente con masa fresca y rellenos cuidadosamente seleccionados.",
        products: [
          {
            name: "Raviolones de carne desmenuzada al vino tinto",
            price: "$15.000",
          },
          {
            name: "Raviolones de verdura",
            price: "$8.000",
          },
        ],
      },


      {
        name: "Sorrentinos Artesanales",
        format: "Caja x 12 unidades",
        description:
          "Pasta rellena artesanal de gran tamaño, elaborada con ingredientes seleccionados y combinaciones llenas de sabor.",
        products: [
          {
            name: "Sorrentinos de ricota, jamón y muzzarella",
            price: "$8.500",
          },
          {
            name: "Sorrentinos de 4 quesos",
            price: "$9.500",
          },
        ],
      },

    ],
  },


  {
    category: "Pastas Largas",
    items: [

      {
        name: "Tallarines Artesanales",
        format: "1 kg | Rinde aproximadamente 7 porciones",
        description:
          "Masa fresca elaborada artesanalmente para acompañar tus salsas favoritas.",
        price: "$10.500",
      },

    ],
  },


  {
    category: "Prepizzas Artesanales",
    items: [

      {
        name: "Prepizza Artesanal",
        format: "Unidad",
        description:
          "Una base casera con fermentación cuidada y una textura liviana.",
        price: "$3.500",
      },


      {
        name: "Promo Prepizzas",
        format: "3 unidades",
        description:
          "Una opción ideal para compartir.",
        price: "$9.000",
      },

    ],
  },


  {
    category: "Postres Artesanales",
    items: [

      {
        name: "Mousse de Chocolate con Frutos Rojos",
        format: "Porcion Individual",
        description:
          "Chocolate intenso combinado con la frescura de los frutos rojos.",
        price: "$12.000",
      },


      {
        name: "Tiramisú",
        format: "Porcion Individual",
        description:
          "El clásico italiano preparado artesanalmente con cafe, mascarpone y cacao.",
        price: "$8.500",
      },

    ],
  },

];