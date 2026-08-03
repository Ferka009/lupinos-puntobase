# 🍝 Lupinos 2.0

> Experiencia digital premium para una fábrica de pastas artesanales de Luján, Buenos Aires.

Lupinos 2.0 no es solamente una página web. Es un producto digital diseñado para transmitir la calidad, el cuidado y la experiencia de compartir una buena comida.

---

# Visión

El objetivo de Lupinos 2.0 es construir una experiencia digital donde cada detalle refleje la filosofía de la marca:

- Artesanal.
- Elegante.
- Cálida.
- Cercana.
- Premium.

La tecnología debe acompañar esa experiencia sin perder simplicidad ni rendimiento.

---

# Stack Tecnológico

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- Lucide React

---

# Arquitectura

```text
app/
components/
data/
hooks/
types/
utils/
public/
docs/
```

---

# Documentación

Toda la documentación del proyecto se encuentra dentro de `docs/`.

Antes de realizar modificaciones en el código, es obligatorio revisar:

```text
docs/

01 - Brand Book/
02 - Design System/
03 - UX/
04 - Desarrollo/
05 - Roadmap/

Changelog.md
```

Estos documentos representan la fuente de verdad del proyecto.

---

# Principios del Proyecto

Cada cambio debe respetar los principios definidos para Lupinos:

- La experiencia tiene prioridad sobre la cantidad de funcionalidades.
- El diseño debe transmitir calidad artesanal.
- Los componentes deben ser reutilizables.
- El código debe ser simple, limpio y escalable.
- No se agregan soluciones improvisadas.
- Todo cambio debe respetar el Design System.

---

# Instalación

```bash
git clone https://github.com/Ferka009/lupinos-puntobase.git

cd lupinos-puntobase

npm install

npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

# Scripts

```bash
npm run dev
```

Inicia el entorno de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run start
```

Inicia la aplicación en modo producción.

```bash
npm run lint
```

Ejecuta ESLint.

---

# Flujo de Desarrollo

Todo cambio debe seguir este proceso:

1. Revisar la documentación correspondiente.
2. Implementar una única funcionalidad por Sprint.
3. Verificar que el proyecto compile correctamente.
4. Ejecutar:
   - `npm run lint`
   - `tsc --noEmit`
   - `npm run build`
5. Actualizar `Changelog.md`.
6. Marcar el progreso en `Lupinos 2.0 Roadmap.md`.

---

# Estado del Proyecto

**Versión actual:** 0.2.0 (Foundation)

En desarrollo.

Próximo objetivo:

- Sistema de Productos (Product Domain).

---

# Autor

**Fernando Silva**

Lupinos 2.0 está siendo desarrollado con un enfoque de producto digital, priorizando la calidad de la experiencia, la mantenibilidad del código y una arquitectura preparada para evolucionar en el tiempo.