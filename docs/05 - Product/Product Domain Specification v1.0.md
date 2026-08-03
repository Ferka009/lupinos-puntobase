# Product Domain Specification v1.0

> "En Lupinos un producto no es simplemente algo que se vende.
> Es una invitación a compartir una comida."

---

# Propósito

El Product Domain representa el corazón de Lupinos 2.0.

Toda la experiencia gira alrededor del producto.

No existe ninguna pantalla, flujo o funcionalidad que no parta de este dominio.

El objetivo es construir una arquitectura donde los productos puedan crecer durante años sin necesidad de modificar la estructura principal.

---

# Filosofía

Los productos son los protagonistas.

La interfaz existe para ayudar a descubrirlos.

Nunca al revés.

Cada decisión debe responder una pregunta:

"¿Esto ayuda al usuario a imaginar la comida que va a compartir?"

Si la respuesta es no, probablemente no pertenece a Lupinos.

---

# Principios

## Single Source of Truth

Existe una única fuente de datos.

Toda la aplicación consume el mismo Product.

Nunca habrá duplicación de información.

---

## Domain First

Los componentes nunca definen el negocio.

El dominio define los componentes.

ProductCard existe porque existe Product.

No al revés.

---

## Escalabilidad

Agregar un producto nuevo nunca debe requerir escribir código.

Debe bastar con agregar datos.

---

## Declarativo

Los comportamientos nacen de los datos.

Ejemplos:

- destacado
- recomendado
- nuevo
- agotado
- temporada

No existen ProductCards especiales.

Existe un Product con atributos diferentes.

---

# Entidades

## Product

Representa cualquier elemento que Lupinos puede ofrecer.

Ejemplos:

- Raviolones
- Ravioles
- Sorrentinos
- Ñoquis
- Salsas
- Prepizzas

Todo es Product.

---

## Category

Clasificación funcional.

Permite organizar.

Ejemplos:

- Ravioles

- Sorrentinos

- Pastas

- Salsas

- Prepizzas

---

## Collection

Agrupa productos mediante una idea.

No organiza.

Inspira.

Ejemplos:

Para compartir.

Favoritos.

Sabores intensos.

Ediciones especiales.

Temporada.

---

## MesaItem

Representa un Product elegido por el usuario.

Incluye:

- cantidad

- observaciones

- subtotal

No modifica Product.

---

# Relaciones

Product pertenece a una Category.

Product puede pertenecer a múltiples Collections.

MesaItem referencia un Product.

Collection contiene muchos Products.

---

# Reglas

Todo Product debe tener:

- identidad

- precio

- imagen

- categoría

Todo lo demás es opcional.

---

# Arquitectura

Product

↓

ProductCard

↓

Product Detail

↓

AddToMesa

↓

Mesa Store

↓

WhatsApp

La información siempre fluye en una sola dirección.

---

# Preparado para el futuro

El dominio debe soportar:

- productos de temporada

- promociones

- packs

- recomendaciones

- favoritos

- recetas

- disponibilidad dinámica

sin modificar la arquitectura.

---

# Principio Final

El Product Domain no almacena productos.

Representa digitalmente la forma en que Lupinos entiende la comida.

Cada Product debe transmitir el mismo cuidado con el que fue elaborado.