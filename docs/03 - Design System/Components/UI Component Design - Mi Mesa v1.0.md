# UI Component Design — Mi Mesa v1.0 — Lupinos

## Introducción

Mi Mesa es el componente central de cierre de experiencia dentro de Lupinos 2.0.

Representa el espacio donde cada persona reúne las especialidades elegidas antes de preparar su pedido.

No es un carrito tradicional.

Es una selección gastronómica personal.

---

# Concepto visual

## "La mesa antes de compartir"

Mi Mesa debe transmitir:

- Cuidado.
- Orden.
- Anticipación.
- Confianza.

La persona debe sentir:

"Ya elegí lo que vamos a disfrutar."

---

# Objetivos del componente

Mi Mesa debe:

✓ Mostrar claramente la selección.

✓ Permitir modificar productos fácilmente.

✓ Mantener la conexión emocional.

✓ Guiar hacia la acción final.

---

# Arquitectura del componente

```text
MiMesa

├── Header
│
├── ProductsList
│
├── ProductItem
│
├── NotesSection
│
├── Summary
│
└── SendOrderButton
```

---

# Modalidad de presentación

## Desktop

Recomendación:

Drawer lateral.

¿Por qué?

Porque permite continuar explorando productos sin perder contexto.

Flujo:

```text
Producto

↓

Agregar a Mi Mesa

↓

Abrir panel lateral

↓

Continuar explorando
```

---

## Mobile

Recomendación:

Página completa.

Motivo:

Más espacio para revisar.

Más comodidad.

---

# 1. Header Mi Mesa

## Objetivo

Crear identidad.

No usar:

"Carrito"

---

Usar:

"Mi Mesa"

---

Ejemplo:

```
Mi Mesa

3 especialidades elegidas
```

---

# 2. Lista de productos

Cada producto debe mostrar:

- Imagen.
- Nombre.
- Cantidad.
- Precio.
- Modificar.
- Eliminar.

---

Diseño:

```text
┌────────────────────┐

Imagen

Ravioles de Roast Beef

Cantidad: 2

$24.000

−   +

Eliminar

└────────────────────┘
```

---

# 3. Product Item

## Debe conservar la identidad Lupinos.

No debe convertirse en una tabla.

---

Mantener:

- Fotografía.
- Espacios amplios.
- Tipografía elegante.

---

# 4. Control de cantidad

Debe ser simple.

Ejemplo:

```
−   2   +
```

---

Reglas:

- Botones grandes.
- Fácil en móvil.
- Sin complejidad.

---

# 5. Notas especiales

Elemento diferencial.

Permite personalización.

Ejemplo:

"Quiero recibirlo el domingo al mediodía."

---

Diseño:

Área simple:

"¿Querés contarnos algo?"

---

# 6. Resumen

Debe generar seguridad.

Mostrar:

Productos.

Cantidad.

Total.

---

Evitar sensación bancaria.

---

Ejemplo:

```
Tu mesa

3 especialidades

Total estimado

$____
```

---

# 7. CTA principal

No usar:

"Comprar"

"Finalizar compra"

---

Usar:

## Preparar mi pedido

o

## Enviar mi mesa

---

# Estados

## Mi Mesa vacía

Debe inspirar.

No decir:

"Tu carrito está vacío."

---

Mensaje:

"Tu mesa todavía espera sabores Lupinos."

CTA:

"Explorar especialidades"

---

## Con productos

Estado principal.

Mostrar progreso.

---

## Lista para enviar

Mensaje:

"Tu mesa está lista."

CTA:

"Preparar mi pedido"

---

# Microinteracciones

Deben ser delicadas.

Ejemplos:

Agregar producto:

- Fade suave.
- Producto aparece.

Cantidad:

- Cambio fluido.

Confirmación:

"Agregado a tu mesa."

---

Evitar:

Animaciones comerciales agresivas.

---

# Integración con WhatsApp

Mi Mesa termina en una conversación humana.

Flujo:

```text
Mi Mesa

↓

Preparar pedido

↓

WhatsApp

↓

Confirmación personalizada
```

---

# Mensaje generado

Ejemplo:

```
Hola Lupinos.

Quiero preparar esta mesa:

🍝 Ravioles de Roast Beef al Malbec
Cantidad: 2

🍝 Sorrentinos de Ricota y Espinaca
Cantidad: 1

Comentarios:
Domingo al mediodía.

Muchas gracias.
```

---

# Diseño responsive

## Desktop

Drawer elegante.

Ancho recomendado:

400-480px.

---

## Mobile

Pantalla completa.

Botón fijo inferior.

---

# Accesibilidad

Debe incluir:

- Botones claros.
- Navegación teclado.
- Contraste correcto.
- Estados visibles.

---

# Principios visuales

Mi Mesa debe ser:

✓ Cálida.

✓ Simple.

✓ Premium.

✓ Humana.

---

No debe sentirse:

✗ Técnica.

✗ Fría.

✗ Industrial.

✗ Genérica.

---

# Errores a evitar

No hacer:

✗ Carrito estándar.

✗ Formularios largos.

✗ Muchas decisiones.

✗ Pasos innecesarios.

---

# Regla final

Antes de aprobar Mi Mesa preguntamos:

> ¿Esta pantalla ayuda a imaginar el momento que estoy preparando?

Si la respuesta es sí, pertenece a Lupinos.

---

# Definición final

Mi Mesa es el lugar donde una elección se transforma en una experiencia lista para compartir.