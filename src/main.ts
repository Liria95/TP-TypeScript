// 📌 1. Crear una interfaz Animal con nombre, gritar() e imagenUrl
interface Animal {
  nombre: string;
  gritar(): string;
  imagenUrl: string;
}

// 📌 2. Implementar 3 clases concretas que implementen Animal
class Perro implements Animal {
  imagenUrl: string;
  constructor(public nombre: string) {
    this.imagenUrl = "./imagenes/perro.png";
  }
  gritar(): string {
    return "Guau!";
  }
}

class Gato implements Animal {
  imagenUrl: string;
  constructor(public nombre: string) {
    this.imagenUrl = "./imagenes/gato.png";
  }
  gritar(): string {
    return "Miau!";
  }
}

class Vaca implements Animal {
  imagenUrl: string;
  constructor(public nombre: string) {
    this.imagenUrl = "./imagenes/vaca.png";
  }
  gritar(): string {
    return "Muu!";
  }
}

// 📌 [Aporte propio] - Mostrar mensajes con imagen en el DOM
function imprimirEnHTML(mensaje: string): void {
  const salida = document.getElementById("salida");
  if (salida) {
    const div = document.createElement("div");
    div.className = "tarjeta";

    const p = document.createElement("p");
    p.textContent = mensaje;

    const img = document.createElement("img");
    img.width = 80;

    if (mensaje.includes("Hoy es")) {
      img.src = "./imagenes/miercoles.png";
      img.alt = "Calendario";
    } else if (mensaje.includes("Messi")) {
      img.src = "./imagenes/messi.png";
      img.alt = "Messi";
    } else if (mensaje.includes("Número removido: 100")) {
      img.src = "imagenes/100.png";
      img.alt = "Número";
    } else if (mensaje.includes("10")) {
      img.src = "imagenes/10.png";
      img.alt = "Número 10";
    } else if (mensaje.includes("String removido")) {
      img.src = "imagenes/uno.png";
      img.alt = "Texto";
    }

    div.appendChild(p);
    if (img.src) div.appendChild(img);

    salida.appendChild(div);
  }
}

// 📌 [Aporte propio] - Mostrar descripción completa del animal
function describirAnimal(animal: Animal): void {
  const salida = document.getElementById("salida");
  if (salida) {
    const div = document.createElement("div");
    div.className = "tarjeta";

    const nombre = document.createElement("h3");
    nombre.textContent = animal.nombre;

    const sonido = document.createElement("p");
    sonido.textContent = `Hace: ${animal.gritar()}`;

    const imagen = document.createElement("img");
    imagen.src = animal.imagenUrl;
    imagen.alt = animal.nombre;
    imagen.width = 100;

    div.appendChild(nombre);
    div.appendChild(sonido);
    div.appendChild(imagen);

    salida.appendChild(div);
  }
}

// 📌 [Aporte propio] - Mostrar cualquier dato removido con icono ❌
function mostrarRemovidoConIcono(texto: string, imagenSrc: string, alt: string): void {
  const salida = document.getElementById("salida");
  if (salida) {
    const div = document.createElement("div");
    div.className = "tarjeta removido";

    const p = document.createElement("p");
    p.textContent = texto;

    const imagen = document.createElement("img");
    imagen.src = imagenSrc;
    imagen.alt = alt;
    imagen.width = 80;

    const icono = document.createElement("span");
    icono.textContent = "❌";
    icono.className = "icono-removido";

    div.appendChild(p);
    div.appendChild(imagen);
    div.appendChild(icono);

    salida.appendChild(div);
  }
}

// 📌 5. Instanciar los 3 animales
const perro: Animal = new Perro("Beethoven");
const gato: Animal = new Gato("Garfield");
const vaca: Animal = new Vaca("Lola");

// 📌 6. Mostrar animales por pantalla
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

// 📌 7. Enum con días de la semana
enum DiasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miércoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sábado = "Sábado",
  Domingo = "Domingo"
}

// 📌 Mostrar uno de los días usando enum
imprimirEnHTML(`Enum: Hoy es ${DiasSemana.Miércoles}`);

// 📌 8. Declarar variable de tipo union (number | string)
let variable: number | string = "Messi";
imprimirEnHTML(`Variable inicial: ${variable}`);
variable = 10;
imprimirEnHTML(`Variable modificada: ${variable}`);

// 📌 9. Crear interfaz genérica Fila<T>
interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}

// 📌 10. Implementar clase genérica FilaGenerica<T>
class FilaGenerica<T> implements Fila<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
  }

  remover(): T | undefined {
    return this.elementos.shift();
  }
}

// 📌 11. Crear 3 filas para diferentes tipos de datos
const filaNumeros = new FilaGenerica<number>();
const filaStrings = new FilaGenerica<string>();
const filaAnimales = new FilaGenerica<Animal>();

// 📌 12. Agregar elementos a las filas
filaNumeros.agregar(100);
filaNumeros.agregar(200);
filaNumeros.agregar(300);

filaStrings.agregar("Uno");
filaStrings.agregar("Dos");
filaStrings.agregar("Tres");

filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

// 📌 13. Remover y mostrar cada tipo de dato
const removidoNumero = filaNumeros.remover();
const removidoString = filaStrings.remover();
const removidoAnimal = filaAnimales.remover();

// 📌 [Aporte propio] - Mostrar número y string removido con ❌ e imagen
if (removidoNumero === 100) {
  mostrarRemovidoConIcono("Número removido: 100", "imagenes/100.png", "Número");
}

if (removidoString === "Uno") {
  mostrarRemovidoConIcono("String removido: Uno", "imagenes/uno.png", "Texto");
}

// 📌 14. Mostrar info del animal removido
if (removidoAnimal) {
  const salida = document.getElementById("salida");
  if (salida) {
    const div = document.createElement("div");
    div.className = "tarjeta removido";

    const titulo = document.createElement("h3");
    titulo.textContent = `Removido: ${removidoAnimal.nombre}`;

    const sonido = document.createElement("p");
    sonido.textContent = `Hizo: ${removidoAnimal.gritar()}`;

    const imagen = document.createElement("img");
    imagen.src = removidoAnimal.imagenUrl;
    imagen.alt = removidoAnimal.nombre;
    imagen.width = 100;

    const iconoX = document.createElement("span");
    iconoX.textContent = "❌";
    iconoX.className = "icono-removido";

    div.appendChild(titulo);
    div.appendChild(sonido);
    div.appendChild(imagen);
    div.appendChild(iconoX);

    salida.appendChild(div);
  }
}
