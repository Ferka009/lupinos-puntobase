# Product Collections Strategy v1.0

> Estrategia de colecciones para Lupinos 2.0.
>
> Las colecciones no organizan productos. Organizan experiencias.

---

# Objetivo

Crear una forma más humana e inspiradora de descubrir los productos de Lupinos.

En lugar de obligar al usuario a navegar únicamente por categorías técnicas, Lupinos presenta selecciones que cuentan una historia y ayudan a decidir qué compartir en la mesa.

---

# Filosofía

Las personas no suelen pensar:

> "Quiero una pasta de la categoría X."

Piensan:

- "Hoy quiero darme un gusto."
- "Necesito algo para una cena especial."
- "Busco algo para compartir."
- "Quiero probar algo distinto."

Las colecciones responden a esas intenciones.

---

# Categorías vs Colecciones

## Categorías

Las categorías describen qué es un producto.

Ejemplos:

- Pastas rellenas
- Pastas clásicas
- Salsas
- Prepizzas

Son funcionales.

Sirven para organizar.

---

## Colecciones

Las colecciones describen cuándo, cómo o por qué elegir un producto.

Ejemplos:

- Favoritos de Lupinos
- Para compartir
- Sabores intensos
- Edición especial
- Recomendados de la temporada

Son emocionales.

Sirven para inspirar.

---

# Principios

## Inspirar antes de filtrar

La primera experiencia no debe ser un listado interminable de productos.

Debe invitar a explorar.

---

## Curaduría

Cada colección representa una selección realizada por Lupinos.

No son agrupaciones automáticas.

Transmiten confianza.

---

## Pocas colecciones

Menos es más.

Idealmente entre cuatro y seis colecciones visibles.

---

## Evolución constante

Las colecciones pueden cambiar sin modificar la estructura del catálogo.

Esto permite destacar productos según la temporada, campañas o novedades.

---

# Colecciones iniciales

## Favoritos de Lupinos

Los productos más representativos de la marca.

Es la colección principal.

---

## Para compartir

Productos ideales para reuniones familiares o con amigos.

Comunican abundancia y encuentro.

---

## Especialidades de la casa

Sabores que diferencian a Lupinos.

Transmiten identidad.

---

## Sabores intensos

Productos con rellenos o combinaciones más marcadas.

Pensados para quienes buscan experiencias gastronómicas diferentes.

---

## Ediciones especiales

Productos disponibles por tiempo limitado.

Generan expectativa y novedad.

---

# Relación con Product

Un producto puede pertenecer a varias colecciones.

Ejemplo:

```text id="hm92xg"
Raviolones de Roast Beef

Categoría:
Pastas rellenas

Colecciones:
✓ Favoritos de Lupinos
✓ Para compartir
✓ Sabores intensos
```

Las colecciones no reemplazan a las categorías.

Las complementan.

---

# Reglas

- Toda colección debe tener una intención clara.
- Debe incluir únicamente productos relevantes.
- No debe existir una colección vacía.
- Un producto puede pertenecer a múltiples colecciones.
- Las colecciones nunca modifican los datos del producto.

---

# Representación visual

Cada colección podrá incluir:

- Nombre
- Descripción breve
- Imagen destacada
- Productos relacionados

No es obligatorio que todas tengan una imagen propia.

---

# Integración con la Landing

Las colecciones serán una de las primeras formas de exploración dentro de la Landing.

Orden sugerido:

```text id="tvqjdb"
Hero

↓

Especialidades

↓

Colecciones

↓

Carta completa

↓

Mi Mesa
```

De esta forma, el usuario descubre primero una selección curada antes de enfrentarse al catálogo completo.

---

# Integración con Carta

Dentro de `/carta`, las colecciones funcionarán como accesos rápidos para explorar productos relacionados.

Las categorías seguirán disponibles como sistema de organización principal.

---

# Evolución futura

El modelo permite incorporar nuevas colecciones sin modificar la arquitectura.

Ejemplos:

- Recomendados por el chef
- Productos de temporada
- Favoritos de los clientes
- Menú del fin de semana
- Especiales para congelar

---

# Definición final

Las categorías ayudan a encontrar un producto.

Las colecciones ayudan a elegirlo.

En Lupinos, las personas no recorren un catálogo.

Recorren historias, momentos y sabores que invitan a compartir una buena mesa.