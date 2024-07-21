// const nombre: string = "Mauricio";
// let edad: number = 27;
// edad = 28;
// const apellidos: string[] = ["Perez", "Caram"];
// enum Colores {
//   Rojo = "rojo",
//   Verde = "verde",
// }

// function sumar(a: number, b: number): number {
//   return a + b;
// }

// console.log(sumar(21, 2));

// function saludar(nombree: string, edadd?: number): string {
//   if (edadd !== undefined) {
//     return `Hola mi nombre es ${nombree} y mi edad es ${edadd}`;
//   } else {
//     return `Mi nombre es ${nombree}`;
//   }
// }

// console.log(saludar("Alfredito", 28));

// //-------------------

// let estudiasteJavascript: boolean = true;

// if (estudiasteJavascript) {
//   console.log("Podes estudiar TS");
// } else {
//   console.log("Primero ver JS");
// }

// //-------------------

// let interMiami: number = 11;
// let boca: number = 11;
// let messi: number = 1;
// let juegaMessi: boolean = false;

// let palabras: string = "Messi el mejor";

// function ganar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
//   let motivo: string = "";
//   if (juegaMessi) {
//     equipo1 += messi;
//     motivo = "porque juega Messi rey";
//   }
//   if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
//   if (equipo1 == equipo2) console.log("Empatan");
//   if (equipo1 < equipo2) console.log("Gana Boquita papa");
// }

// ganar(interMiami, boca, juegaMessi);

// // Con poner una variable que fue definida en string, si ponemos esa variable + . nos va a aparecer todos los metodos del tipo de dato que definimos
// console.log(palabras.length);

// //-------------------

// let disney: any;

// disney = "Star wars";

// console.log(disney);

// disney = 15000;

// console.log(disney);

// disney = true;

// console.log(disney);

// //-------------------

// let numeros: number[] = [1, 2, 3, 4, 5];

// let letras: string[] = ["a", "b", "c", "d", "e"];

// letras.push("z");
// console.log(letras);

// //-------------------
// let programador = {
//   nombre: "Mauricio",
//   tecnologias: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS"],
//   experiencia: 1,
//   fachero: true,
// };

// let programador2 = {
//   nombre: "Alfredo",
//   tecnologias: ["Mongo"],
//   experiencia: 21,
//   fachero: "Si",
// };

// console.log(programador.experiencia);

// //-------------------
// type Programador = {
//   nombre: string;
//   tecnologias: string[];
//   experiencia?: number;
//   fachero: boolean | null;
// };

// let programador: Programador = {
//   nombre: "Mauricio",
//   tecnologias: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS"],
//   experiencia: 1,
//   fachero: true,
// };

// let programado2: Programador = {
//   nombre: "Alfred",
//   tecnologias: ["Python"],
//   fachero: null,
// };

// //-------------------
// interface Programador {
//   nombre: string;
//   tecnologias: string[];
//   experiencia?: number;
//   fachero: boolean | null;
// }

// let dev: Programador = {
//   nombre: "Mauricio",
//   tecnologias: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS"],
//   experiencia: 1,
//   fachero: true,
// };

// let dev2: Programador = {
//   nombre: "Alfred",
//   tecnologias: ["Python"],
//   fachero: null,
// };

// function enviarCurriculum(progrador: Programador) {
//   console.log(`Este Cv es de ${progrador.nombre}`);
// }

// enviarCurriculum(dev);

// //-------------------
class Pelicula {
  nombre?: string;
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`${this.nombre} esta siendo proeyectada`);
  }
}
