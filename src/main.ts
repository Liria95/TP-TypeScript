import { Perro, Gato, Vaca } from './clases';
import { Animal } from './animal';

// Función para describir el animal
function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// Crear las instancias de los animales
const perro: Animal = new Perro('Beethoven');
const gato: Animal = new Gato('Garfield');
const vaca: Animal = new Vaca('Lola');

// Ejecutar la función para describir los animales
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

// Enum de días de la semana
enum DiasSemana {
    Lunes = 'Lunes',
    Martes = 'Martes',
    Miércoles = 'Miércoles',
    Jueves = 'Jueves',
    Viernes = 'Viernes',
    Sábado = 'Sábado',
    Domingo = 'Domingo',
}

console.log(DiasSemana.Lunes);
console.log(DiasSemana.Viernes);

// Variable que puede ser número o string
let variable: number | string = 'Messi';
console.log(variable);
variable = 10;
console.log(variable);

// Fila genérica
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

// Crear filas
let filaNumeros = new FilaGenerica<number>();
let filaStrings = new FilaGenerica<string>();
let filaAnimales = new FilaGenerica<Animal>();

// Agregar elementos
filaNumeros.agregar(1);
filaStrings.agregar('uno');
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

// Remover elementos
console.log(filaNumeros.remover());
console.log(filaStrings.remover());
console.log(filaAnimales.remover());
