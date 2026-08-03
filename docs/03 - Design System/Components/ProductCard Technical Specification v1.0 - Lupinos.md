# ProductCard Technical Specification v1.0 — Lupinos

## Introducción

La ProductCard es el componente principal de exploración y conversión dentro de la experiencia Lupinos.

Su responsabilidad es presentar un producto, comunicar su valor y facilitar una acción:

Agregarlo a Mi Mesa.

---

# Objetivo del componente

La ProductCard debe lograr:

1. Mostrar el producto de forma atractiva.
2. Comunicar información importante rápidamente.
3. Generar deseo.
4. Facilitar la selección.
5. Mantener la identidad visual Lupinos.

---

# Anatomía del componente

## Estructura general

```
ProductCard

Container

├── Image
│
├── Content
│
│   ├── Badge
│   │
│   ├── Title
│   │
│   ├── Description
│   │
│   ├── Metadata
│   │
│   ├── Price
│   │
│   └── Action Button
```

---

# 1. Container

## Responsabilidad

Contener toda la información del producto.

Características:

- Fondo limpio.
- Bordes suaves.
- Espaciado generoso.
- Jerarquía clara.

---

## Diseño

Border radius:

16px - 24px

Padding interno:

24px

Background:

Color neutro de la marca.

Shadow:

Sutil.

Nunca dominante.

---

# 2. Product Image

## Responsabilidad

Generar deseo inicial.

La imagen es el primer punto de conexión emocional.

---

## Reglas

Debe mostrar:

- Producto real.
- Buena iluminación.
- Textura.
- Calidad artesanal.

---

## Aspect Ratio recomendado

Desktop:

4:3

Mobile:

1:1 o 4:3

---

## Comportamiento

Hover:

Movimiento mínimo.

Ejemplo:

- Zoom muy leve.
- Elevación de card.

Evitar:

Zoom agresivo.

---

# 3. Collection Badge

## Responsabilidad

Contextualizar.

Ejemplos:

"Especialidad Lupinos"

"Favorito de la casa"

"Nuevo"

---

## Reglas

Debe ser pequeño.

No competir con el producto.

Tipografía:

Inter Medium.

---

# 4. Product Name

## Responsabilidad

Comunicar rápidamente qué es.

Ejemplo:

"Ravioles de Roast Beef al Malbec"

---

## Reglas

Debe ser:

- Claro.
- Memorable.
- Fácil de leer.

Tipografía:

Serif.

---

# 5. Product Description

## Responsabilidad

Transmitir valor.

No debe describir todo.

Debe despertar curiosidad.

---

Ejemplo:

"Masa artesanal rellena con carne braseada lentamente al vino tinto."

---

Reglas:

Máximo recomendado:

2-3 líneas.

Tipografía:

Inter Regular.

---

# 6. Product Metadata

## Responsabilidad

Eliminar dudas.

Ejemplos:

- 4 porciones.
- 500g.
- Conservación congelada.
- Tiempo de cocción.

---

Formato:

Pequeños elementos visuales.

Ejemplo:

🍽 4 porciones

---

# 7. Price

## Responsabilidad

Mostrar transparencia.

Debe ser visible.

Nunca ocultar precio.

---

Jerarquía:

Importante.

Pero secundaria respecto al producto.

---

# 8. Action Button

## Nombre principal

"Agregar a mi mesa"

---

## Responsabilidad

Convertir intención en acción.

---

Características:

Altura:

48px - 56px

Border radius:

12px - 16px

---

Estados:

Default.

Hover.

Loading.

Added.

---

# Props del componente

Ejemplo conceptual:

```ts
type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category?: string;
  portions?: string;
  weight?: string;
  isFeatured?: boolean;
  onAddToMesa: () => void;
}
```

---

# Estados del componente

## Default

Producto disponible.

---

## Hover

Mayor presencia visual.

---

## Added

Producto agregado a Mi Mesa.

Cambio visual:

"Agregado ✓"

---

## Disabled

Producto no disponible.

Ejemplo:

Producto agotado.

---

# Responsive behavior

## Desktop

Formato:

Grid de productos.

Ejemplo:

3 columnas.

La imagen tiene protagonismo.

---

## Tablet

2 columnas.

---

## Mobile

1 columna.

Prioridad:

Imagen.

Nombre.

Acción.

---

# Accesibilidad

Debe incluir:

- Alt text en imágenes.
- Contraste correcto.
- Botones accesibles.
- Navegación por teclado.

---

# Performance

Consideraciones:

- Optimización de imágenes.
- Lazy loading.
- Componentes reutilizables.
- Datos separados del componente visual.

---

# Arquitectura recomendada

Separación:

```
components/

ProductCard/

├── ProductCard.tsx
├── ProductImage.tsx
├── ProductInfo.tsx
├── AddButton.tsx
└── types.ts
```

---

# Relación con Mi Mesa

La ProductCard nunca termina en la compra.

Termina en una selección.

Flujo:

```
ProductCard

↓

Agregar a Mi Mesa

↓

Actualizar selección

↓

Preparar pedido
```

---

# Principios de conversión

La ProductCard debe:

✓ Reducir incertidumbre.

✓ Mostrar valor.

✓ Facilitar decisión.

✓ Crear deseo.

---

# Errores a evitar

No hacer:

✗ Cards pequeñas.

✗ Mucho texto.

✗ Botones genéricos.

✗ Información escondida.

✗ Diseño tipo marketplace.

---

# Regla final

Antes de aprobar una ProductCard preguntamos:

> ¿Esta tarjeta ayuda a alguien a elegir qué compartir en su mesa?

Si la respuesta es sí, pertenece a Lupinos.

---

# Definición final

La ProductCard Lupinos es el punto donde una persona deja de mirar productos y empieza a imaginar momentos.