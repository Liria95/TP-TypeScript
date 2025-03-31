"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaca = exports.Gato = exports.Perro = void 0;
class Perro {
    constructor(nombre) {
        this.nombre = nombre;
    }
    gritar() {
        return 'Guau!';
    }
}
exports.Perro = Perro;
class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }
    gritar() {
        return 'Miau!';
    }
}
exports.Gato = Gato;
class Vaca {
    constructor(nombre) {
        this.nombre = nombre;
    }
    gritar() {
        return 'Muu!';
    }
}
exports.Vaca = Vaca;
