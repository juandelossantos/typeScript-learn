"use strict";
console.log("Hola Antonio");
console.log("otro console");
// Declaración de variables
let nombre = "David";
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`); // Template string
const PI = 3.1416;
let listaTareas = ["Tarea 1", "Tarea 2"];
let valores = [false, "Hola", true, 56];
var Estados;
(function (Estados) {
    Estados[Estados["Completado"] = 0] = "Completado";
    Estados[Estados["Incompleto"] = 1] = "Incompleto";
    Estados[Estados["Pendiente"] = 2] = "Pendiente";
})(Estados || (Estados = {}));
let estadoTareas = Estados.Completado;
console.log(estadoTareas);
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10,
};
console.log(`Tarea: ${tarea1.nombre}`);
let carro = {
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
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarPersona("David");
function casa(nombre) {
    console.log(nombre);
}
casa(22);
