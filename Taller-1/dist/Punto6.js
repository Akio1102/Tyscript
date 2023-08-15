"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function cantidad(numEstudiantes) {
    const estudiantes = [];
    for (let i = 0; i < numEstudiantes; i++) {
        const nombre = readlineSync.question(`Ingrese el nombre del Estudiante ${i + 1}: `);
        const sexo = readlineSync.question(`Ingrese el sexo del Estudiante ${nombre}: `);
        const nota = parseFloat(readlineSync.question(`Ingrese la nota definitiva del Estudiante ${nombre}: `));
        const estudiante = { nombre, sexo, nota };
        estudiantes.push(estudiante);
    }
    return estudiantes;
}
const numEstudiantes = parseInt(readlineSync.question("Ingrese el número de Estudiantes: "));
const estudiantes = cantidad(numEstudiantes);
estudiantes.sort((a, b) => b.nota - a.nota);
const MayorNota = estudiantes[0];
const MenorNota = estudiantes[estudiantes.length - 1];
let masculinos = 0;
let femeninos = 0;
estudiantes.forEach((element) => {
    if (element.sexo === "Masculino")
        masculinos++;
    if (element.sexo === "Femenino")
        femeninos++;
});
console.log(`El estudiante con mayor nota definitiva es: ${MayorNota.nombre}.
Y el Estudiante con menor nota definitiva es: ${MenorNota.nombre}
Cantidad de Mujeres en Números es ${femeninos}
Cantidad de Hombres en Números es ${masculinos}
`);
