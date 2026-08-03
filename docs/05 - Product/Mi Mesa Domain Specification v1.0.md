# Mi Mesa Domain Specification v1.0

> Dominio funcional de **Mi Mesa** para Lupinos 2.0.
>
> Mi Mesa no es un carrito de compras. Es el espacio donde el usuario prepara la mesa que quiere compartir.

---

# Objetivo

Crear una experiencia de selección de productos cálida, simple y cercana.

Mi Mesa debe transmitir la sensación de estar preparando una comida para compartir, no de realizar una compra tradicional.

---

# Filosofía

El usuario no "agrega al carrito".

El usuario **arma su mesa**.

Ese pequeño cambio de lenguaje transforma toda la experiencia.

Lupinos no vende únicamente pastas.

Invita a compartir momentos.

---

# Principios

## Simplicidad

Agregar un producto debe requerir un solo clic.

No deben existir pasos innecesarios.

---

## Claridad

El usuario siempre debe saber:

- qué eligió;
- cuántos productos tiene;
- cuánto costará aproximadamente.

---

## Cercanía

Todo el lenguaje debe sentirse humano.

Ejemplos:

- "Mi Mesa"
- "Seguir explorando"
- "Tu mesa está lista"
- "Agregar a Mi Mesa"

Nunca utilizar términos propios de ecommerce como:

- carrito
- checkout
- finalizar compra

---

## Continuidad

El usuario puede seguir explorando mientras construye su mesa.

No debe sentirse interrumpido.

---

# Responsabilidades

Mi Mesa es responsable de:

- almacenar productos seleccionados;
- modificar cantidades;
- eliminar productos;
- agregar notas opcionales;
- calcular subtotales;
- generar el pedido para WhatsApp.

No es responsable de:

- procesar pagos;
- calcular envíos;
- gestionar stock;
- autenticación.

---

# Entidades

## Mesa

Representa la selección completa del usuario.

Contiene:

- items;
- cantidad total;
- subtotal;
- notas generales (futuro).

---

## MesaItem

Representa un producto dentro de la mesa.

Debe contener:

- referencia al Product;
- cantidad;
- nota opcional.

Nunca debe duplicar información innecesaria del producto.

---

# Flujo principal

```text
Landing

↓

ProductCard

↓

Agregar a Mi Mesa

↓

Mi Mesa

↓

Editar

↓

WhatsApp
```

---

# Acciones disponibles

## Agregar producto

Añade un producto a la mesa.

Si ya existe:

incrementa la cantidad.

---

## Eliminar producto

Quita completamente el producto.

---

## Modificar cantidad

Permite aumentar o disminuir unidades.

Nunca permitir cantidades menores a uno.

---

## Agregar nota

Cada producto podrá incluir una nota opcional.

Ejemplos:

- Sin nuez.
- Para freezer.
- Entrega después de las 18 hs.

---

## Vaciar mesa

Elimina todos los productos.

Debe solicitar confirmación.

---

# Estados

## Vacía

No existen productos.

Debe invitar a descubrir la carta.

---

## Con productos

Muestra:

- resumen;
- subtotal;
- acciones disponibles.

---

## Lista para enviar

La mesa está completa.

El CTA principal será:

**Enviar pedido por WhatsApp**

---

# Reglas de negocio

- Un producto sólo puede existir una vez.
- La cantidad representa múltiples unidades del mismo producto.
- El subtotal siempre se calcula automáticamente.
- Las notas pertenecen al MesaItem.
- El orden de los productos debe respetar el momento en que fueron agregados.

---

# Integración con Product

Mi Mesa nunca crea productos.

Únicamente referencia entidades Product existentes.

Toda la información visual proviene del Product Domain.

---

# Integración futura con Zustand

Mi Mesa será el dominio principal del estado global.

El store deberá contener únicamente información relacionada con la mesa.

No almacenará información visual ni de navegación.

---

# Integración con WhatsApp

Mi Mesa será la única responsable de generar la información que luego utilizará el módulo de WhatsApp.

WhatsApp nunca accederá directamente al catálogo.

Siempre trabajará sobre Mi Mesa.

---

# Evolución futura

El dominio permite incorporar sin cambios estructurales:

- favoritos;
- promociones;
- combos;
- packs familiares;
- productos de temporada;
- recomendaciones automáticas.

---

# Definición final

Mi Mesa no es una lista de productos.

Es el lugar donde el usuario transforma una selección de pastas en una comida para compartir.

Cada decisión del dominio debe reforzar esa idea.