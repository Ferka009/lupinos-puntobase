# Quality Assurance Strategy v1.0

> Estrategia de aseguramiento de calidad para Lupinos 2.0.
>
> Este documento define los principios, procesos y criterios utilizados para garantizar que cada nueva funcionalidad mantenga el nivel de calidad esperado por el proyecto.

---

# Objetivo

Construir un producto confiable, consistente y preparado para evolucionar sin introducir regresiones.

La calidad no es una etapa final.

Es una responsabilidad presente durante todo el desarrollo.

---

# Filosofía

Cada cambio debe mejorar el producto.

Nunca simplemente "funcionar".

Una funcionalidad se considera terminada únicamente cuando:

- funciona correctamente;
- respeta el Design System;
- mantiene la experiencia de usuario;
- no degrada el rendimiento;
- conserva la accesibilidad.

---

# Principios

## Calidad desde el inicio

No desarrollar primero para corregir después.

Cada componente debe construirse siguiendo los estándares definidos.

---

## Prevención antes que corrección

Es más económico evitar errores que solucionarlos posteriormente.

La arquitectura, el tipado y la documentación forman parte del proceso de calidad.

---

## Consistencia

Todas las páginas deben sentirse parte del mismo producto.

Los mismos patrones deben repetirse en toda la aplicación.

---

## Simplicidad

Una solución sencilla suele ser más fácil de mantener, probar y evolucionar.

---

# Niveles de calidad

Toda funcionalidad debe superar cinco niveles antes de considerarse terminada.

## Nivel 1 — Calidad técnica

Debe:

- compilar correctamente;
- pasar TypeScript;
- pasar ESLint;
- no generar errores de consola.

---

## Nivel 2 — Calidad visual

Debe respetar:

- Design Tokens;
- tipografía;
- colores;
- espaciados;
- radios;
- sombras;
- animaciones.

No deben introducirse estilos aislados o inconsistentes.

---

## Nivel 3 — Calidad funcional

Cada flujo debe validarse manualmente.

Ejemplos:

- agregar productos;
- modificar cantidades;
- enviar por WhatsApp;
- navegación;
- responsive.

---

## Nivel 4 — Calidad de experiencia

La interfaz debe sentirse:

- clara;
- rápida;
- intuitiva;
- consistente.

No basta con que funcione.

Debe resultar agradable de utilizar.

---

## Nivel 5 — Calidad de producción

Antes del despliegue se verifican:

- rendimiento;
- SEO;
- accesibilidad;
- Core Web Vitals;
- Lighthouse.

---

# Definition of Ready

Una tarea puede comenzar únicamente cuando:

- existe documentación;
- los requisitos son claros;
- el diseño fue definido;
- la arquitectura está aprobada.

---

# Definition of Done

Una funcionalidad se considera finalizada únicamente cuando:

- funciona correctamente;
- no rompe funcionalidades existentes;
- respeta el Design System;
- mantiene la accesibilidad;
- supera la revisión manual;
- no introduce deuda técnica;
- está documentada.

---

# Checklist obligatorio

Antes de fusionar cualquier cambio:

## Código

- Sin errores de TypeScript.
- Sin errores de ESLint.
- Sin código muerto.
- Sin comentarios temporales.
- Sin `console.log`.

---

## Componentes

- Responsabilidad única.
- Props tipadas.
- Componentes reutilizables.
- Sin duplicación.

---

## UI

- Responsive.
- Estados hover.
- Estados focus.
- Estados disabled.
- Estados loading.
- Estados empty.

---

## UX

- Flujo consistente.
- Navegación clara.
- Textos revisados.
- Feedback inmediato.

---

## Accesibilidad

- Navegación por teclado.
- Focus visible.
- Contraste suficiente.
- Etiquetas accesibles.
- Preferencias de movimiento respetadas.

---

## Performance

- Imágenes optimizadas.
- Componentes livianos.
- Sin renders innecesarios.
- Lazy Loading cuando corresponda.

---

# Gestión de deuda técnica

La deuda técnica nunca debe ignorarse.

Si una mejora no puede realizarse durante el sprint:

- debe registrarse;
- priorizarse;
- revisarse en la planificación siguiente.

---

# Revisión de código

Cada cambio importante debe responder afirmativamente a estas preguntas:

- ¿Es más simple que la versión anterior?
- ¿Respeta la arquitectura?
- ¿Es reutilizable?
- ¿Es fácil de leer?
- ¿Es fácil de mantener?
- ¿Podrá entenderse dentro de seis meses?

Si alguna respuesta es negativa, el cambio debe revisarse.

---

# Métricas de calidad

El objetivo para Lupinos 2.0 es mantener:

- TypeScript sin errores.
- ESLint sin errores.
- Lighthouse superior a 95.
- Accesibilidad superior a 95.
- Performance superior a 95.
- Best Practices superior a 95.
- SEO superior a 95.

---

# Responsabilidades

La calidad pertenece a todo el proyecto.

No existe una etapa específica de "QA".

Cada decisión de diseño, desarrollo y revisión contribuye al resultado final.

---

# Evolución

Esta estrategia podrá ampliarse para incluir:

- pruebas automatizadas;
- integración continua;
- análisis de cobertura;
- monitoreo en producción;
- seguimiento de errores.

---

# Filosofía final

Cada nueva línea de código debe dejar Lupinos en un estado igual o mejor que antes.

La calidad no es un objetivo que se alcanza una vez.

Es un hábito que acompaña todo el ciclo de vida del producto.