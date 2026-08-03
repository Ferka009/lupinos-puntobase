export interface CollectionImage {

  src: string;

  alt: string;

}


export type CollectionPersonality =
  | "traditional"
  | "family"
  | "gourmet"
  | "signature";


export interface Collection {

  id: string;

  slug: string;

  name: string;

  subtitle?: string;

  description: string;


  image: CollectionImage;


  personality?: CollectionPersonality;


  featured?: boolean;


  productIds: string[];

}