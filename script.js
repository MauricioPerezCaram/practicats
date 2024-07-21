"use strict";
// const nombre: string = "Mauricio";
// let edad: number = 27;
// edad = 28;
// const apellidos: string[] = ["Perez", "Caram"];
// enum Colores {
//   Rojo = "rojo",
//   Verde = "verde",
// }
let dev = {
    nombre: "Mauricio",
    tecnologias: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODEJS"],
    experiencia: 1,
    fachero: true,
};
let dev2 = {
    nombre: "Alfred",
    tecnologias: ["Python"],
    fachero: null,
};
function enviarCurriculum(progrador) {
    console.log(`Este Cv es de ${progrador.nombre}`);
}
enviarCurriculum(dev);
