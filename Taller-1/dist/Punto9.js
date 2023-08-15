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
function cantidad(numAtletas) {
    const atletas = [];
    for (let i = 0; i < numAtletas; i++) {
        let nombreAtleta = readlineSync.question(`Ingrese el nombre del atleta finalista ${i + 1}:`);
        let marca = parseFloat(readlineSync.question(`Ingrese la marca del salto en metros de el atleta ${nombreAtleta}: `));
        const atleta = {
            nombre: nombreAtleta,
            marca: marca,
        };
        atletas.push(atleta);
    }
    return atletas;
}
const numAtletas = parseInt(readlineSync.question("Ingrese el número de atletas finalistas: "));
const atletas = cantidad(numAtletas);
atletas.sort((a, b) => b.marca - a.marca);
const campeona = atletas[0];
console.clear();
console.log(`La atleta campeona es ${campeona.nombre} con una marca de ${campeona.marca} metros ${campeona.marca > 15.5
    ? "Rompio el record y es la ganadora de 500 millones"
    : ""}`);
console.log("Ranking de las atletas:");
atletas.forEach((element, index) => {
    console.log(`Posicion ${index} Nombre ${element.nombre} Marca ${element.marca} metros`);
});
