# Coding Standards — Lupinos 2.0 v1.0

## Introducción

Este documento define las reglas de escritura de código para Lupinos 2.0.

El objetivo es mantener un código:

- limpio
- consistente
- escalable
- fácil de entender

Cada decisión técnica debe favorecer la experiencia del producto.

---

# 01 — Principios Generales

## Legibilidad primero

El código debe ser fácil de leer por otro desarrollador.

Preferir:

- nombres descriptivos
- estructuras simples
- componentes pequeños


Evitar:

- abreviaciones confusas
- lógica innecesaria
- soluciones complejas sin motivo

---

# 02 — TypeScript

Usar TypeScript correctamente.

Preferir:

```ts
interface Product {
  id: string;
  name: string;
  price: number;
}
```

Evitar:

```ts
const product: any = {}
```

---

# Tipos compartidos

Los tipos importantes deben vivir en:

```text
types/
```

Ejemplo:

```text
types/

├── product.ts

├── collection.ts

└── order.ts
```

---

# 03 — Componentes React

Cada componente debe tener una única responsabilidad.

Correcto:

```text
ProductCard.tsx
```

Responsabilidad:

Mostrar un producto.

---

Incorrecto:

```text
ProductCard.tsx

maneja:

- producto
- carrito
- WhatsApp
- navegación
- datos
```

---

# 04 — Estructura de Componentes

Formato recomendado:

```tsx
importaciones

types

interface Props

function Component

export default Component
```

Ejemplo:

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
 children,
 variant = "primary"
}: ButtonProps) {

 return (
   <button>
     {children}
   </button>
 )

}
```

---

# 05 — Naming

## Componentes

PascalCase.

Correcto:

```text
ProductCard.tsx

MesaDrawer.tsx
```

---

## Variables

camelCase.

Correcto:

```ts
productList

selectedProduct
```

---

## Funciones

camelCase.

Correcto:

```ts
addProduct()

removeProduct()
```

---

# 06 — Props

Las props deben ser claras.

Correcto:

```tsx
<ProductCard
 product={product}
/>
```

Evitar:

```tsx
<Card
 data={item}
/>
```

cuando no sabemos qué contiene.

---

# 07 — Tailwind CSS

Usar siempre tokens del Design System.

Correcto:

```tsx
bg-lupinos-cream
text-lupinos-cacao
```

Incorrecto:

```tsx
bg-[#F8F1E5]
```

---

# 08 — Responsive Design

Mobile First.

Orden:

```text
Mobile

↓

Tablet

↓

Desktop
```

Ejemplo:

```tsx
className="
px-4
md:px-8
lg:px-12
"
```

---

# 09 — Estados React

Antes de crear estado:

Preguntar:

¿Este estado pertenece solamente al componente?

Si sí:

usar:

```tsx
useState
```

---

Si varios componentes necesitan compartirlo:

usar:

```text
context
```

o:

```text
zustand
```

---

# 10 — Hooks

Los hooks personalizados viven en:

```text
hooks/
```

Ejemplo:

```text
hooks/

useMesa.ts

useProducts.ts
```

---

# 11 — Data

Nunca escribir productos directamente en componentes.

Incorrecto:

```tsx
<h3>
Raviolones de carne
</h3>
```

Correcto:

```tsx
<h3>
{product.name}
</h3>
```

---

Los datos viven en:

```text
data/
```

---

# 12 — Imágenes

Usar siempre:

```tsx
next/image
```

No usar:

```html
<img>
```

salvo casos especiales.

---

# 13 — Accesibilidad

Todos los elementos interactivos deben ser accesibles.

Botones:

```tsx
<button>
```

No:

```tsx
<div onClick="">
```

---

Imágenes:

Siempre:

```tsx
alt=""
```

---

# 14 — Performance

Prioridades:

- evitar renders innecesarios
- optimizar imágenes
- usar Server Components cuando corresponda
- evitar librerías innecesarias

---

# 15 — Organización de archivos

Mantener separación:

```text
components/
data/
types/
hooks/
utils/
```

---

# 16 — Comentarios

Los comentarios deben explicar decisiones.

No explicar código obvio.

Correcto:

```ts
// Guardamos la mesa localmente para mantener el pedido del usuario
```

Incorrecto:

```ts
// suma uno
count++
```

---

# 17 — Git

Commits pequeños y claros.

Formato:

```text
tipo: descripción
```

Ejemplos:

```text
feat: create ProductCard

style: update Lupinos tokens

fix: correct mobile spacing
```

---

# 18 — Regla final

El código Lupinos debe reflejar la marca:

Simple.

Elegante.

Cuidado.

Artesanal.

Cada componente debe estar construido con la misma intención con la que se prepara una pasta artesanal.