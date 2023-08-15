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
let valores = [];
let suma = 0;
while (true) {
    let valor = parseFloat(readlineSync.question('Ingrese un valor numerico y 0 para finalizar la ejecucción: '));
    if (valor === 0)
        break;
    valores.push(valor);
    suma += valor;
}
let cantidadValores = valores.length;
let promedio = suma / cantidadValores;
let mayorValor = Math.max(...valores);
let menorValor = Math.min(...valores);
console.log(`La sumatoria es: ${suma}`);
console.log(`El promedio es: ${promedio}`);
console.log(`Cantidad de numeros digitados: ${cantidadValores}`);
console.log(`Mayor : ${mayorValor}`);
console.log(`Menor : ${menorValor}`);
