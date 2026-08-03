# Testing Strategy

**Version:** 1.0

**Status:** Active

**Last Updated:** 03/08/2026

---

# Objetivo

Definir la estrategia de pruebas para Lupinos 2.0.

El objetivo no es únicamente detectar errores.

El objetivo es asegurar que cada funcionalidad preserve la experiencia premium definida para el producto.

Cada cambio debe validar:

- funcionamiento;
- consistencia visual;
- experiencia de usuario;
- rendimiento;
- accesibilidad.

---

# Filosofía

Una funcionalidad no está terminada cuando "anda".

Está terminada cuando:

- funciona correctamente;
- mantiene la identidad visual;
- respeta el Design System;
- ofrece una experiencia consistente;
- no rompe funcionalidades existentes.

---

# Pirámide de Testing

La estrategia se divide en cuatro niveles.

```text
Manual QA

↑

Integration Tests

↑

Component Tests

↑

Unit Tests
```

Cada nivel reduce el riesgo del siguiente.

---

# Nivel 1 — Unit Testing

Responsable de validar funciones puras.

Incluye:

- formatPrice()
- slugify()
- groupProducts()
- generateWhatsAppMessage()
- helpers
- utilidades

No incluye componentes React.

---

# Nivel 2 — Component Testing

Cada componente importante debe probarse de forma aislada.

Ejemplos:

- Button
- Card
- ProductCard
- ProductPrice
- ProductBadge
- Navbar
- MesaItem

Aspectos a validar:

- renderizado;
- props;
- estados;
- variantes;
- accesibilidad.

---

# Nivel 3 — Integration Testing

Valida la interacción entre componentes.

Ejemplos:

ProductCard

↓

Mi Mesa

↓

Drawer

↓

WhatsApp

Se comprueba que el flujo completo funcione correctamente.

---

# Nivel 4 — Manual QA

Antes de cerrar un sprint se realiza una revisión manual completa.

Este paso es obligatorio.

---

# Flujos críticos

Los siguientes recorridos deben validarse en cada versión.

---

## Landing

Verificar:

- navegación;
- Hero;
- CTAs;
- Story;
- Contacto.

---

## Carta

Verificar:

- carga;
- filtros;
- colecciones;
- ProductCard.

---

## Mi Mesa

Verificar:

- agregar;
- eliminar;
- modificar cantidades;
- notas;
- subtotal;
- estado vacío.

---

## WhatsApp

Verificar:

- generación del mensaje;
- formato;
- apertura;
- caracteres especiales;
- productos con notas.

---

# Responsive

Toda nueva funcionalidad debe probarse en:

- móvil;
- tablet;
- escritorio.

No se aceptan componentes exclusivos para desktop.

---

# Navegadores

Compatibilidad mínima:

- Chrome
- Edge
- Safari
- Firefox

---

# Accesibilidad

Cada sprint debe validar:

- navegación por teclado;
- focus visible;
- contraste;
- lectores de pantalla;
- orden lógico del contenido.

---

# Performance

Cada cambio importante debe comprobar:

- imágenes optimizadas;
- ausencia de renders innecesarios;
- Lazy Loading;
- Lighthouse.

---

# Visual Regression

Antes de aprobar un cambio visual revisar:

- espaciados;
- colores;
- tipografía;
- sombras;
- radios;
- animaciones.

Ningún componente debe romper el Design System.

---

# Checklist por Pull Request

Antes de integrar cualquier cambio:

## Código

- Sin errores de TypeScript.
- Sin errores de ESLint.
- Sin código comentado.
- Sin console.log.

---

## Componentes

- Props tipadas.
- Responsabilidad única.
- Sin duplicación.
- Responsive.

---

## UX

- Flujo completo probado.
- Estados loading.
- Estados empty.
- Estados error.
- Estados hover.
- Estados focus.

---

## Mi Mesa

- Agregar producto.
- Incrementar cantidad.
- Disminuir cantidad.
- Eliminar producto.
- Editar nota.
- Vaciar mesa.

---

## WhatsApp

- Mensaje correcto.
- URL válida.
- Emojis correctos.
- Codificación correcta.
- Apertura exitosa.

---

# Casos límite

Siempre deben probarse:

- Mi Mesa vacía.
- Producto sin imagen.
- Precio cero.
- Producto deshabilitado.
- Nota muy larga.
- Productos duplicados.
- Catálogo vacío.
- Conexión lenta.

---

# Automatización futura

La arquitectura permitirá incorporar:

- Vitest.
- React Testing Library.
- Playwright.
- GitHub Actions.
- CI/CD.

Sin modificar la estrategia general.

---

# Métricas

El objetivo del proyecto es mantener:

- 0 errores de TypeScript.
- 0 errores de ESLint.
- 100% de flujos críticos validados manualmente.
- Lighthouse superior a 95.
- Sin regresiones visuales.

---

# Definition of Done

Una funcionalidad se considera completamente probada cuando:

- supera las pruebas unitarias;
- supera las pruebas de integración;
- supera la revisión visual;
- supera la revisión responsive;
- supera la revisión manual.

---

# Filosofía final

Cada prueba representa un compromiso con la calidad.

No probamos únicamente para encontrar errores.

Probamos para asegurar que cada nueva versión de Lupinos transmita la misma sensación de cuidado, calidez y excelencia que caracteriza a la marca.