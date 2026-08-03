# AGENTS.md

# Lupinos 2.0 — Product Development Guidelines v1.0

---

# 01. Contexto del Proyecto

## Nombre del proyecto

Lupinos 2.0

---

## Descripción

Lupinos es una marca de pastas artesanales premium ubicada en Luján, Buenos Aires.

El objetivo del proyecto es crear una experiencia digital que transmita:

- tradición familiar
- elaboración artesanal
- calidad gastronómica
- confianza
- cercanía
- una experiencia memorable

La página no debe sentirse como un comercio electrónico tradicional.

Debe sentirse como entrar a la cocina de Lupinos.

---

# 02. Filosofía del Producto

La experiencia Lupinos debe transmitir:

> "Un domingo en familia, una mesa compartida y recetas hechas con dedicación durante generaciones."

La tecnología debe estar al servicio de la emoción.

No estamos creando solamente una tienda online.

Estamos creando una experiencia gastronómica digital.

---

# 03. Rol de Codex

Codex trabaja como parte del equipo de producto Lupinos.

Debe pensar como:

- desarrollador senior
- diseñador de sistemas
- colaborador de UX

Prioridades:

1. Calidad de experiencia.
2. Código limpio.
3. Componentes reutilizables.
4. Consistencia visual.
5. Mantenibilidad.

---

# 04. Stack Tecnológico

## Framework

Next.js

Usar:

- App Router
- Server Components cuando corresponda
- Optimización SEO


## Lenguaje

TypeScript


## Estilos

Tailwind CSS v4


## Arquitectura

Componentes reutilizables.


---

# 05. Principios de Desarrollo

## No improvisar

Antes de crear algo nuevo:

- revisar componentes existentes
- revisar documentación
- reutilizar soluciones


---

## Evitar duplicación

No crear:

```
PrimaryButton.tsx
SecondaryButton.tsx
GreenButton.tsx
```

si puede existir:

```
Button.tsx
```

con variantes.


---

## Diseño primero

Cada componente debe responder:

- ¿Qué problema resuelve?
- ¿Dónde se utiliza?
- ¿Pertenece al sistema visual?


---

# 06. Arquitectura del Proyecto

Estructura principal:

```
src/

├── app/

├── components/

├── data/

├── hooks/

├── types/

├── utils/

└── styles/
```

---

# Componentes

```
components/

├── ui/

├── shared/

├── landing/

├── products/

└── mesa/
```

---

# 07. Design System Lupinos

## Tipografía

### Display

Cormorant Garamond

Uso:

- Hero
- títulos
- storytelling
- momentos emocionales


### Body

Inter

Uso:

- textos
- botones
- información
- navegación


---

# 08. Identidad Visual

## Colores principales


### Cream

Uso:

Fondos principales.

```
#F8F1E5
```


### Olive

Uso:

Acciones principales.

```
#5C6B3C
```


### Gold

Uso:

Detalles premium.

```
#C49A4A
```


### Cacao

Uso:

Texto principal.

```
#4A3828
```


### Bordo

Uso:

Detalles especiales.

```
#7A263A
```

---

# 09. Design Tokens

Nunca escribir colores directamente:

Incorrecto:

```tsx
bg-[#5C6B3C]
```

Correcto:

```tsx
bg-lupinos-olive
```

---

Usar:

- tokens
- variables CSS
- clases del sistema

---

# 10. Componentes Base

Componentes principales:

```
Button
Card
Container
SectionTitle
SectionDivider
Badge
```

---

# 11. Experiencia Principal

## Mi Mesa

Sistema de selección de productos.

Flujo:

Usuario:

1. Explora productos.
2. Selecciona una pasta.
3. Agrega a Mi Mesa.
4. Revisa pedido.
5. Envía pedido por WhatsApp.


---

# 12. Producto Digital

La arquitectura comercial está basada en:

## Colecciones

Ejemplos:

- Raviolones artesanales
- Pastas clásicas
- Especialidades Lupinos


---

# 13. ProductCard

Principios:

Debe comunicar:

- producto artesanal
- calidad
- deseo
- facilidad de compra


Debe incluir:

- imagen
- nombre
- descripción corta
- precio
- acción agregar a Mi Mesa


---

# 14. Reglas UX/UI

La experiencia debe sentirse:

- cálida
- elegante
- artesanal
- premium


Evitar:

- diseños fríos
- exceso de elementos
- estética tecnológica
- colores saturados


---

# 15. Fotografía

Las imágenes deben transmitir:

- ingredientes reales
- proceso artesanal
- textura
- producto terminado
- momentos familiares


Evitar:

- fotos genéricas
- aspecto industrial
- exceso de edición


---

# 16. Código

## Componentes

Usar:

PascalCase

Ejemplo:

```
ProductCard.tsx
```

---

## Funciones

Usar:

camelCase

Ejemplo:

```
addProduct()
```

---

## Archivos

Mantener nombres descriptivos.


---

# 17. Calidad

Antes de finalizar cualquier cambio:

Verificar:

- responsive
- accesibilidad
- rendimiento
- consistencia visual
- errores TypeScript


---

# 18. Git

Usar commits descriptivos.

Ejemplos:

```
feat: create ProductCard component

style: update Lupinos tokens

fix: improve mobile spacing
```

---

# 19. Regla Final

Cada línea de código debe ayudar a construir la experiencia Lupinos.

No buscamos solamente una página funcional.

Construimos una marca digital premium.

---

# Lupinos 2.0

Marca.

Producto.

Experiencia.

Código.

Todo debe sentirse parte del mismo universo.

# Documentation First

Antes de implementar una funcionalidad:

1. Leer la documentación correspondiente.
2. Confirmar que la solución respeta la filosofía de Lupinos.
3. Implementar.
4. Ejecutar:

- npm run lint
- tsc --noEmit
- npm run build

5. Actualizar CHANGELOG.md.
6. Actualizar el Roadmap si corresponde.

La documentación es la fuente de verdad.

Si existe un conflicto entre el código y la documentación, prevalece la documentación.

## Arquitectura

Antes de crear un componente nuevo verificar:

1. ¿Ya existe uno similar?

2. ¿Puede extenderse uno existente?

3. ¿Pertenece al Design System?

4. ¿Es específico de una feature?

Evitar componentes duplicados.

## Experiencia

No construir interfaces únicamente porque funcionan.

Cada componente debe transmitir:

- calidad
- calidez
- artesanía
- simplicidad
- elegancia

Si una solución es técnicamente correcta pero contradice la identidad de Lupinos, debe replantearse.