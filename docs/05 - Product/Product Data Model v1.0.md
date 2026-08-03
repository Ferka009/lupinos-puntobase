# Product Data Model v1.0

> Modelo técnico del dominio de productos de Lupinos 2.0.
>
> Define las estructuras de datos principales que representan productos, colecciones y elementos de Mi Mesa.

---

# Objetivo

Crear un modelo de datos único, escalable y tipado que permita representar todos los productos de Lupinos.

El modelo debe soportar:

- productos actuales
- nuevos productos
- temporadas
- promociones
- colecciones
- experiencia Mi Mesa
- futuras integraciones

---

# Principios del Modelo

## Fuente única de verdad

Toda la información de producto vive en un único modelo.

No existen datos duplicados en componentes.

---

## Tipado fuerte

Todas las entidades deben estar definidas mediante TypeScript.

Los componentes consumen tipos.

Nunca crean estructuras propias.

---

## Evolución sin ruptura

Agregar nuevos atributos no debe requerir modificar la arquitectura existente.

---

# Entidades Principales

---

# Product

Entidad principal del sistema.

Representa cualquier producto ofrecido por Lupinos.

Ejemplos:

- Raviolones
- Sorrentinos
- Pastas frescas
- Salsas
- Prepizzas

---

## Product Interface

```ts
interface Product {

  id: string;

  slug: string;

  name: string;

  subtitle?: string;

  description: string;


  image: ProductImage;

  gallery?: ProductImage[];


  price: number;


  category: Category;


  collections?: Collection[];


  badges?: ProductBadge[];


  status: ProductStatus;


  attributes?: ProductAttribute[];


  personality?: ProductPersonality;


  featured?: boolean;


  createdAt?: string;

}
```

---

# Campos de Product

---

## id

Identificador único.

Ejemplo:

```ts
"raviolones-roast-beef"
```

Uso:

- referencias internas
- relaciones
- estado

---

## slug

Identificador para URLs.

Ejemplo:

```ts
"raviolones-roast-beef-vino-tinto"
```

Uso:

```
/carta/raviolones-roast-beef-vino-tinto
```

---

## name

Nombre comercial.

Debe ser claro y atractivo.

Ejemplo:

```
Raviolones de Roast Beef
```

---

## subtitle

Texto corto complementario.

Ejemplo:

```
Cocción lenta al vino tinto
```

---

## description

Descripción emocional del producto.

Debe transmitir:

- sabor
- elaboración
- experiencia

No debe ser únicamente técnica.

---

## image

Imagen principal del producto.

---

## gallery

Imágenes adicionales futuras.

Preparado para:

- detalle de producto
- proceso
- ingredientes

---

## price

Precio actual.

Tipo:

```ts
number
```

Nunca guardar precios como texto.

Correcto:

```ts
3500
```

Incorrecto:

```ts
"$3500"
```

---

## category

Clasificación funcional.

---

## collections

Agrupaciones emocionales.

Un producto puede pertenecer a varias.

---

## badges

Indicadores visuales.

Ejemplos:

- Nuevo
- Recomendado
- Más vendido
- Temporada

---

## status

Disponibilidad del producto.

---

## attributes

Información adicional.

Ejemplos:

- Rinde 2 personas
- Congelable
- Pasta fresca

---

## personality

Personalidad del producto.

Ejemplos:

- clásico
- intenso
- gourmet
- familiar

---

## featured

Indica si aparece destacado.

---

# ProductImage

```ts
interface ProductImage {

  src: string;

  alt: string;

}
```

---

# Category

Clasificación funcional.

```ts
interface Category {

  id: string;

  name: string;

  slug: string;

}
```

Ejemplo:

```ts
{
 id: "pastas-rellenas",
 name: "Pastas rellenas",
 slug: "pastas-rellenas"
}
```

---

# Collection

Representa una experiencia o selección.

```ts
interface Collection {

  id: string;

  name: string;

  slug: string;

  description: string;

  image?: string;

}
```

Ejemplos:

```text
Favoritos de la casa

Para compartir

Sabores intensos

Ediciones especiales
```

---

# ProductBadge

Indicadores visuales.

```ts
type ProductBadge = {

 label: string;

 type:
 | "new"
 | "featured"
 | "popular"
 | "seasonal";

}
```

---

# ProductStatus

Estado del producto.

```ts
type ProductStatus =

"available"

| "coming-soon"

| "sold-out"

| "seasonal";
```

---

# ProductAttribute

Características rápidas.

```ts
interface ProductAttribute {

 label: string;

 value: string;

}
```

Ejemplo:

```ts
{
 label:"Rinde",
 value:"2 personas"
}
```

---

# ProductPersonality

Identidad emocional.

```ts
type ProductPersonality =

"classic"

| "family"

| "gourmet"

| "intense"

| "seasonal";
```

---

# MesaItem

Representa un producto seleccionado.

Nunca reemplaza Product.

---

```ts
interface MesaItem {

 productId: string;

 quantity: number;

 notes?: string;

}
```

---

# Relaciones

```text
Product

 ├── Category

 ├── Collection[]

 ├── ProductBadge[]

 └── ProductAttribute[]



MesaItem

 └── Product
```

---

# Reglas Técnicas

## Los componentes nunca modifican Product

Ejemplo incorrecto:

```ts
product.price = newPrice
```

---

## Mi Mesa guarda referencias

Correcto:

```ts
{
 productId:"raviolones-roast-beef",
 quantity:2
}
```

No:

```ts
{
 name:"Raviolones",
 price:3500
}
```

---

## Precio siempre numérico

Permite:

- cálculos
- descuentos
- promociones

---

## Imágenes siempre optimizadas

Preparado para:

- Next Image
- CDN
- futuras galerías

---

# Preparado para futuras versiones

Este modelo permite agregar:

## Promociones

```ts
discount?
```

## Favoritos

```ts
favorite?
```

## Temporadas

```ts
season?
```

## Recomendaciones

```ts
recommendedWith?
```

## Packs

```ts
bundle?
```

sin romper la arquitectura.

---

# Implementación esperada

La estructura inicial será:

```
types/

product.ts
collection.ts
mesa.ts


data/

products.ts
collections.ts
categories.ts
```

---

# Definición final

El Product Data Model es el contrato entre la visión de Lupinos y el código.

Cada producto debe poder existir como una experiencia completa:

- ser descubierto
- ser elegido
- formar parte de una mesa
- convertirse en un pedido

El modelo no representa solamente información.

Representa la manera en que Lupinos comparte comida.
```