export interface ProductImage {
  src: string;
  alt: string;
}


export interface ProductBadge {
  label: string;

  type:
    | "new"
    | "featured"
    | "popular"
    | "seasonal";
}


export interface ProductAttribute {
  label: string;
  value: string;
}


export interface ProductVariant {

  id: string;

  name: string;

  description?: string;

  weight?: string;

  price: number;

  available: boolean;

}


export type ProductStatus =
  | "available"
  | "coming-soon"
  | "sold-out"
  | "seasonal";


export type ProductPersonality =
  | "classic"
  | "family"
  | "gourmet"
  | "intense"
  | "seasonal";



/**
 * Product Domain Entity
 *
 * Representa un producto comercial de Lupinos.
 * Los precios viven dentro de variants.
 * Las categorías y colecciones se resuelven mediante IDs.
 */

export interface Product {

  id: string;

  slug: string;


  name: string;

  subtitle?: string;

  description: string;



  image: ProductImage;

  gallery?: ProductImage[];



  /**
   * Relaciones externas
   */

  categoryId: string;

  collectionIds?: string[];



  /**
   * Opciones comerciales
   */

  variants: ProductVariant[];



  badges?: ProductBadge[];


  status: ProductStatus;


  attributes?: ProductAttribute[];


  personality?: ProductPersonality;


  featured?: boolean;


  createdAt?: string;

}