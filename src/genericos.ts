// Ejemplo de función genérica en TypeScript
function mostrarElemento<T>(elemento: T): void {
    console.log(`Elemento: ${elemento}`);
}

mostrarElemento<string>("Hola TypeScript");
mostrarElemento<number>(123);
