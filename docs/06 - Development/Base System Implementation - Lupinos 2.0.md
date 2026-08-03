# Base System Implementation — Lupinos 2.0 v1.0

## Introducción

El Sistema Base contiene la implementación inicial del Design System Lupinos dentro del código.

Es la primera capa técnica del proyecto.

Su responsabilidad es definir:

- Identidad visual.
- Variables globales.
- Tipografías.
- Colores.
- Espaciados.
- Reglas compartidas.

---

# Objetivo

Crear una base donde cualquier componente nuevo nazca automáticamente alineado con la identidad Lupinos.

---

# Arquitectura Base

```text
src/

├── app/

│   ├── globals.css

│   ├── layout.tsx

│   └── page.tsx


├── styles/

│   ├── tokens.css

│   └── fonts.css


└── tailwind.config.ts
```

---

# 01 — Configuración de fuentes

## Filosofía

Lupinos utiliza dos voces visuales:

### Serif

Para emoción y tradición.

Uso:

- Hero.
- Historias.
- Títulos.

---

### Inter

Para claridad moderna.

Uso:

- Texto.
- Botones.
- Información.

---

# Implementación conceptual

```tsx
layout.tsx
```

Responsabilidad:

Cargar fuentes globales.

---

Ejemplo:

```tsx
const inter = Inter()

const playfair = Playfair_Display()
```

---

# Variables tipográficas

```css
--font-display

--font-body
```

---

# 02 — Tokens globales

Archivo:

```
styles/tokens.css
```

---

Contiene:

```css
:root {

--color-cream:

--color-olive:

--color-gold:

--color-cacao:

}
```

---

# 03 — Color System

## Lupinos Cream

Uso:

Fondo principal.

Sensación:

Harina artesanal.

---

## Lupinos Olive

Uso:

Acciones principales.

Sensación:

Naturaleza y calidad.

---

## Lupinos Gold

Uso:

Detalles premium.

---

## Lupinos Cacao

Uso:

Texto profundo.

---

# 04 — Tailwind Configuration

Archivo:

```
tailwind.config.ts
```

---

Objetivo:

Convertir tokens en clases reutilizables.

Ejemplo:

```tsx
bg-lupinos-cream

text-lupinos-cacao

border-lupinos-gold
```

---

# 05 — Global CSS

Archivo:

```
globals.css
```

Responsabilidades:

- Reset.
- Variables.
- Estilos base.
- Fondo.
- Tipografía.

---

Debe definir:

```css
body {

font-family:
var(--font-body);

background:
var(--color-cream);

color:
var(--color-cacao);

}
```

---

# 06 — Reset visual

Eliminar inconsistencias del navegador.

Aplicar:

- Box sizing.
- Márgenes base.
- Imágenes responsive.
- Botones normalizados.

---

# 07 — Container System

Todos los componentes deben respetar un ancho común.

Ejemplo:

```tsx
<Container>
contenido
</Container>
```

---

Responsabilidad:

Mantener:

- Alineación.
- Ritmo visual.
- Espacios laterales.

---

# 08 — Layout Rules

## Desktop

Contenido centrado.

Mucho aire.

---

## Mobile

Prioridad:

- Lectura.
- Producto.
- Acción.

---

# 09 — Base Components Ready

Después del sistema base estarán disponibles:

```text
Button

Card

Badge

Container

SectionTitle
```

---

# 10 — Reglas de implementación

No hacer:

❌ Colores escritos manualmente.

❌ Tamaños arbitrarios.

❌ Fuentes repetidas.

❌ CSS duplicado.

---

Hacer:

✅ Usar tokens.

✅ Usar componentes.

✅ Mantener consistencia.

---

# Primer objetivo técnico

Al finalizar esta etapa debemos poder escribir:

```tsx
<section className="
bg-lupinos-cream
">

<h1 className="
font-display
text-lupinos-cacao
">

Lupinos

</h1>

</section>
```

Y que visualmente represente la marca.

---

# Definición final

El Sistema Base Lupinos es la primera capa donde la identidad artesanal deja de ser una idea y empieza a existir dentro del producto digital.