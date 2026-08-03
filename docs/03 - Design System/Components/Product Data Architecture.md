# Product Data Architecture v1.0 — Lupinos

## Introducción

La arquitectura de productos define cómo Lupinos organiza, administra y presenta sus especialidades dentro de la experiencia digital.

Su objetivo es separar:

- La información del producto.
- La presentación visual.
- La experiencia de compra.

Esto permite que Lupinos pueda crecer manteniendo consistencia.

---

# Filosofía

Un producto Lupinos no es solamente un artículo de venta.

Es una combinación de:

- Ingredientes.
- Historia.
- Tradición.
- Momento.
- Experiencia.

Por eso cada producto debe tener información suficiente para generar deseo y confianza.

---

# Modelo mental

La estructura principal es:

```
Producto

↓

Colección

↓

Momento

↓

Experiencia
```

Ejemplo:

```
Ravioles de Roast Beef al Malbec

↓

Domingo en Familia

↓

Almuerzo compartido

↓

Momento Lupinos
```

---

# Entidad Product

Cada producto debe contener:

## Información básica

Campos principales:

```ts
Product {
 id
 name
 slug
 description
 image
 price
 category
}
```

---

# Identidad del producto

## Nombre

Debe ser:

- Claro.
- Memorable.
- Gastronómico.

Ejemplo:

Correcto:

"Ravioles de Roast Beef al Malbec"

Incorrecto:

"Producto 001"

---

## Slug

Identificador interno.

Ejemplo:

```
ravioles-roast-beef-malbec
```

---

# Descripción

Debe responder:

¿Por qué este producto es especial?

Formato recomendado:

1 o 2 frases.

Ejemplo:

"Masa artesanal rellena con roast beef braseado lentamente al vino tinto."

---

# Información gastronómica

Campos:

```ts
details {
 portions
 weight
 cookingTime
 conservation
}
```

Ejemplo:

```
Porciones:
4 personas

Peso:
500g

Cocción:
5 minutos

Conservación:
Congelado
```

---

# Imagen del producto

Cada producto debe contemplar:

```ts
images {
 main
 gallery[]
}
```

---

## Imagen principal

Uso:

ProductCard.

Debe transmitir deseo.

---

## Galería

Uso futuro:

Detalle del producto.

Puede incluir:

- Producto terminado.
- Elaboración.
- Ingredientes.
- Proceso artesanal.

---

# Colecciones

Los productos deben pertenecer a colecciones emocionales.

Ejemplos:

## Domingo en Familia

Productos tradicionales.

---

## Cena Especial

Productos premium.

---

## Sabores de Estación

Productos temporales.

---

## Para Compartir

Productos pensados para reuniones.

---

Modelo:

```ts
collection {
 id
 name
 description
 image
}
```

---

# Categorías

Las categorías organizan.

Ejemplo:

```
Pastas rellenas

Pastas clásicas

Salsas

Combos
```

Importante:

La categoría organiza.

La colección emociona.

---

# Etiquetas especiales

Los productos pueden tener badges.

Ejemplo:

```ts
tags [
 "Favorito",
 "Nuevo",
 "Especialidad"
]
```

Uso:

Destacar sin saturar.

---

# Disponibilidad

Cada producto debe manejar estado:

```ts
availability {
 available
 seasonal
 stock
}
```

Ejemplos:

Disponible.

Solo esta temporada.

Agotado temporalmente.

---

# Precio

El precio debe ser dinámico.

```ts
price {
 amount
 currency
}
```

Preparado para futuros cambios.

---

# Mi Mesa Integration

Cada producto debe tener un identificador único.

Cuando el usuario selecciona:

```
ProductCard

↓

Product ID

↓

Mi Mesa

↓

Cantidad seleccionada
```

---

# Modelo completo recomendado

Ejemplo conceptual:

```ts
Product {

 id: "rv001",

 name:
 "Ravioles de Roast Beef al Malbec",

 description:
 "Masa artesanal rellena con carne braseada lentamente al vino tinto.",

 image:
 "/images/ravioles-roast.jpg",

 price:
 12000,

 category:
 "Pastas rellenas",

 collection:
 "Domingo en Familia",

 details: {

 portions:
 "4 personas",

 weight:
 "500g",

 cookingTime:
 "5 minutos",

 conservation:
 "Congelado"

 },

 tags:
 [
 "Especialidad Lupinos"
 ]

}
```

---

# Separación de responsabilidades

La información del producto no debe depender del diseño.

Ejemplo:

El mismo producto puede aparecer en:

- Landing.
- Carta.
- ProductCard.
- Instagram.
- Campañas.

---

# Preparación para crecimiento

La arquitectura debe permitir agregar:

## Combos

Ejemplo:

"Domingo completo"

---

## Packs

Ejemplo:

"Pack familia"

---

## Productos temporales

Ejemplo:

"Edición invierno"

---

## Regalos

Ejemplo:

"Experiencia Lupinos"

---

# Principios técnicos

Debe ser:

✓ Escalable.

✓ Reutilizable.

✓ Fácil de actualizar.

✓ Separado del código visual.

---

# Errores a evitar

No hacer:

✗ Productos escritos directamente dentro de componentes.

✗ Información duplicada.

✗ Imágenes sin organización.

✗ Categorías rígidas.

✗ Datos mezclados con diseño.

---

# Regla de oro

Antes de crear un producto preguntamos:

> ¿Estamos mostrando solamente qué vendemos o estamos contando por qué alguien debería elegirlo?

---

# Definición final

La arquitectura de productos Lupinos no organiza solamente productos.

Organiza historias, sabores y momentos que pueden compartirse.