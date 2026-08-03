# Sprint 3 - Foundation Implementation

**Version:** 1.0

**Status:** Planned

**Last Updated:** 03/08/2026

---

# Sprint 3 - Foundation Implementation

## Estado

✅ Completado

---

## Objetivo

Construir una base técnica y visual sólida para Lupinos 2.0,
estableciendo Design Tokens, componentes UI reutilizables y
una arquitectura preparada para Product Domain.

---

## Implementado

### Design System

- Tokens de color consolidados.
- Tipografías definidas:
  - Cormorant Garamond para títulos.
  - Poppins para contenido.
- Tokens de spacing.
- Tokens de radius.
- Tokens de sombras.
- Tokens de motion.
- Soporte prefers-reduced-motion.

---

### UI Components

Completados:

- Button
  - Variantes primary, secondary, ghost y outline.
  - Soporte Link y Button.
  - Integración con tokens.

- Card
  - Componente base reutilizable.

- Badge
  - Sistema de variantes visuales.

- Container
  - Sistema centralizado de layout.

- SectionTitle
  - Componente editorial único.
  - Eliminación progresiva de duplicación.

---

### Utilities

Implementado:

- utils/cn.ts
- clsx
- tailwind-merge

---

## Validación

Comandos ejecutados:

✅ npm run lint

✅ npm run build


Resultado:

Proyecto preparado para continuar con Product Domain.

---

# Objetivo

Implementar la base técnica de Lupinos 2.0.

Este sprint transforma las decisiones documentadas en una arquitectura real de código.

El objetivo no es crear nuevas funcionalidades de negocio.

El objetivo es preparar una base sólida, escalable y consistente para los siguientes dominios:

- Product Domain.
- Mi Mesa.
- Nuevas páginas.
- Sistema de componentes.

---

# Filosofía del Sprint

Durante este sprint:

- No se reconstruye toda la landing.
- No se implementa Mi Mesa.
- No se crean rutas comerciales.
- No se modifican funcionalidades existentes sin necesidad.

La prioridad es reducir deuda técnica y preparar el terreno.

---

# Estado inicial

Actualmente Lupinos cuenta con:

- Next.js App Router.
- React 19.
- TypeScript.
- Tailwind CSS v4.
- Framer Motion.
- Componentes iniciales reutilizables.

Pero todavía existen:

- estilos duplicados;
- componentes históricos;
- datos mezclados con presentación;
- falta de tokens completos;
- arquitectura parcial.

---

# Objetivos principales

## 1. Consolidar Design System

Implementar una única fuente visual.

Incluye:

- colores;
- tipografías;
- spacing;
- radius;
- sombras;
- motion.

---

## 2. Crear UI Foundation

Construir componentes reutilizables.

Componentes objetivo:

```
components/ui/

Button.tsx

Card.tsx

Badge.tsx

Container.tsx

SectionTitle.tsx

SectionDivider.tsx
```

---

## 3. Ordenar arquitectura

Preparar estructura futura:

```
components/

├── ui/
├── layout/
├── landing/
├── products/
├── mesa/
└── shared/
```

---

## 4. Separar responsabilidades

Regla principal:

Los componentes visuales no deben contener datos de negocio.

Ejemplo:

Incorrecto:

```
ProductCard.tsx

productos =
[
...
]
```

Correcto:

```
data/products.ts

↓

ProductCard.tsx
```

---

# Alcance

## Incluido

- globals.css.
- tokens.
- componentes UI.
- estructura de carpetas.
- utilidades.
- tipos base.
- limpieza inicial.

---

## Fuera de alcance

No modificar:

- Mi Mesa.
- Zustand.
- Product Domain completo.
- Nuevas rutas.
- Checkout.
- WhatsApp final.

---

# Tareas

---

# 1. Design Tokens

## Objetivo

Centralizar la identidad visual.

Crear tokens para:

## Colores

Ejemplo:

```css
--color-crema

--color-oliva

--color-bordo

--color-dorado

--color-madera
```

---

## Tipografía

Mantener:

- Cormorant Garamond.
- Poppins.

Definir usos:

Título:

```
Cormorant
```

Texto:

```
Poppins
```

---

## Espaciado

Crear escala consistente.

Ejemplo:

```
xs
sm
md
lg
xl
2xl
```

---

## Radius

Centralizar:

- botones;
- tarjetas;
- imágenes.

---

## Motion

Definir:

- duración;
- easing;
- transiciones.

---

# 2. Button System

## Objetivo

Un único sistema de botones.

Eliminar duplicación.

Variantes:

```
primary

secondary

outline

ghost
```

Debe soportar:

- enlaces;
- acciones;
- estados disabled.

---

# 3. Card Component

Crear componente base.

Responsabilidades:

- estructura visual;
- padding;
- borde;
- sombra;
- radius.

No debe conocer productos.

Ejemplo:

```
<Card>

contenido

</Card>
```

---

# 4. Badge Component

Crear sistema para etiquetas.

Uso futuro:

- Nuevo.
- Destacado.
- Temporada.
- Artesanal.

---

# 5. Container

Revisar:

- ancho máximo;
- padding responsive;
- consistencia entre secciones.

---

# 6. SectionTitle

Crear API única.

Debe soportar:

```tsx
<SectionTitle

eyebrow="Especialidades"

title="Pastas hechas para compartir"

description="..."

/>
```

Eliminar duplicaciones futuras.

---

# 7. Utils

Mantener:

```
utils/

cn.ts
```

Preparado para composición de clases.

---

# 8. Types Base

Preparar estructura:

```
types/

product.ts

collection.ts

mesa.ts
```

Aunque algunos se completen en siguientes sprints.

---

# Migración progresiva

Durante este sprint:

No eliminar componentes antiguos inmediatamente.

Proceso:

```
Crear reemplazo

↓

Migrar uso

↓

Validar

↓

Eliminar antiguo
```

---

# Archivos existentes protegidos

Evitar modificaciones innecesarias en:

```
app/layout.tsx

app/page.tsx

Hero.tsx

Navbar.tsx

StorySection.tsx
```

---

# Validaciones

Antes de cerrar Sprint:

Ejecutar:

```bash
npm run lint
```

Debe pasar.

---

Ejecutar:

```bash
npx tsc --noEmit
```

Debe pasar.

---

Ejecutar:

```bash
npm run build
```

Debe pasar.

---

# Revisión visual

Validar:

- no cambios inesperados;
- colores correctos;
- responsive;
- navegación.

---

# Definition of Done

Sprint 3 está terminado cuando:

- existe un Design System funcional;
- Button está centralizado;
- Card y Badge existen;
- tokens están definidos;
- arquitectura preparada;
- TypeScript funciona;
- build exitoso.

---

# Resultado esperado

Al finalizar Sprint 3, Lupinos tendrá una base profesional para continuar desarrollando:

```
Foundation

↓

Product Domain

↓

Mi Mesa

↓

WhatsApp

↓

Producción
```

---

# Filosofía final

La calidad de una experiencia premium comienza antes de diseñar una pantalla.

Comienza con una base sólida.

Este sprint construye los cimientos de Lupinos 2.0.