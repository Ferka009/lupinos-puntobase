# Component Architecture — Lupinos 2.0 v1.0

## Introducción

La arquitectura de componentes define la estructura técnica del sistema visual y funcional de Lupinos 2.0.

Su objetivo es crear una base:

- Escalable.
- Reutilizable.
- Ordenada.
- Fácil de mantener.

---

# Filosofía arquitectónica

Lupinos no debe construirse como una página estática.

Debe construirse como un sistema.

La arquitectura debe permitir:

- Agregar productos.
- Crear nuevas colecciones.
- Cambiar contenido.
- Evolucionar la experiencia.

Sin rehacer componentes.

---

# Principios principales

## 1. Componentes reutilizables

Cada elemento importante debe existir una sola vez.

Ejemplo:

Un ProductCard.

Puede aparecer en:

- Landing.
- Carta.
- Colecciones.

---

## 2. Separación de responsabilidades

Cada parte tiene una función.

```text
UI

↓

Data

↓

Logic
```

---

## 3. Composición

Las páginas se construyen combinando piezas.

No creando bloques gigantes.

---

# Arquitectura general

```text
Lupinos App

├── Pages

├── Components

├── Data

├── Context

├── Hooks

├── Types

└── Utils
```

---

# Estructura recomendada

```text
src/

├── app/

├── components/

├── data/

├── context/

├── hooks/

├── types/

├── utils/

└── styles/
```

---

# Components Architecture

## components/

Organización por dominio.

```text
components/

├── layout/

├── landing/

├── products/

├── mesa/

├── ui/

└── shared/
```

---

# Layout Components

Componentes globales.

```text
layout/

├── Navbar.tsx

├── Footer.tsx

└── Container.tsx
```

---

Responsabilidad:

Estructura general.

No contienen lógica de negocio.

---

# Landing Components

```text
landing/

├── Hero.tsx

├── FeaturedProducts.tsx

├── CollectionsSection.tsx

├── ProcessSection.tsx

├── StorySection.tsx

├── ReviewsSection.tsx

└── CTASection.tsx
```

---

# Product Components

```text
products/

├── ProductCard.tsx

├── ProductImage.tsx

├── ProductInfo.tsx

├── ProductBadge.tsx

├── ProductPrice.tsx

└── AddToMesaButton.tsx
```

---

# Mi Mesa Components

```text
mesa/

├── MesaDrawer.tsx

├── MesaList.tsx

├── MesaItem.tsx

├── MesaSummary.tsx

├── MesaNotes.tsx

└── SendOrderButton.tsx
```

---

# UI Components

Componentes básicos.

```text
ui/

├── Button.tsx

├── Badge.tsx

├── Icon.tsx

├── Modal.tsx

└── Card.tsx
```

---

# Data Architecture

Los productos viven separados.

```text
data/

├── products.ts

├── collections.ts

└── reviews.ts
```

---

Ejemplo:

```ts
products.ts

[
 {
  id,
  name,
  description,
  image,
  price,
  collection
 }
]
```

---

# Estado global

Mi Mesa necesita persistencia.

Debe existir un sistema central.

Opciones:

- Context API.
- Zustand.

---

Responsabilidades:

```text
MesaContext

├── products

├── addProduct()

├── removeProduct()

├── updateQuantity()

└── clearMesa()
```

---

# Flujo de información

```text
ProductCard

↓

addProduct()

↓

Mesa Context

↓

Mi Mesa

↓

WhatsApp
```

---

# Types

Los modelos viven separados.

```text
types/

├── product.ts

├── collection.ts

└── mesa.ts
```

---

Ejemplo:

```ts
Product {

id:string

name:string

description:string

price:number

image:string

}
```

---

# Hooks

Lógica reutilizable.

```text
hooks/

├── useMesa.ts

├── useProducts.ts

└── useCollections.ts
```

---

Ejemplo:

```ts
const {
 addProduct,
 items
}=useMesa()
```

---

# Utils

Funciones auxiliares.

```text
utils/

├── formatPrice.ts

├── whatsappMessage.ts

└── helpers.ts
```

---

# Routing

Estructura inicial:

```text
/

Landing

/carta

Carta completa

/colecciones/[slug]

Colección específica
```

---

# Arquitectura de compra

```text
Landing

↓

ProductCard

↓

MesaContext

↓

MesaDrawer

↓

WhatsApp
```

---

# Performance

Consideraciones:

- Next/Image.
- Lazy loading.
- Componentes pequeños.
- Datos optimizados.
- Evitar renders innecesarios.

---

# Escalabilidad futura

Preparado para:

## Nuevos productos

Agregar datos.

---

## Nuevas colecciones

Agregar colección.

---

## Blog gastronómico

Nueva sección.

---

## Reservas o eventos

Nuevo módulo.

---

# Reglas de código

## Componentes pequeños.

## Nombres claros.

## Sin datos escritos dentro del JSX.

## Sin lógica compleja dentro de UI.

---

# Ejemplo de arquitectura limpia

Incorrecto:

```tsx
<ProductCard>

precio = 12000

nombre = "Ravioles"

</ProductCard>
```

---

Correcto:

```tsx
<ProductCard product={product}/>
```

---

# Principio final

El código debe respetar la filosofía de Lupinos:

Simple.

Elegante.

Cuidado.

---

# Definición final

La arquitectura Lupinos 2.0 no construye una página.

Construye una plataforma gastronómica digital preparada para crecer.