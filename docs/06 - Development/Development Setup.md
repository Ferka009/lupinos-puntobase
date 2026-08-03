# Development Setup — Lupinos 2.0 v1.0

## Introducción

Development Setup define la configuración técnica base utilizada para desarrollar Lupinos 2.0.

El objetivo es trabajar con una base moderna, profesional y escalable.

La tecnología debe permitir construir una experiencia digital gastronómica premium manteniendo:

- rendimiento
- calidad visual
- facilidad de mantenimiento
- escalabilidad

---

# 01 — Stack Tecnológico

## Framework

### Next.js

Versión:

Next.js App Router


Responsabilidades:

- estructura de aplicación
- routing
- renderizado optimizado
- SEO
- performance


---

## Lenguaje

### TypeScript


Objetivos:

- seguridad de tipos
- mejor mantenimiento
- menor cantidad de errores
- código más predecible


---

## Estilos

### Tailwind CSS v4


Responsabilidades:

- sistema visual
- responsive design
- integración con Design Tokens


Los estilos deben utilizar:

- tokens
- clases reutilizables
- componentes


---

# 02 — Fuentes

Sistema tipográfico Lupinos:


## Display

Cormorant Garamond

Uso:

- títulos
- storytelling
- hero
- secciones emocionales


## Body

Inter

Uso:

- textos
- botones
- navegación
- información de producto


---

# 03 — Librerías Principales


## Iconos

Lucide React


Uso:

- iconografía consistente
- elementos de interfaz


---

## Animaciones

Framer Motion


Uso:

- aparición de elementos
- microinteracciones
- transiciones suaves


---

## Estado Global

Zustand


Uso principal:

Mi Mesa.


Responsabilidades:

- productos seleccionados
- cantidades
- notas del pedido


---

# 04 — Arquitectura Next.js

Utilizar:

App Router.


Estructura:

```text
app/

├── layout.tsx

├── page.tsx

├── carta/

└── colecciones/
```

---

# 05 — Configuración Visual

El sistema visual vive en:

```text
app/globals.css
```

Incluye:

- colores
- tipografías
- tokens
- estilos globales


---

# 06 — Variables del Sistema

Los valores importantes deben estar centralizados.

Ejemplo:

```css
--lupinos-cream

--lupinos-olive

--lupinos-gold

--lupinos-cacao
```

---

# 07 — Desarrollo Local

Instalación:

```bash
npm install
```

---

Ejecutar proyecto:

```bash
npm run dev
```

---

Build producción:

```bash
npm run build
```

---

Inicio producción:

```bash
npm start
```

---

# 08 — Control de Versiones

Usar Git.


Los commits deben ser claros:

Ejemplo:

```text
feat: create ProductCard

fix: improve mobile layout

style: update design tokens
```

---

# 09 — Calidad Antes de Integrar

Antes de finalizar cambios verificar:

- TypeScript sin errores
- responsive correcto
- accesibilidad
- rendimiento
- consistencia visual


---

# 10 — Filosofía Técnica

El código debe acompañar la filosofía Lupinos:

Ordenado.

Simple.

Cuidado.

Escalable.

La experiencia digital debe sentirse tan artesanal como el producto físico.