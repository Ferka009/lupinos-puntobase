# Folder Structure — Lupinos 2.0 v1.0

## Introducción

La estructura de carpetas define cómo se organiza el código de Lupinos 2.0.

El objetivo es separar responsabilidades y mantener un proyecto fácil de escalar.

---

# Estructura General

```text
src/

├── app/

├── components/

├── data/

├── hooks/

├── types/

├── utils/

└── styles/
```

---

# 01 — App

Ubicación:

```text
app/
```

Responsabilidad:

Arquitectura de páginas y rutas.


Ejemplo:

```text
app/

├── layout.tsx

├── page.tsx

├── carta/

│   └── page.tsx

└── colecciones/

    └── page.tsx
```

---

# 02 — Components

Ubicación:

```text
components/
```

Contiene piezas visuales.


Estructura:

```text
components/

├── ui/

├── shared/

├── landing/

├── products/

└── mesa/
```

---

# ui

Componentes genéricos del sistema.


Ejemplo:

```text
ui/

├── Button.tsx

├── Card.tsx

├── Container.tsx

└── SectionTitle.tsx
```

---

# shared

Componentes usados en diferentes partes.


Ejemplo:

```text
shared/

└── WhatsAppButton.tsx
```

---

# landing

Componentes de narrativa.


Ejemplo:

```text
landing/

├── Hero.tsx

├── Story.tsx

├── Collections.tsx

└── Reviews.tsx
```

---

# products

Todo relacionado con productos.


Ejemplo:

```text
products/

├── ProductCard.tsx

├── ProductGrid.tsx

└── AddToMesaButton.tsx
```

---

# mesa

Experiencia de compra.


Ejemplo:

```text
mesa/

├── MesaDrawer.tsx

├── MesaItem.tsx

└── MesaSummary.tsx
```

---

# 03 — Data

Ubicación:

```text
data/
```

Contiene información estática.


Ejemplo:

```text
data/

├── products.ts

├── collections.ts

└── testimonials.ts
```

---

# 04 — Hooks

Ubicación:

```text
hooks/
```

Contiene lógica reutilizable.


Ejemplo:

```text
hooks/

├── useMesa.ts

└── useProducts.ts
```

---

# 05 — Types

Ubicación:

```text
types/
```

Define modelos del sistema.


Ejemplo:

```text
types/

├── product.ts

├── order.ts

└── collection.ts
```

---

# 06 — Utils

Ubicación:

```text
utils/
```

Funciones auxiliares.


Ejemplo:

```text
utils/

├── formatPrice.ts

└── whatsappMessage.ts
```

---

# 07 — Styles

Ubicación:

```text
styles/
```

Estilos complementarios.


Ejemplo:

```text
styles/

├── animations.css

└── utilities.css
```

---

# Reglas de Organización

## No mezclar responsabilidades.

Ejemplo incorrecto:

```text
components/ProductCard.tsx

con:

- datos
- lógica de pedido
- estilos globales
```

---

Correcto:

```text
ProductCard

↓

product data

↓

Mesa actions
```

---

# Principio Final

La estructura del proyecto debe reflejar la filosofía Lupinos:

Cada elemento tiene su lugar.

Cada componente tiene un propósito.

Cada decisión ayuda a construir una experiencia coherente.