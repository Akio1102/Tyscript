"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(id, camper, tipo) {
        this.id = id;
        this.camper = camper;
        this.tipo = tipo;
    }
    typeContract(contrado) {
        if (contrado == "Presencial" || contrado == "Remoto") {
            this.tipo = contrado;
        }
        else {
            console.log("Tipo contrato no valido");
        }
    }
    validador() {
        if (this.camper.stateNivel === "En Proceso") {
            console.log("No se puede efectuar el contrato");
            this.tipo = "Inactivo";
        }
        else {
            console.log("Esta Contatado");
        }
    }
}
exports.default = default_1;
