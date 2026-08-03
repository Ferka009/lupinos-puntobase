# UI Component Design — ProductCard v1.0 — Lupinos

## Introducción

La ProductCard es el componente principal de conversión dentro de Lupinos 2.0.

Su objetivo es transformar una intención gastronómica en una selección:

Agregar un producto a Mi Mesa.

---

# Concepto visual

## "Una pequeña pieza de nuestra carta artesanal"

La ProductCard debe sentirse como una recomendación dentro de una fábrica de pastas premium.

Debe transmitir:

- Calidad.
- Cuidado.
- Deseo.
- Confianza.

---

# Anatomía visual

``` id="1h7e0q"
┌──────────────────────────┐
│                          │
│       Imagen Producto    │
│                          │
├──────────────────────────┤
│ Especialidad Lupinos     │
│                          │
│ Ravioles Roast Beef      │
│                          │
│ Carne braseada al vino   │
│ tinto lentamente.        │
│                          │
│ 4 porciones     $12.000  │
│                          │
│ [Agregar a mi mesa]      │
│                          │
└──────────────────────────┘
```

---

# 1. Imagen del producto

## Prioridad

La imagen ocupa aproximadamente:

50% de la card.

---

## Objetivo

Generar deseo antes de leer.

---

## Características

Debe mostrar:

✓ Textura.

✓ Relleno.

✓ Artesanía.

✓ Calidad.

---

## Tratamiento visual

Border radius superior:

24px.

Sin marcos.

Sin fondos artificiales.

---

# 2. Badge de colección

## Uso

Dar contexto emocional.

Ejemplos:

"Favorito de la casa"

"Especialidad Lupinos"

"Edición invierno"

---

## Diseño

Pequeño.

Elegante.

Nunca debe competir con la imagen.

---

# 3. Nombre del producto

## Tipografía

Serif.

---

## Objetivo

Debe sentirse gastronómico.

Ejemplo:

Correcto:

"Ravioles de Roast Beef al Malbec"

Incorrecto:

"Ravioles RB"

---

# 4. Descripción

## Objetivo

Transmitir valor.

No explicar una receta completa.

---

Ejemplo:

"Masa artesanal rellena con roast beef cocido lentamente al vino tinto."

---

## Reglas

Máximo:

2 líneas desktop.

3 líneas mobile.

---

# 5. Información rápida

## Formato

Pequeños datos visuales.

Ejemplo:

```
🍽 4 porciones
⚖ 500g
❄ Congelado
```

---

## Objetivo

Eliminar dudas.

---

# 6. Precio

## Diseño

Visible.

Pero no protagonista.

---

Jerarquía:

Producto > Historia > Precio > Acción

---

# 7. Botón principal

## Texto

"Agregar a mi mesa"

---

## Personalidad

No es una acción comercial.

Es una invitación.

---

## Diseño

Altura:

52px.

Radio:

14px.

Ancho:

100%.

---

# Estados

## Default

Estado inicial.

Debe sentirse tranquilo.

---

## Hover

Movimiento sutil.

Cambios:

- Elevación ligera.
- Mayor profundidad.

---

## Added

Cuando se agrega:

Cambio:

"Agregar a mi mesa"

↓

"En mi mesa ✓"

---

Debe existir:

- Confirmación visual.
- Pequeña animación.

---

# Layout Desktop

Grid recomendado:

``` id="q9d4sc"
3 columnas

Card grande

Mucho espacio

Imagen protagonista
```

---

# Layout Mobile

Una columna.

Orden:

``` id="gqz5zj"
Imagen

↓

Nombre

↓

Descripción

↓

Precio

↓

Botón
```

---

# Microinteracciones

Deben sentirse artesanales.

Ejemplos:

✓ Fade suave.

✓ Movimiento pequeño.

✓ Confirmación delicada.

Evitar:

✗ Rebotes.

✗ Animaciones llamativas.

---

# Relación con Mi Mesa

La ProductCard debe integrarse completamente.

Flujo:

``` id="qz9e7d"
Usuario ve producto

↓

Presiona agregar

↓

Producto entra en Mi Mesa

↓

Usuario continúa explorando
```

---

# Datos necesarios

La UI recibe:

```ts id="f1r5gb"
ProductCardProps {

name

description

image

price

collection

portions

weight

availability

onAdd()

}
```

---

# Variantes futuras

## Featured Product Card

Producto destacado.

Más grande.

Uso:

Hero o secciones principales.

---

## Compact Product Card

Uso:

Listados.

---

## Seasonal Card

Productos temporales.

---

# Principios visuales

La ProductCard debe ser:

✓ Elegante.

✓ Apetitosa.

✓ Clara.

✓ Fácil.

✓ Artesanal.

---

No debe ser:

✗ Saturada.

✗ Técnica.

✗ Industrial.

✗ Genérica.

---

# Test final

Antes de aprobar:

Preguntar:

> "Si solamente veo esta card durante 5 segundos, ¿quiero probar este producto?"

Si la respuesta es sí:

La ProductCard funciona.

---

# Definición final

La ProductCard Lupinos es el punto donde una persona deja de mirar comida y empieza a imaginar una mesa.