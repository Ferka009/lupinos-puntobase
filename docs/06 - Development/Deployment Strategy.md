# Deployment Strategy

**Version:** 1.0

**Status:** Active

**Last Updated:** 03/08/2026

---

# Objetivo

Definir el proceso de despliegue de Lupinos 2.0 desde desarrollo hasta producción.

El objetivo es garantizar una publicación segura, predecible y fácil de mantener.

---

# Filosofía

Un lanzamiento no es simplemente subir código.

Es entregar una experiencia completa y confiable.

Cada despliegue debe mantener:

- calidad visual;
- rendimiento;
- estabilidad;
- seguridad;
- experiencia del usuario.

---

# Plataforma

## Hosting principal

Lupinos 2.0 utilizará:

```text
Vercel
```

Motivos:

- integración nativa con Next.js;
- despliegues automáticos;
- optimización de imágenes;
- CDN global;
- previews por rama;
- configuración simple.

---

# Entornos

El proyecto tendrá tres ambientes principales.

---

# Development

Uso:

Desarrollo local.

Ejemplo:

```bash
npm run dev
```

Características:

- cambios rápidos;
- debugging;
- pruebas iniciales.

---

# Preview

Uso:

Validación antes de producción.

Se genera automáticamente mediante:

- Pull Requests;
- ramas de prueba.

Permite revisar:

- diseño;
- responsive;
- funcionalidades.

---

# Production

Uso:

Versión pública oficial.

Debe contener únicamente cambios aprobados.

---

# Flujo de despliegue

El flujo recomendado:

```text
Local

↓

Git Branch

↓

Pull Request

↓

Preview Deployment

↓

Review

↓

Main Branch

↓

Production
```

---

# Git Workflow

La rama principal:

```text
main
```

representa producción.

No se deben realizar cambios directamente sobre main.

---

Ramas recomendadas:

```text
feature/nombre-funcionalidad

fix/nombre-error

refactor/nombre-mejora
```

Ejemplos:

```text
feature/product-domain

feature/mi-mesa

fix/navbar-mobile
```

---

# Antes de desplegar

Toda versión debe validar:

## Código

Ejecutar:

```bash
npm run lint
```

Debe finalizar sin errores.

---

## TypeScript

Ejecutar:

```bash
npx tsc --noEmit
```

Debe finalizar correctamente.

---

## Build

Ejecutar:

```bash
npm run build
```

Debe completarse correctamente.

---

# Checklist previo

Antes de producción:

## Visual

- Diseño revisado.
- Responsive probado.
- Imágenes correctas.
- Animaciones verificadas.

---

## Funcional

- Navegación funcionando.
- Formularios funcionando.
- WhatsApp funcionando.
- Estados vacíos revisados.

---

## SEO

- Metadata correcta.
- Sitemap generado.
- Robots configurado.
- Open Graph validado.

---

## Performance

- Lighthouse revisado.
- Imágenes optimizadas.
- Core Web Vitals saludables.

---

# Variables de entorno

Toda información sensible debe almacenarse mediante variables de entorno.

Nunca incluir:

- teléfonos privados;
- claves;
- tokens;
- configuraciones sensibles.

---

Ejemplo:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

---

# Imágenes

Las imágenes de producción deben:

- estar dentro de `public/` o sistema definido;
- utilizar formatos optimizados;
- tener nombres descriptivos;
- utilizar `next/image`.

---

# Dominio

El dominio oficial deberá configurarse en Vercel.

Proceso:

1. Registrar dominio.
2. Configurar DNS.
3. Asociar dominio en Vercel.
4. Verificar HTTPS.
5. Validar redirecciones.

---

# Analytics

Producción deberá incorporar medición.

Opciones futuras:

- Vercel Analytics;
- Google Analytics;
- Search Console.

Los datos deberán utilizarse para mejorar la experiencia.

---

# Seguridad

Buenas prácticas:

- mantener dependencias actualizadas;
- revisar vulnerabilidades;
- evitar exposición de información sensible;
- utilizar HTTPS.

---

# Rollback

Ante un problema crítico:

1. Identificar versión estable anterior.
2. Revertir cambio.
3. Publicar nuevamente.
4. Analizar causa.

---

# Monitoreo

Después de cada lanzamiento importante revisar:

- errores;
- rendimiento;
- indexación;
- comportamiento móvil.

---

# Lanzamiento inicial

Antes del lanzamiento oficial:

## Validación técnica

- Build exitoso.
- Sin errores.
- Dominio conectado.

---

## Validación comercial

- Productos correctos.
- Información actualizada.
- WhatsApp funcionando.

---

## Validación visual

- Escritorio.
- Tablet.
- Móvil.

---

# CI/CD futuro

La arquitectura permitirá incorporar:

- GitHub Actions;
- tests automáticos;
- validaciones antes del merge;
- deployments automáticos.

---

# Definition of Done

Un despliegue está completo cuando:

- está publicado correctamente;
- funciona en dispositivos reales;
- mantiene rendimiento esperado;
- no presenta errores críticos;
- cumple estándares de calidad.

---

# Filosofía final

Publicar Lupinos no es solamente poner una página online.

Es abrir la puerta digital de una marca artesanal.

Cada despliegue debe sentirse tan cuidado como el producto que representa.