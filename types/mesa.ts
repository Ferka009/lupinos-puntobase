import type { ProductVariant } from "@/types/product";


export interface MesaItem {

  id: string;


  productId: string;

  productName: string;


  variant: ProductVariant;


  quantity: number;


  note?: string;


  addedAt?: string;

}



export interface MesaState {

  items: MesaItem[];

}



export interface MesaActions {

  addItem: (
    item: MesaItem
  ) => void;


  removeItem: (
    id: string
  ) => void;


  updateQuantity: (

    id: string,

    quantity:number

  ) => void;


  updateNote: (

    id:string,

    note:string

  ) => void;


  clearMesa: () => void;

}