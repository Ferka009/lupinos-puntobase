"use client";
import type { Product } from "@/types/product";
import Button from "@/components/ui/Button";


interface AddToMesaButtonProps {

  product: Product;

  onAdd?: (product: Product) => void;

}



export default function AddToMesaButton({

  product,

  onAdd,

}: AddToMesaButtonProps) {


  function handleClick() {

    if (onAdd) {

      onAdd(product);

      return;

    }


    console.log(
      "Mi Mesa - producto pendiente:",
      product.name
    );

  }



  return (

    <Button

      type="button"

      variant="secondary"

      onClick={handleClick}

      showArrow={false}

    >

      Agregar a mi mesa

    </Button>

  );

}