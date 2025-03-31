import { Animal } from './animal';

export class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return 'Guau!';
    }
}

export class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return 'Miau!';
    }
}

export class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return 'Muu!';
    }
}
