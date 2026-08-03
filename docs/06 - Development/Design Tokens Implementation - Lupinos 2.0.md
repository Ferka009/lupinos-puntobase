# Design Tokens Implementation — Lupinos 2.0 v1.0

## Introducción

Los Design Tokens representan la traducción del sistema visual Lupinos hacia código.

Son valores centrales que definen:

- Colores.
- Tipografías.
- Espaciados.
- Bordes.
- Sombras.
- Animaciones.

Su objetivo es mantener consistencia entre todos los componentes.

---

# Filosofía

Los tokens son la conexión entre:

Marca → Diseño → Código.

Cada decisión visual debe existir como una regla reutilizable.

---

# Estructura general

```text
Design Tokens

├── Colors
├── Typography
├── Spacing
├── Radius
├── Shadows
└── Motion
```

---

# 01 — Color Tokens

La paleta Lupinos debe transmitir:

- Artesanía.
- Gastronomía.
- Calidez.
- Premium.

---

# Primary Colors

## Cream Background

Uso:

- Fondos principales.
- Secciones.
- Espacios amplios.

Token:

```ts
lupinos-cream
```

Valor conceptual:

```css
#F7F2E8
```

---

## Olive Green

Uso:

- Botones.
- Estados activos.
- Detalles naturales.

Token:

```ts
lupinos-olive
```

Valor conceptual:

```css
#596044
```

---

## Warm Gold

Uso:

- Destacados.
- Detalles premium.
- Elementos especiales.

Token:

```ts
lupinos-gold
```

Valor conceptual:

```css
#B89A5A
```

---

## Cacao Brown

Uso:

- Textos secundarios.
- Contrastes suaves.

Token:

```ts
lupinos-cacao
```

Valor conceptual:

```css
#4A3528
```

---

# Neutral Colors

## White

Uso:

Cards.

```ts
neutral-white
```

---

## Soft Gray

Uso:

Separadores.

Estados secundarios.

```ts
neutral-soft
```

---

# Implementación Tailwind conceptual

```ts
colors: {

cream:
"#F7F2E8",

olive:
"#596044",

gold:
"#B89A5A",

cacao:
"#4A3528"

}
```

---

# 02 — Typography Tokens

## Sistema tipográfico

Lupinos utiliza dos familias.

---

# Display Font

Uso:

- Hero.
- Títulos.
- Historias.

Características:

- Elegante.
- Artesanal.
- Editorial.

Token:

```ts
font-display
```

---

# Body Font

Uso:

- Descripciones.
- Botones.
- Información.

Familia:

Inter.

Token:

```ts
font-body
```

---

# Escala tipográfica

## Hero

```ts
text-hero
```

Grande.

Emocional.

---

## Section Title

```ts
text-section
```

---

## Product Title

```ts
text-product
```

---

## Body

```ts
text-body
```

---

## Small

```ts
text-small
```

---

# 03 — Spacing Tokens

El lujo necesita espacio.

Lupinos utiliza una escala consistente.

---

Base:

```text
4px
```

---

Escala:

```text
space-1  = 4px

space-2  = 8px

space-3  = 12px

space-4  = 16px

space-6  = 24px

space-8  = 32px

space-12 = 48px

space-16 = 64px

space-24 = 96px
```

---

Uso:

Pequeños detalles:

4-16px

Componentes:

24-32px

Secciones:

64-96px

---

# 04 — Border Radius Tokens

La marca debe sentirse artesanal y suave.

---

## Small

```ts
radius-sm

8px
```

Uso:

Inputs.

Badges.

---

## Medium

```ts
radius-md

16px
```

Uso:

Botones.

Cards pequeñas.

---

## Large

```ts
radius-lg

24px
```

Uso:

ProductCard.

Imágenes.

Secciones.

---

# 05 — Shadow Tokens

Evitar sombras fuertes.

La sensación debe ser natural.

---

## Soft Shadow

Uso:

Cards.

```ts
shadow-soft
```

---

## Floating Shadow

Uso:

Mi Mesa.

Navbar.

```ts
shadow-floating
```

---

# 06 — Motion Tokens

Las animaciones Lupinos son:

- Sutiles.
- Elegantes.
- Humanas.

---

# Duraciones

```text
fast

150ms


normal

250ms


slow

400ms
```

---

# Easings

Preferencia:

Movimiento natural.

Ejemplo:

```css
ease-out
```

---

# Component Usage

Ejemplo:

ProductCard:

```tsx
<div
className="
bg-lupinos-cream
rounded-xl
shadow-soft
"
>
```

---

Button:

```tsx
<button
className="
bg-lupinos-olive
text-white
rounded-md
"
>
Agregar a mi mesa
</button>
```

---

# Token Rules

Nunca escribir:

```css
background:#596044;
```

directamente dentro de componentes.

---

Siempre:

```css
bg-lupinos-olive
```

---

# Objetivo técnico

Los tokens permiten:

✓ Consistencia visual.

✓ Cambios globales.

✓ Código más limpio.

✓ Mejor colaboración diseño/desarrollo.

---

# Relación con componentes

```text
Tokens

↓

Button

↓

ProductCard

↓

Landing

↓

Experiencia completa
```

---

# Principio final

Cada decisión visual de Lupinos debe poder convertirse en una regla reutilizable.

---

# Definición final

Los Design Tokens son la memoria visual de Lupinos dentro del código.

Son el punto donde la identidad artesanal se transforma en una experiencia digital consistente.