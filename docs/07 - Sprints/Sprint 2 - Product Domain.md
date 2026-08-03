# Sprint 2 — Product Domain v1.0

## Estado

Completado.

## Decisiones tomadas

- Product utiliza ProductVariant para representar formatos comerciales.
- Los precios viven dentro de variants.
- Product referencia categorías y colecciones mediante IDs.
- Mi Mesa queda preparada mediante AddToMesaButton sin store todavía.
- Los componentes interactivos fueron aislados como Client Components.

----


> **Milestone:** Sistema de Productos  
> **Estado:** 🟡 Pendiente de implementación  
> **Prioridad:** Alta

---

# Objetivo del Sprint

Implementar el **Product Domain** de Lupinos 2.0.

Este sprint reemplaza la estructura de datos heredada de Lupinos 1.0 por un dominio de productos unificado, tipado y escalable.

Al finalizar el sprint, toda la información de productos deberá provenir de una única fuente de verdad.

---

# Alcance

## Incluido

- Modelo `Product`
- Modelo `Collection`
- Modelo `MesaItem`
- Datos centralizados
- Componentes base del dominio Product
- Migración progresiva desde Lupinos 1.0
- Preparación para Mi Mesa

## No incluido

- Zustand
- Mi Mesa
- WhatsApp
- Nueva Landing
- Filtros
- Buscador
- Checkout

---

# Documentación obligatoria

Antes de comenzar cualquier implementación deben revisarse:

- AGENTS.md
- README.md
- Lupinos 2.0 Roadmap.md
- Product Domain Specification v1.0.md
- Product Data Model v1.0.md
- Component Architecture.md
- Coding Standards.md
- Folder Structure.md

Estos documentos constituyen la fuente oficial de arquitectura del proyecto.

---

# Plan de Implementación

## Fase 1 — Tipos

### Crear

```text
types/

product.ts
collection.ts
mesa.ts
```

### Objetivo

Crear el contrato de datos que utilizará toda la aplicación.

### Criterios

- Sin duplicación.
- TypeScript estricto.
- Basado en Product Data Model.

### Resultado esperado

Todo componente debe importar estos tipos.

---

## Fase 2 — Datos

### Crear

```text
data/

products.ts
categories.ts
collections.ts
```

### Objetivo

Centralizar toda la información de productos.

### Migrar información desde

```text
components/menu/menuData.ts

components/pricing/priceData.ts

components/specialties/specialtiesData.ts
```

### Reglas

No duplicar información.

Cada producto vendible debe representarse mediante una única entidad `Product`.

El precio siempre será numérico.

---

## Fase 3 — Componentes Product

### Crear

```text
components/products/

ProductCard.tsx

ProductGrid.tsx

ProductImage.tsx

ProductInfo.tsx

ProductPrice.tsx

ProductBadge.tsx

AddToMesaButton.tsx
```

### Reglas

Los componentes:

- no contienen datos;
- no contienen lógica de negocio;
- utilizan props;
- respetan Design System;
- utilizan tokens del sistema.

---

## Fase 4 — Migración

Reemplazar progresivamente:

```text
MenuCard

↓

ProductCard
```

```text
SpecialtyCard

↓

ProductCard
```

Migrar las secciones actuales para consumir el nuevo dominio sin modificar la experiencia visual.

No eliminar componentes antiguos hasta que exista un reemplazo funcional.

---

## Fase 5 — Preparación para Mi Mesa

Crear únicamente la interfaz necesaria.

`AddToMesaButton` debe existir como componente visual.

No implementar:

- Zustand
- Store
- Persistencia
- Cantidades
- Drawer

Todo eso pertenece al Sprint 3.

---

# Archivos nuevos esperados

```text
types/

product.ts
collection.ts
mesa.ts


data/

products.ts
collections.ts
categories.ts


components/products/

ProductCard.tsx
ProductGrid.tsx
ProductImage.tsx
ProductInfo.tsx
ProductPrice.tsx
ProductBadge.tsx
AddToMesaButton.tsx
```

---

# Archivos que deberán modificarse

```text
MenuSection.tsx

SpecialtiesSection.tsx

PriceSection.tsx
```

Sólo para consumir el nuevo dominio.

---

# Archivos que NO deben modificarse

```text
app/layout.tsx

app/globals.css

Hero.tsx

Navbar.tsx

StorySection.tsx
```

La reconstrucción visual corresponde a otros sprints.

---

# Restricciones

Durante este sprint queda prohibido:

- crear nuevos colores hardcodeados;
- duplicar datos;
- crear lógica de negocio en componentes UI;
- modificar el diseño general de la landing;
- implementar Zustand;
- eliminar componentes sin reemplazo.

---

# Validación técnica

Antes de finalizar deben ejecutarse:

```bash
npm run lint
```

```bash
npx tsc --noEmit
```

```bash
npm run build
```

Todos deben finalizar sin errores.

---

# Definición de Terminado (Definition of Done)

El Sprint 2 se considera completado cuando:

- Existe un único modelo `Product`.
- Existe un único catálogo de productos.
- Los datos están centralizados.
- Los componentes Product son reutilizables.
- La landing continúa funcionando.
- No se rompe el diseño existente.
- No existen errores de TypeScript.
- No existen errores de ESLint.
- El proyecto compila correctamente.

---

# Entregables

Al finalizar el sprint deberá entregarse:

## Código

- Nuevos tipos.
- Nuevos datos.
- Nuevos componentes.

## Migración

Resumen de archivos modificados.

## Calidad

Resultado de:

- ESLint
- TypeScript
- Build

## Documentación

Actualizar `CHANGELOG.md` con todos los cambios realizados.

---

# Filosofía del Sprint

Este sprint no busca crear nuevas pantallas.

Busca construir la base sobre la cual crecerá Lupinos 2.0.

Al finalizar, el proyecto dejará de depender de estructuras heredadas de Lupinos 1.0 y pasará a organizarse alrededor de un único dominio de productos, preparado para impulsar la Carta Digital, Mi Mesa, las Colecciones y el flujo de pedido por WhatsApp.

ProductVariant será el contrato encargado de representar formatos comerciales del producto (peso, presentación y precio). Product no tendrá precio directo; los valores comerciales vivirán dentro de sus variantes.