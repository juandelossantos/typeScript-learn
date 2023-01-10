// Declaración de variables

import { workerData } from "worker_threads";

var nombre: string = "David";
// console.log("Hola " + nombre);
// console.log(`Hola ${nombre}`); // Template string

const PI: number = 3.1416;

let listaTareas: string[] = ["Tarea 1", "Tarea 2"];
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

enum Estados {
  "Completado",
  "Incompleto",
  "Pendiente",
}

let estadoTareas: Estados = Estados.Completado;
// console.log(estadoTareas);

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

// console.log(`Tarea: ${tarea1.nombre}`);

type Producto = {
  precio: number;
  nombre: string;
};

let carro: Producto = {
  nombre: "Audi",
  precio: 43000000,
};

// console.log(`Producto: ${carro.nombre}`);

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

/**
 * Función para despedir persona por consola
 * @param nombre Nombre de la persona a despedir, por defecto será "humano"
 */
function despedirPersona(nombre: string = "humano") {
  console.log(`Adiós, ${nombre}!`);
}

despedirPersona();
despedirPersona("David");

/**
 * Funcion que retorna una cadena de texto con los parámetros dados
 * @param nombre
 * @param apellidos
 * @returns Cadena de texto con los parametros concatenados
 */
function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("David", "Sierra");

console.log(nombreCompleto);

// Arrow Functions

type Empleado = {
  nombre: string;
  apellido: string;
  edad: number;
};

let empleado: Empleado = {
  nombre: "David",
  apellido: "Sierra",
  edad: 43,
};

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} ${empleado.apellido} ${empleado.edad}`;

console.log(mostrarEmpleado(empleado));

// Funciones Asíncronas

const tareaDemorada = () => {
  setTimeout(() => {
    console.log("tarea en proceso...");
  }, 300);
};

async function ejemploAsync(): Promise<string> {
  await tareaDemorada();
  console.log("tarea completada");
  return "completado";
}

ejemploAsync()
  .then((respuesta) => {
    console.log("respuesta: ", respuesta);
  })
  .catch((error) => console.log("Hay un error"))
  .finally(() => console.log("promesa terminada"));

// Funciones generadoras

function* ejemploGenerator() {
  //yield --> para emitir valores
  let index = 0;
  while (index < 5) {
    //Emite un valor incrementado
    yield index++;
  }
}

// guardamos la función en un avariable.

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);

// Worker - Watcher

function* watcher(valor: number) {
  yield valor; // emitimos el valor incial
  yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
  yield valor + 10; // Emitimos el valor final
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(`saga: ${generatorSaga.next().value}`); // watcher
console.log(`saga: ${generatorSaga.next().value}`); // worker
console.log(`saga: ${generatorSaga.next().value}`); // worker
console.log(`saga: ${generatorSaga.next().value}`); // worker
console.log(`saga: ${generatorSaga.next().value}`); // watcher

console.log("casa");

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
