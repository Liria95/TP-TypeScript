"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clases_1 = require("./clases");
// Función para describir el animal
function describirAnimal(animal) {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}
// Crear las instancias de los animales
const perro = new clases_1.Perro('Beethoven');
const gato = new clases_1.Gato('Garfield');
const vaca = new clases_1.Vaca('Lola');
// Ejecutar la función para describir los animales
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);
// Enum de días de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Lunes"] = "Lunes";
    DiasSemana["Martes"] = "Martes";
    DiasSemana["Mi\u00E9rcoles"] = "Mi\u00E9rcoles";
    DiasSemana["Jueves"] = "Jueves";
    DiasSemana["Viernes"] = "Viernes";
    DiasSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
console.log(DiasSemana.Lunes);
console.log(DiasSemana.Viernes);
// Variable que puede ser número o string
let variable = 'Messi';
console.log(variable);
variable = 10;
console.log(variable);
class FilaGenerica {
    constructor() {
        this.elementos = [];
    }
    agregar(elemento) {
        this.elementos.push(elemento);
    }
    remover() {
        return this.elementos.shift();
    }
}
// Crear filas
let filaNumeros = new FilaGenerica();
let filaStrings = new FilaGenerica();
let filaAnimales = new FilaGenerica();
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
