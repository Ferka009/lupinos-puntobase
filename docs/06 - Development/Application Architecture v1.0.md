# Application Architecture v1.0

> Arquitectura general de Lupinos 2.0.
>
> Este documento define la organización de la aplicación, la relación entre sus dominios y los principios arquitectónicos que deberán respetarse durante todo el desarrollo.

---

# Objetivo

Construir una arquitectura limpia, modular y escalable.

Cada parte del proyecto debe tener una única responsabilidad y una ubicación clara dentro del código.

La arquitectura debe facilitar el crecimiento del producto sin incrementar la deuda técnica.

---

# Filosofía

Lupinos no se organiza por páginas.

Se organiza por dominios.

Cada dominio representa una responsabilidad del negocio.

Los componentes, datos y lógica pertenecen siempre a un dominio claramente identificado.

---

# Principios

## Single Responsibility

Cada módulo debe tener una única responsabilidad.

Ejemplos:

- Product gestiona productos.
- Mi Mesa gestiona la selección.
- Layout organiza la navegación.
- UI construye componentes reutilizables.

---

## Separación de responsabilidades

Se distinguen claramente:

- presentación;
- lógica;
- datos;
- estado;
- utilidades.

Nunca deben mezclarse.

---

## Componentes pequeños

Un componente debe resolver un único problema.

Si comienza a tener múltiples responsabilidades, debe dividirse.

---

## Reutilización

Antes de crear un nuevo componente debe evaluarse si uno existente puede ampliarse.

La duplicación de código debe evitarse.

---

# Arquitectura General

```text
App Router

│

├── Layout

├── Landing

├── Products

├── Mi Mesa

└── Shared UI
```

Cada dominio puede evolucionar de forma independiente.

---

# Organización del proyecto

```text
app/

components/

data/

hooks/

store/

types/

utils/

services/

public/
```

Cada carpeta posee una responsabilidad específica.

---

# App

Responsable de:

- rutas;
- layouts;
- metadata;
- páginas.

Nunca debe contener lógica de negocio.

---

# Components

Los componentes se organizan por dominio.

```text
components/

layout/

landing/

products/

mesa/

shared/

ui/
```

---

## layout

Elementos persistentes.

Ejemplos:

- Navbar
- Footer
- Header
- Mobile Navigation

---

## landing

Secciones exclusivas de la Landing.

Ejemplos:

- Hero
- Story
- Process
- Collections
- Reviews

---

## products

Todo el dominio Product.

Ejemplos:

- ProductCard
- ProductGrid
- ProductPrice
- ProductBadge
- ProductImage

---

## mesa

Todo el dominio Mi Mesa.

Ejemplos:

- MesaDrawer
- MesaSummary
- MesaItem
- EmptyMesa

---

## ui

Componentes completamente reutilizables.

Ejemplos:

- Button
- Card
- Badge
- Container
- Divider
- Typography

No contienen lógica del negocio.

---

## shared

Componentes compartidos entre dominios.

Ejemplos:

- WhatsAppButton
- FadeIn
- LazyImage

---

# Data

Contiene únicamente datos.

Nunca componentes.

Ejemplos:

```text
products.ts

collections.ts

categories.ts

navigation.ts
```

---

# Types

Define los contratos de toda la aplicación.

Ejemplos:

```text
product.ts

collection.ts

mesa.ts

navigation.ts
```

---

# Hooks

Encapsulan comportamiento reutilizable.

Ejemplos:

```text
useNavbarVisibility()

useScrollSpy()

useBreakpoint()
```

No contienen presentación.

---

# Store

Responsable del estado global.

Versión inicial:

```text
Mi Mesa
```

Versión futura:

- favoritos;
- promociones;
- usuario.

---

# Services

Encapsulan integraciones externas.

Ejemplos:

```text
whatsapp.ts

analytics.ts

seo.ts
```

Los componentes nunca consumen APIs directamente.

---

# Utils

Funciones puras.

Ejemplos:

```text
cn()

formatPrice()

slugify()

groupProducts()
```

No conocen React.

---

# Flujo de datos

```text
Data

↓

Components

↓

User Action

↓

Store

↓

Services

↓

External World
```

La dirección del flujo siempre debe ser clara y predecible.

---

# Dependencias permitidas

```text
Components

↓

Hooks

↓

Store

↓

Services

↓

Utils
```

Los dominios nunca deben depender entre sí de forma circular.

---

# Dependencias prohibidas

Un componente de UI nunca debe:

- conocer Product;
- conocer Mi Mesa;
- importar datos.

UI permanece completamente desacoplada.

---

# Estado global

Sólo debe utilizarse cuando el dato sea compartido por múltiples dominios.

Todo estado local debe permanecer dentro del componente.

---

# Convenciones

## Componentes

PascalCase

Ejemplo:

```text
ProductCard.tsx
```

---

## Hooks

camelCase

```text
useMesa()

useNavbarVisibility()
```

---

## Types

camelCase

```text
product.ts

mesa.ts
```

---

## Data

Plural.

```text
products.ts

collections.ts
```

---

# Escalabilidad

La arquitectura está preparada para incorporar:

- autenticación;
- CMS;
- blog;
- recetas;
- ecommerce;
- pagos;
- panel administrativo.

Sin reorganizar la estructura principal.

---

# Definition of Done

La arquitectura estará correctamente implementada cuando:

- cada archivo tenga una única responsabilidad;
- no existan dependencias circulares;
- los dominios estén desacoplados;
- la estructura sea consistente en todo el proyecto.

---

# Filosofía

Una buena arquitectura casi no se nota.

Hace que el código sea fácil de leer, sencillo de ampliar y agradable de mantener.

Cada carpeta tiene un propósito.

Cada componente tiene una responsabilidad.

Cada decisión acerca a Lupinos a convertirse en un producto digital sólido, elegante y preparado para crecer durante muchos años.