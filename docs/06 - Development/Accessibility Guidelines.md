# Accessibility Guidelines

**Version:** 1.0

**Status:** Active

**Last Updated:** 03/08/2026

---

# Objetivo

Definir los estándares de accesibilidad para Lupinos 2.0.

El objetivo es construir una experiencia digital que pueda ser utilizada por la mayor cantidad de personas posible, independientemente de sus capacidades, dispositivos o formas de interacción.

---

# Filosofía

La accesibilidad no es una característica adicional.

Es parte de la calidad del producto.

Una experiencia clara, simple y comprensible beneficia a todos los usuarios.

---

# Estándar objetivo

Lupinos 2.0 seguirá las recomendaciones:

- WCAG 2.2
- Nivel AA

Como objetivo general:

```text
Lighthouse Accessibility ≥ 95
```

---

# Principios fundamentales

La accesibilidad se basa en cuatro principios.

## Perceptible

La información debe poder percibirse mediante diferentes sentidos.

Ejemplos:

- textos alternativos;
- contraste correcto;
- estructura clara;
- contenido adaptable.

---

## Operable

La interfaz debe poder utilizarse mediante diferentes métodos de interacción.

Ejemplos:

- teclado;
- mouse;
- dispositivos táctiles;
- tecnologías asistivas.

---

## Comprensible

La experiencia debe ser clara y predecible.

Ejemplos:

- textos simples;
- navegación consistente;
- mensajes claros.

---

## Robusto

El producto debe funcionar correctamente con diferentes tecnologías.

Ejemplos:

- lectores de pantalla;
- navegadores;
- dispositivos.

---

# HTML Semántico

Siempre utilizar elementos HTML según su propósito.

Correcto:

```html
<header>
<nav>
<main>
<section>
<footer>
<button>
```

Evitar:

```html
<div onClick="">
```

cuando exista una alternativa semántica.

---

# Estructura de contenido

Cada página debe tener una jerarquía clara.

Reglas:

- un único `h1`;
- títulos ordenados;
- secciones correctamente identificadas;
- contenido agrupado lógicamente.

Ejemplo:

```text
H1
 |
 ├── H2
 │    └── H3
 |
 └── H2
```

---

# Tipografía

La tipografía debe favorecer la lectura.

Reglas:

- tamaños legibles;
- contraste suficiente;
- líneas de texto no excesivamente largas;
- evitar textos demasiado pequeños.

---

# Contraste

Los colores deben respetar los niveles mínimos WCAG.

Objetivos:

Texto normal:

```text
4.5:1
```

Texto grande:

```text
3:1
```

Los colores del Design System deben validarse antes de incorporarse.

---

# Botones e interacción

Todos los elementos interactivos deben ser accesibles.

Los botones deben:

- tener nombre claro;
- indicar su acción;
- mostrar estados visuales.

Estados obligatorios:

- default;
- hover;
- focus;
- active;
- disabled;
- loading.

---

# Focus

Nunca eliminar los indicadores de foco.

Incorrecto:

```css
outline:none;
```

sin reemplazo.

El usuario debe saber dónde está ubicado mediante teclado.

---

# Navegación por teclado

Toda funcionalidad debe poder utilizarse sin mouse.

Validar:

- menú;
- botones;
- enlaces;
- Mi Mesa;
- formularios.

Orden esperado:

```text
Tab
↓
Elemento siguiente
↓
Enter / Space
```

---

# Imágenes

Todas las imágenes deben tener un propósito claro.

Reglas:

## Imágenes decorativas

Utilizar:

```html
alt=""
```

---

## Imágenes informativas

Utilizar textos alternativos descriptivos.

Ejemplo:

```text
Raviolones artesanales de calabaza servidos con salsa cremosa.
```

Evitar:

```text
imagen1.jpg
foto pasta
```

---

# Next Image

Todas las imágenes del producto deberán utilizar:

```tsx
<Image />
```

Beneficios:

- optimización;
- tamaños adecuados;
- mejor rendimiento.

---

# Animaciones

Las animaciones deben respetar preferencias del usuario.

Utilizar:

```css
prefers-reduced-motion
```

Usuarios sensibles al movimiento deben poder reducir animaciones.

---

# Framer Motion

Las animaciones deben:

- ser suaves;
- tener propósito;
- evitar distracciones.

Evitar:

- movimiento constante;
- parallax excesivo;
- efectos innecesarios.

---

# Formularios

Aunque Lupinos no tendrá checkout tradicional inicialmente, cualquier formulario futuro debe cumplir:

- labels visibles;
- mensajes claros;
- errores descriptivos;
- estados de validación.

---

# Mi Mesa

El dominio Mi Mesa debe ser completamente accesible.

Validar:

## Agregar producto

Debe existir feedback claro.

Ejemplo:

"Raviolones agregados a Mi Mesa"

---

## Modificar cantidad

Los controles deben indicar:

- producto;
- acción;
- valor actual.

Ejemplo:

```text
Aumentar cantidad de raviolones
```

---

## Eliminar producto

Debe existir confirmación visual.

---

## Mesa vacía

Debe existir un estado informativo.

Nunca mostrar una pantalla sin contexto.

---

# WhatsApp

La integración debe mantener accesibilidad.

El botón debe:

- tener texto descriptivo;
- no depender únicamente de un icono;
- indicar claramente la acción.

Correcto:

```text
Enviar pedido por WhatsApp
```

Incorrecto:

```text
[icono]
```

---

# Iconos

Los iconos decorativos deben ocultarse para lectores de pantalla.

Ejemplo:

```html
aria-hidden="true"
```

Cuando un icono comunica una acción:

Debe acompañarse con texto o etiqueta accesible.

---

# Responsive

La accesibilidad también incluye diferentes dispositivos.

Validar:

- móvil;
- tablet;
- escritorio;
- pantallas pequeñas.

---

# Estados de interfaz

Toda interfaz debe contemplar:

## Loading

El usuario debe saber que algo está ocurriendo.

---

## Empty

El usuario debe entender qué hacer.

---

## Error

El usuario debe saber cómo continuar.

---

# Testing de accesibilidad

Antes de finalizar una funcionalidad verificar:

## Manual

- navegación con teclado;
- zoom 200%;
- contraste;
- lectura del contenido.

---

## Herramientas

Utilizar:

- Lighthouse;
- Axe DevTools;
- Chrome Accessibility Tree.

---

# Checklist

Antes de aprobar un componente:

## HTML

- Semántico.
- Estructura correcta.
- Sin elementos innecesarios.

---

## UI

- Focus visible.
- Contraste correcto.
- Estados completos.

---

## Imágenes

- Alt correcto.
- Optimización.
- Dimensiones definidas.

---

## Movimiento

- Animaciones justificadas.
- Reduced Motion soportado.

---

## Interacción

- Teclado funcional.
- Feedback claro.
- Labels correctos.

---

# Definition of Done

Una funcionalidad cumple accesibilidad cuando:

- puede utilizarse con teclado;
- tiene estructura semántica;
- mantiene contraste adecuado;
- funciona con tecnologías asistivas;
- respeta preferencias del usuario.

---

# Filosofía final

La verdadera calidad está en crear experiencias donde nadie tenga que luchar contra la interfaz.

Lupinos busca transmitir cuidado en cada detalle.

Ese cuidado también incluye la forma en que cada persona puede acceder, comprender y disfrutar la experiencia digital.