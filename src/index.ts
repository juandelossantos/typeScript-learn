console.log("Hola Antonio");
console.log("otro console");

// Declaración de variables

let nombre: string = "David";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`); // Template string

const PI: number = 3.1416;

let listaTareas: string[] = ["Tarea 1", "Tarea 2"];
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

enum Estados {
  "Completado",
  "Incompleto",
  "Pendiente",
}

let estadoTareas: Estados = Estados.Completado;
console.log(estadoTareas);

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 10,
};

console.log(`Tarea: ${tarea1.nombre}`);

type Producto = {
  precio: number;
  nombre: string;
};

let carro: Producto = {
  nombre: "Audi",
  precio: 43000000,
};

console.log(`Producto: ${carro.nombre}`);

// Funciones

function saludar() {
  console.log("Hola Mundo");
}

/**
 * Función que muestra uns saludo por consola
 * @param nombre  Nombre de la persona
 */
function saludarPersona(nombre: string) {
  console.log(`Hola ${nombre}`);
}

saludarPersona("David");

function casa(nombre: number) {
  console.log(nombre);
}

casa(22);

function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Carmen Sofía", "Sierra Marciales");

console.log(nombreCompleto);

/**
 * muestra por consola los nombres de un array dado.
 * @param nombres es un array de nombres
 */
function ejemploMultipleParams(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultipleParams("david", "emilio", "sierra", "puentes");
ejemploMultipleParams("Sandra", "Sofía");
