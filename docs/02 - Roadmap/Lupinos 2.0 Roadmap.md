# Lupinos 2.0 Roadmap

> **Visión:** Crear la experiencia digital de una fábrica de pastas artesanales premium, donde cada detalle transmita tradición, calidad, cercanía y el placer de compartir una buena comida.

---

# Estado del Proyecto

**Estado actual:** 🟡 En desarrollo

## Stack Tecnológico

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- Lucide React

---

# Estrategia de Desarrollo

Lupinos 2.0 sigue una estrategia **Domain First**.

Esto significa que primero se construyen los dominios del negocio (Productos, Mi Mesa, Colecciones, etc.) y posteriormente las interfaces que los utilizan.

Los milestones representan la evolución del producto desde la perspectiva del usuario.

La implementación técnica puede seguir un orden diferente cuando la arquitectura lo requiera.

---

# Orden Técnico de Implementación

La implementación recomendada es:

- ✅ Foundation
- 🔜 Product Domain
- 🔜 Mi Mesa
- 🔜 Landing Premium
- 🔜 Pedido por WhatsApp
- 🔜 Experiencia Premium
- 🔜 Optimización
- 🔜 Lanzamiento

Este orden prioriza construir primero la base del producto y luego la experiencia visual.

---

# Milestone 1 — Foundation

## Objetivo

Construir una base técnica sólida que permita desarrollar el resto del proyecto sin deuda técnica.

### Sprint 1.1 — Design System

- [x] Revisar `globals.css`
- [x] Revisar Design Tokens
- [x] Revisar tipografías
- [x] Revisar colores
- [x] Revisar espaciado

### Sprint 1.2 — UI Components

- [x] Unificar `Button`
- [ ] Revisar `Container`
- [ ] Consolidar `SectionTitle`
- [ ] Revisar `SectionDivider`
- [ ] Crear componente `Card`
- [ ] Crear componente `Badge`

### Sprint 1.3 — Arquitectura

- [x] Crear `data/`
- [x] Crear `types/`
- [x] Crear `hooks/`
- [x] Crear `utils/`
- [ ] Reorganizar `components/` por dominios
- [ ] Eliminar componentes duplicados

### Resultado esperado

Una arquitectura limpia, escalable y preparada para crecer.

---

# Milestone 2 — Product Domain

## Objetivo

Construir el corazón de Lupinos 2.0.

Todo el resto del proyecto dependerá de este dominio.

### Modelo de Producto

- [ ] Crear `Product`
- [ ] Crear `Collection`
- [ ] Crear `ProductVariant`
- [ ] Crear `MesaItem`

### Data

- [ ] Centralizar productos
- [ ] Centralizar colecciones
- [ ] Centralizar categorías

### Componentes

- [ ] ProductCard
- [ ] ProductImage
- [ ] ProductInfo
- [ ] ProductPrice
- [ ] ProductBadge
- [ ] AddToMesaButton

### Navegación

- [ ] `/carta`
- [ ] `/colecciones/[slug]`

### Resultado esperado

Sistema de productos completamente desacoplado de la interfaz.

---

# Milestone 3 — Mi Mesa

## Objetivo

Crear una experiencia de compra diferente al carrito tradicional.

### Estado Global

- [ ] Instalar Zustand
- [ ] Crear Store

### Componentes

- [ ] MesaDrawer
- [ ] MesaSummary
- [ ] MesaItem
- [ ] MesaFooter

### Funcionalidades

- [ ] Agregar productos
- [ ] Eliminar productos
- [ ] Cambiar cantidades
- [ ] Agregar notas
- [ ] Persistencia local

### Resultado esperado

El usuario siente que está preparando una mesa para compartir.

---

# Milestone 4 — Landing Premium

## Objetivo

Construir una landing que transmita el valor del producto antes de venderlo.

### Hero

- [ ] Nuevo Hero
- [ ] Storytelling
- [ ] CTA principal

### Colecciones

- [ ] Mostrar colecciones destacadas
- [ ] Destacar productos

### Proceso

- [ ] Ingredientes
- [ ] Elaboración artesanal

### Historia

- [ ] Brand Story
- [ ] Filosofía
- [ ] Método Lupinos

### Experiencia

- [ ] Explicación de Mi Mesa

### CTA Final

- [ ] Invitación a crear la mesa

### Resultado esperado

Una landing emocional, elegante y centrada en el producto.

---

# Milestone 5 — Pedido por WhatsApp

## Objetivo

Convertir Mi Mesa en un pedido listo para enviar.

### Desarrollo

- [ ] Generar resumen
- [ ] Datos del cliente
- [ ] Mensaje automático
- [ ] Botón de envío

### Resultado esperado

Pedido claro, rápido y sin fricción.

---

# Milestone 6 — Experiencia Premium

## Objetivo

Agregar el nivel de detalle que diferencia una buena web de una gran experiencia.

### Motion

- [ ] Microinteracciones
- [ ] Hover States
- [ ] Scroll Animations
- [ ] Loading States
- [ ] Skeletons
- [ ] Empty States

### Accesibilidad

- [ ] prefers-reduced-motion
- [ ] Focus States
- [ ] Navegación por teclado

### Resultado esperado

Una experiencia elegante, fluida y accesible.

---

# Milestone 7 — Optimización

## Objetivo

Preparar Lupinos para producción.

### Desarrollo

- [ ] SEO
- [ ] Open Graph
- [ ] Sitemap
- [ ] Robots
- [ ] Optimización de imágenes
- [ ] Lighthouse
- [ ] Core Web Vitals

### Resultado esperado

Excelente rendimiento y posicionamiento.

---

# Milestone 8 — Lanzamiento

## Objetivo

Publicar Lupinos 2.0.

### Desarrollo

- [ ] Deploy
- [ ] Dominio
- [ ] Analytics
- [ ] QA Final
- [ ] Testing multidispositivo

### Resultado esperado

Primera versión oficial publicada.

---

# Backlog

## Producto

- [ ] Favoritos
- [ ] Packs familiares
- [ ] Productos de temporada
- [ ] Recomendaciones

## Experiencia

- [ ] Storytelling interactivo
- [ ] Transiciones entre páginas
- [ ] Animaciones avanzadas

## Comercial

- [ ] Gift Cards
- [ ] Programa de fidelización
- [ ] Newsletter

---

# Definición de "Hecho"

Una tarea se considera terminada únicamente cuando:

- Funciona correctamente.
- Es responsive.
- Respeta el Design System.
- Respeta la filosofía de Lupinos.
- No introduce deuda técnica.
- `npm run lint` finaliza sin errores.
- `tsc --noEmit` finaliza sin errores.
- `npm run build` finaliza correctamente.
- Se actualiza `CHANGELOG.md`.
- Se actualiza este Roadmap cuando corresponde.
- Está lista para producción.

---

# Fuente de Verdad

En caso de contradicción entre documentos, el orden de prioridad es:

1. Product
2. UX
3. Design System
4. Development
5. Roadmap

El Roadmap organiza el trabajo.

No redefine el producto.

---

# Filosofía

Lupinos 2.0 no es solamente una página web.

Es un producto digital diseñado para transmitir el mismo cuidado, dedicación y orgullo con el que se elaboran las pastas.

Cada decisión de diseño, desarrollo y experiencia debe reforzar esa identidad.

No buscamos desarrollar más rápido.

Buscamos construir mejor.