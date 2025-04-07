# Trabajo Práctico - TypeScript

Este proyecto fue desarrollado como parte del trabajo práctico de TypeScript.

## Autoras
- **Liria Olivera**  
- **Marianela Dagatti**

## 🎯 Objetivo del Trabajo
Poner en práctica conceptos de TypeScript incluyendo:
- Interfaces
- Clases concretas
- Tipos genéricos
- Enums
- Tipos unión
- Manipulación del DOM (implementación adicional propia)

---

## ✅ Consignas Realizadas

1. **Crear una interfaz `Animal`**  
   Con tres propiedades: `nombre`, `gritar()` e `imagenUrl`.

2. **Implementar tres clases concretas**  
   `Perro`, `Gato` y `Vaca`, que implementan la interfaz `Animal`.

3. **Instanciar objetos de esas clases**  
   Se crean objetos `Beethoven`, `Garfield` y `Lola`.

4. **Mostrar la información de los animales**  
   Se imprime en el DOM el nombre, el sonido y la imagen correspondiente.

5. **Crear un Enum `DiasSemana`**  
   Representa los días de la semana. Se muestra uno de los valores.

6. **Variable con tipo unión (`number | string`)**  
   Se asigna un string y luego un número a una misma variable.

7. **Interfaz genérica `Fila<T>` y su implementación**  
   Se implementa `FilaGenerica<T>` con métodos `agregar` y `remover`.

8. **Crear filas para diferentes tipos de datos**  
   - `Fila<number>`
   - `Fila<string>`
   - `Fila<Animal>`

9. **Agregar y remover elementos de las filas**  
   Se remueven y muestran los valores en el HTML.

---

## 💡 Aportaciones propias (extras)

- ✅ **Impresión en HTML con estilos**  
  Se implementó una función personalizada `imprimirEnHTML()` para mostrar mensajes con imágenes ilustrativas.

- ✅ **Muestra visual de los animales con nombre, sonido e imagen**  
  Se creó una función `describirAnimal()` que imprime tarjetas visuales en el DOM.

- ✅ **Icono de "removido"**  
  Al remover un animal de la fila, se muestra con un ❌ y se estiliza visualmente para diferenciarlo.
