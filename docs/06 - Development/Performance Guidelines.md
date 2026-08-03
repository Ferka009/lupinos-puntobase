# Performance Guidelines

**Version:** 1.0

**Status:** Active

**Last Updated:** 03/08/2026

---

# Objetivo

Definir los criterios de rendimiento para Lupinos 2.0.

La velocidad forma parte de la experiencia del producto.

Una página rápida transmite profesionalismo, confianza y calidad.

---

# Filosofía

El usuario nunca debería esperar innecesariamente.

Cada recurso cargado debe justificar su existencia.

Cada kilobyte descargado debe aportar valor.

---

# Objetivos de rendimiento

Lupinos deberá cumplir, como objetivo, los siguientes indicadores:

| Métrica | Objetivo |
|---------|-----------:|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint (FCP) | < 1.8 s |
| Largest Contentful Paint (LCP) | < 2.5 s |
| Interaction to Next Paint (INP) | < 200 ms |
| Cumulative Layout Shift (CLS) | < 0.1 |

---

# Core Web Vitals

Los Core Web Vitals son indicadores prioritarios.

Se deberá prestar especial atención a:

- LCP
- INP
- CLS

Toda decisión de desarrollo deberá considerar su impacto.

---

# Imágenes

Las imágenes representan el recurso más pesado del proyecto.

Reglas obligatorias:

- utilizar `next/image`;
- definir dimensiones conocidas;
- evitar imágenes innecesariamente grandes;
- comprimir antes de subir;
- servir formatos modernos cuando sea posible.

---

# Tamaños recomendados

## Hero

- ancho: 1920 px
- formato: WebP
- peso recomendado: ≤ 350 KB

---

## ProductCard

- ancho: 800 px
- formato: WebP
- peso recomendado: ≤ 150 KB

---

## Miniaturas

- ancho: 400 px
- peso recomendado: ≤ 60 KB

---

# Lazy Loading

Todo contenido fuera del primer viewport deberá cargarse de forma diferida.

Ejemplos:

- imágenes de colecciones;
- galería;
- reseñas;
- contenido inferior de la landing.

---

# Priority Loading

Sólo deben cargarse con prioridad:

- imagen principal del Hero;
- logotipo;
- recursos críticos del primer viewport.

No utilizar `priority` de forma indiscriminada.

---

# Tipografías

Las fuentes deben cargarse mediante `next/font`.

No se permiten fuentes externas cargadas mediante `<link>`.

Utilizar únicamente las variantes realmente necesarias.

---

# JavaScript

Cada componente debe enviar la menor cantidad posible de JavaScript al navegador.

Priorizar:

- Server Components;
- Client Components sólo cuando sean necesarios.

---

# Client Components

Se utilizarán únicamente cuando exista:

- estado;
- eventos;
- animaciones;
- acceso al navegador.

Todo lo demás permanecerá como Server Component.

---

# Bundle Size

Evitar dependencias innecesarias.

Antes de instalar una librería evaluar:

- tamaño;
- mantenimiento;
- necesidad real.

---

# Imports

Importar únicamente lo necesario.

Evitar imports globales cuando sea posible.

---

# Framer Motion

Utilizar animaciones únicamente donde aporten valor.

Evitar:

- animaciones infinitas;
- múltiples animaciones simultáneas;
- movimientos excesivos.

Las transiciones deben reforzar la experiencia, no distraer.

---

# Renderizado

Evitar renders innecesarios.

Buenas prácticas:

- props estables;
- componentes pequeños;
- estado localizado;
- memoización sólo cuando exista un beneficio real.

---

# Estado

El estado global debe mantenerse lo más pequeño posible.

Sólo utilizar estado compartido para información realmente compartida.

---

# Mi Mesa

El estado de Mi Mesa deberá actualizar únicamente los componentes afectados.

No debe provocar renderizados completos de la aplicación.

---

# Datos

Centralizar la información en `data/`.

Evitar duplicación.

Evitar cálculos repetidos.

---

# CSS

Priorizar:

- tokens;
- utilidades de Tailwind;
- componentes reutilizables.

Evitar estilos duplicados.

---

# Animaciones

Las animaciones deben cumplir:

- duración inferior a 400 ms;
- easing consistente;
- posibilidad de respetar `prefers-reduced-motion`.

---

# Scroll

El desplazamiento debe sentirse fluido.

Evitar:

- saltos;
- bloqueos;
- reflows innecesarios.

---

# Reflow

Evitar cambios de layout durante la carga.

Toda imagen debe reservar su espacio antes de renderizarse.

---

# Skeleton Loading

Cuando una carga supere aproximadamente los 300 ms, considerar mostrar un estado de carga apropiado.

El skeleton debe representar la estructura del contenido real.

---

# Navegación

Las transiciones entre páginas deben aprovechar las capacidades del App Router.

Evitar recargas completas siempre que sea posible.

---

# Caché

Aprovechar las estrategias de caché de Next.js para recursos estáticos.

Evitar solicitudes repetidas cuando los datos no cambian.

---

# Lighthouse

Antes de un despliegue importante verificar:

- Performance
- Accessibility
- Best Practices
- SEO

Los resultados deberán registrarse cuando se trate de una versión relevante.

---

# Checklist

Antes de cerrar una funcionalidad verificar:

## Imágenes

- Tamaño correcto.
- Peso optimizado.
- `next/image`.
- Dimensiones definidas.

---

## Componentes

- Sin renders innecesarios.
- Client Components sólo cuando sean necesarios.
- Props simples.

---

## Código

- Sin dependencias innecesarias.
- Sin imports muertos.
- Sin código duplicado.

---

## UX

- Scroll fluido.
- Animaciones suaves.
- Sin bloqueos perceptibles.

---

# Definition of Done

Una funcionalidad cumple los criterios de rendimiento cuando:

- mantiene los objetivos de Lighthouse;
- no incrementa innecesariamente el bundle;
- no introduce bloqueos visibles;
- mantiene tiempos de respuesta consistentes.

---

# Filosofía final

La velocidad no es un lujo.

Es una demostración silenciosa del cuidado puesto en cada detalle.

Así como una buena pasta se sirve en su punto justo, una buena experiencia digital debe sentirse inmediata, ligera y natural desde el primer instante.