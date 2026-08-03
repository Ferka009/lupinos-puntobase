# Navigation & Routing Architecture v1.0

> Arquitectura de navegación y rutas de Lupinos 2.0.
>
> Este documento define cómo se organiza la navegación de la aplicación, la jerarquía de páginas y las reglas que gobiernan el recorrido del usuario.

---

# Objetivo

Construir una navegación clara, rápida y consistente.

El usuario nunca debe sentirse perdido.

Cada pantalla debe acercarlo naturalmente al siguiente paso de la experiencia.

---

# Filosofía

La navegación de Lupinos no busca mostrar muchas páginas.

Busca contar una historia.

Cada sección prepara la siguiente.

Cada página tiene un propósito.

---

# Principios

## Navegación mínima

Mostrar únicamente las opciones necesarias.

Evitar menús extensos.

---

## Descubrimiento progresivo

El usuario descubre los productos de forma gradual.

No mostrar toda la información al mismo tiempo.

---

## Consistencia

El Header, Footer y las acciones principales deben mantenerse coherentes en toda la aplicación.

---

## Mobile First

Toda decisión de navegación debe diseñarse primero para dispositivos móviles.

---

# Arquitectura General

```text
/

│

├── Carta

│      ├── Colecciones

│      └── Producto

│

├── Mi Mesa

│

└── WhatsApp
```

La Landing representa el punto de entrada principal.

---

# Landing (/)

La Landing comunica la esencia de Lupinos.

Responsabilidades:

- presentar la marca;
- inspirar;
- mostrar productos destacados;
- invitar a explorar la carta.

Nunca intenta mostrar el catálogo completo.

---

# Carta (/carta)

La Carta reúne todos los productos disponibles.

Responsabilidades:

- exploración;
- búsqueda;
- filtros;
- colecciones.

Es el centro del dominio Product.

---

# Colecciones (/colecciones/[slug])

Cada colección posee una página propia.

Ejemplos:

```text
/colecciones/raviolones

/colecciones/pastas-clasicas

/colecciones/especialidades
```

Cada página contiene:

- descripción;
- productos;
- fotografía;
- contexto.

---

# Producto

En la versión 1.0 los productos se exploran mediante ProductCard.

No existe una página individual.

La arquitectura deberá permitir incorporarla en futuras versiones.

Ruta futura:

```text
/productos/[slug]
```

---

# Mi Mesa

Mi Mesa es un dominio persistente.

No representa una página principal.

Su interfaz será un Drawer en escritorio y una pantalla dedicada en dispositivos móviles.

Debe estar accesible desde cualquier lugar.

---

# WhatsApp

WhatsApp no pertenece a la navegación.

Representa la salida del flujo principal.

Siempre se accede desde Mi Mesa.

Nunca desde el menú principal.

---

# Header

El Header permanece visible durante toda la navegación.

Debe incluir:

- Logo.
- Carta.
- Historia.
- Contacto.
- Acceso a Mi Mesa.

El acceso a Mi Mesa debe mostrar la cantidad de productos seleccionados.

---

# Footer

El Footer contiene:

- información institucional;
- redes sociales;
- contacto;
- enlaces secundarios.

No debe duplicar el menú principal.

---

# Flujo principal

```text
Landing

↓

Carta

↓

Colección

↓

Producto

↓

Mi Mesa

↓

WhatsApp
```

Este es el recorrido principal del usuario.

---

# Flujo alternativo

Un usuario puede ingresar directamente a:

- una colección;
- la carta;
- un producto (futuro).

La experiencia debe mantenerse consistente.

---

# Navegación interna

La aplicación utilizará navegación del App Router de Next.js.

Siempre que sea posible se utilizarán transiciones sin recarga completa.

---

# Persistencia

Mi Mesa deberá mantenerse disponible durante toda la navegación.

Cambiar de página nunca debe vaciar el estado.

---

# Scroll

Cada cambio de ruta comienza desde el inicio de la página.

La Landing utilizará navegación por anclas únicamente dentro de la misma ruta.

Ejemplos:

```text
/#historia

/#colecciones

/#contacto
```

Las páginas independientes utilizarán navegación tradicional.

---

# Deep Linking

Toda página importante deberá poder compartirse mediante URL.

Ejemplos:

```text
/carta

/colecciones/raviolones
```

Esto facilita compartir productos y colecciones.

---

# Preparación para futuras versiones

La arquitectura contempla la incorporación de:

- productos individuales;
- recetas;
- blog;
- preguntas frecuentes;
- promociones;
- campañas estacionales.

Sin modificar la estructura principal.

---

# Responsabilidades

La arquitectura de navegación es responsable de:

- organizar las rutas;
- definir los puntos de entrada;
- mantener consistencia.

No es responsable de:

- renderizar componentes;
- administrar estado;
- gestionar datos.

---

# Definition of Done

La navegación estará correctamente implementada cuando:

- todas las rutas tengan un propósito claro;
- el recorrido principal sea intuitivo;
- Mi Mesa permanezca accesible;
- la experiencia sea consistente entre dispositivos.

---

# Filosofía

Una buena navegación pasa desapercibida.

El usuario no debería pensar cómo moverse.

Simplemente debería disfrutar descubriendo los productos y preparando su mesa.