# Mi Mesa State Architecture v1.0

> Arquitectura del estado de **Mi Mesa** para Lupinos 2.0.
>
> Este documento define cómo se organiza, administra y expone el estado global de Mi Mesa. No describe la implementación, sino la arquitectura que deberá respetar cualquier solución técnica (Zustand en la primera versión).

---

# Objetivo

Diseñar un estado global simple, predecible y escalable para la experiencia "Mi Mesa".

Toda la lógica relacionada con la selección de productos debe concentrarse en un único dominio.

---

# Principios

## Una única fuente de verdad

El estado de Mi Mesa vive en un único store.

No deben existir copias del mismo estado en componentes.

---

## Estado mínimo

El store sólo guarda la información necesaria.

Toda la información visual se obtiene desde `Product`.

Nunca se duplican:

- nombre;
- descripción;
- imagen;
- badges.

---

## Acciones explícitas

Todo cambio de estado debe realizarse mediante acciones bien definidas.

Los componentes nunca modifican el estado directamente.

---

## Derivación antes que almacenamiento

Siempre que sea posible, los valores deben calcularse.

Ejemplos:

- cantidad total de productos;
- subtotal;
- cantidad de líneas.

No deben almacenarse si pueden derivarse del estado actual.

---

# Estructura del Store

El dominio se compone de dos bloques principales:

```text
MiMesaStore

├── state
└── actions
```

---

# State

## items

Lista de productos seleccionados.

Tipo:

```text
MesaItem[]
```

---

## Estado inicial

```text
items = []
```

No se requiere ningún otro estado para la primera versión.

---

# MesaItem

Cada elemento contiene únicamente:

- referencia al Product;
- cantidad;
- nota opcional.

No almacena información duplicada del producto.

Ejemplo conceptual:

```text
MesaItem

productId

quantity

note
```

---

# Selectores derivados

Los siguientes valores deben calcularse automáticamente.

## totalItems

Cantidad total de unidades seleccionadas.

Ejemplo:

2 Raviolones

1 Sorrentinos

Resultado:

```text
3
```

---

## totalLines

Cantidad de productos distintos.

Ejemplo:

2 Raviolones

1 Sorrentinos

Resultado:

```text
2
```

---

## subtotal

Suma de:

```text
precio × cantidad
```

No se almacena.

Siempre se deriva.

---

## isEmpty

Resultado:

```text
items.length === 0
```

---

# Acciones

## addItem(product)

Agrega un producto.

Si el producto ya existe:

incrementa su cantidad.

---

## removeItem(productId)

Elimina completamente un producto.

---

## increaseQuantity(productId)

Incrementa una unidad.

---

## decreaseQuantity(productId)

Reduce una unidad.

Si la cantidad llega a cero:

el producto se elimina automáticamente.

---

## updateNote(productId, note)

Actualiza la nota asociada al producto.

---

## clear()

Vacía completamente Mi Mesa.

Debe utilizar confirmación desde la interfaz.

---

# Flujo de actualización

```text
ProductCard

↓

AddToMesaButton

↓

Store

↓

Drawer

↓

Resumen

↓

WhatsApp
```

La interfaz nunca modifica el estado directamente.

Siempre utiliza acciones del store.

---

# Persistencia

La arquitectura debe permitir persistencia futura.

Versión inicial:

- LocalStorage.

La implementación deberá ser transparente para los componentes.

---

# Integración con Product

El store sólo guarda `productId`.

Toda la información restante se obtiene desde el Product Domain.

Esto evita inconsistencias cuando un producto cambia.

---

# Integración con WhatsApp

WhatsApp nunca consulta el catálogo.

Recibe exclusivamente el contenido de Mi Mesa.

Será responsabilidad del módulo de integración transformar el estado en un mensaje legible.

---

# Reglas de negocio

- No puede existir un producto repetido.
- La cantidad mínima es uno.
- La cantidad máxima podrá definirse en futuras versiones.
- Las notas pertenecen al `MesaItem`.
- El orden de los productos respeta el orden de incorporación.

---

# Escalabilidad

La arquitectura permite incorporar sin romper el store:

- favoritos;
- promociones;
- descuentos;
- packs;
- productos sugeridos;
- validaciones de stock;
- sincronización con backend.

---

# Responsabilidades

El store es responsable de:

- administrar la selección;
- exponer acciones;
- calcular valores derivados;
- mantener consistencia.

No es responsable de:

- renderizar componentes;
- navegar;
- abrir o cerrar drawers;
- enviar mensajes;
- mostrar notificaciones.

---

# Definition of Done

La arquitectura estará correctamente implementada cuando:

- exista un único store;
- todos los componentes consuman ese store;
- no existan estados duplicados;
- los cálculos sean derivados;
- la interfaz permanezca desacoplada de la lógica.

---

# Filosofía

Mi Mesa debe sentirse ligera, rápida y predecible.

La complejidad pertenece al dominio, no a la interfaz.

Los componentes muestran información.

El store toma decisiones.

Esa separación permite que Lupinos evolucione sin aumentar la deuda técnica.