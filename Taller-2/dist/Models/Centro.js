"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(id, nombre, direccion, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.cantidad = cantidad;
    }
    quantity(quant) {
        this.cantidad = quant;
    }
    Cantidad() {
        var _a;
        return `La cantidad de Campers es de ${(_a = this.cantidad) === null || _a === void 0 ? void 0 : _a.length} en el centro ${this.nombre}`;
    }
}
exports.default = default_1;
