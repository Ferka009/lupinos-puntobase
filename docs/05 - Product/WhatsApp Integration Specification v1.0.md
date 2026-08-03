# WhatsApp Integration Specification v1.0

> Especificación funcional de la integración entre **Mi Mesa** y **WhatsApp** para Lupinos 2.0.
>
> El objetivo es convertir la selección realizada por el usuario en una conversación clara, humana y sin fricción.

---

# Objetivo

Permitir que el usuario envíe su pedido a Lupinos mediante WhatsApp con un solo clic, generando automáticamente un mensaje organizado, fácil de leer y listo para editar antes de enviarlo.

---

# Filosofía

En Lupinos, WhatsApp no es un canal de compra.

Es el comienzo de una conversación.

Toda la experiencia de exploración, descubrimiento y selección ocurre dentro del sitio web.

WhatsApp representa el paso final donde el usuario comparte la mesa que preparó.

---

# Principios

## Sin fricción

El usuario no debe escribir manualmente su pedido.

Toda la información debe generarse automáticamente.

---

## Claridad

El mensaje debe ser fácil de interpretar tanto para el cliente como para el equipo de Lupinos.

---

## Cercanía

El lenguaje debe sentirse cálido y natural.

Evitar un tono robótico o excesivamente técnico.

---

## Transparencia

El usuario siempre podrá revisar y editar el mensaje antes de enviarlo.

La aplicación nunca enviará mensajes automáticamente.

---

# Flujo

```text
Landing

↓

Carta

↓

ProductCard

↓

Agregar a Mi Mesa

↓

Mi Mesa

↓

Revisar Pedido

↓

Enviar por WhatsApp

↓

Conversación con Lupinos
```

---

# Fuente de información

El mensaje se genera exclusivamente a partir del estado de **Mi Mesa**.

No debe consultar directamente:

- Product Domain
- Product Collections
- Componentes visuales

Mi Mesa es la única fuente de verdad.

---

# Información incluida

## Saludo

El mensaje comienza con un saludo cordial.

Ejemplo:

```text
¡Hola! 👋

Quisiera realizar el siguiente pedido:
```

---

## Productos

Cada producto debe incluir:

- nombre;
- cantidad;
- nota (si existe).

Ejemplo:

```text
• Raviolones de Roast Beef

Cantidad: 2

Nota: Para freezer
```

---

## Resumen

Al finalizar el listado se incluirá un resumen.

Ejemplo:

```text
Resumen

Productos: 5

Subtotal estimado: $24.500
```

El subtotal tiene carácter informativo.

La confirmación final del precio corresponde a Lupinos.

---

## Cierre

Finalizar con un mensaje amable.

Ejemplo:

```text
Muchas gracias.

Quedo atento a la confirmación.
```

---

# Formato del mensaje

Orden recomendado:

1. Saludo.
2. Listado de productos.
3. Resumen.
4. Despedida.

La estructura debe mantenerse consistente en todos los pedidos.

---

# Notas

Si un producto contiene una nota, debe mostrarse inmediatamente debajo del producto correspondiente.

Ejemplo:

```text
• Ravioles de Espinaca

Cantidad: 1

Nota: Sin nuez
```

Si no existen notas, el bloque no debe mostrarse.

---

# Productos repetidos

Nunca deben aparecer líneas duplicadas.

Si el usuario agrega varias veces el mismo producto, se mostrará una única línea con la cantidad total.

---

# URL de WhatsApp

La integración utilizará el esquema oficial de WhatsApp con el mensaje codificado.

El usuario será redirigido a una conversación con el número oficial de Lupinos.

La conversación siempre será iniciada por el usuario.

---

# Casos especiales

## Mesa vacía

Si Mi Mesa no contiene productos:

- el botón "Enviar por WhatsApp" permanecerá deshabilitado;
- se mostrará una invitación para seguir explorando la carta.

---

## Producto eliminado

Si un producto deja de estar disponible antes del envío:

- deberá eliminarse automáticamente de Mi Mesa;
- se informará al usuario mediante un mensaje claro.

---

## Error al abrir WhatsApp

Si la aplicación no puede abrir WhatsApp:

- mostrar una notificación amigable;
- permitir volver a intentarlo.

---

# Seguridad

El mensaje no debe incluir automáticamente:

- dirección;
- teléfono;
- correo electrónico;
- datos personales.

Esos datos se compartirán únicamente durante la conversación si fueran necesarios.

---

# Escalabilidad

La integración está preparada para incorporar en futuras versiones:

- horarios de retiro;
- opciones de entrega;
- promociones automáticas;
- códigos de descuento;
- múltiples sucursales;
- observaciones generales del pedido.

---

# Responsabilidades

La integración de WhatsApp es responsable de:

- generar el mensaje;
- codificar el contenido;
- abrir la conversación.

No es responsable de:

- gestionar el estado de Mi Mesa;
- calcular precios;
- validar stock;
- procesar pagos.

---

# Definition of Done

La integración estará finalizada cuando:

- el mensaje represente fielmente el contenido de Mi Mesa;
- pueda abrirse correctamente desde dispositivos móviles y escritorio;
- el usuario pueda revisarlo antes del envío;
- el flujo no requiera intervención manual.

---

# Ejemplo de mensaje

```text
¡Hola! 👋

Quisiera realizar el siguiente pedido:

• Raviolones de Roast Beef
Cantidad: 2

• Sorrentinos de Jamón y Queso
Cantidad: 1
Nota: Para freezer

Resumen

Productos: 3

Subtotal estimado: $24.500

Muchas gracias.

Quedo atento a la confirmación.
```

---

# Filosofía

WhatsApp no es el destino de la experiencia.

Es el puente entre el mundo digital de Lupinos y la atención personalizada de la fábrica.

El sitio inspira.

Mi Mesa organiza.

WhatsApp inicia la conversación.