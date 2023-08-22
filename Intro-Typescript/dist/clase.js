"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    /*     public id:number;
      public nombre:string;
      public record:string; */
    constructor(id, nombre, _record, mision = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this.mision = mision;
        /*     this.id = id,
        this.nombre = nombre,
        this.record = record */
    }
    getlauches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.spacexdata.com/v3/launches`;
            const { data } = yield axios_1.default.get(url);
            data.forEach((element, index) => {
                /*       console.log(index, element.mission_name);*/
                this.mision[index + 1] = element.mission_name;
            });
            console.log(this.mision);
            return this.mision;
        });
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
    recompensa(record) {
        return record === "Artemis"
            ? `${this.nombre} Gano 500 millones`
            : "No hay record";
    }
}
const astro1 = new Astronauta(1, "Julian", "techo");
astro1.record = "Artemis";
astro1.getlauches();
console.log(astro1);
console.log(`Record ${astro1.record}`);
console.log(astro1.recompensa(astro1.record));
class Detalles {
    constructor(nombre, descripcion, fechacreacion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechacreacion = fechacreacion;
    }
    get year() {
        return this.fechacreacion.getFullYear();
    }
}
class Cohete extends Detalles {
    constructor(orbita, nombre, descripcion, fechacreacion) {
        super(nombre, descripcion, fechacreacion);
        this.orbita = orbita;
    }
}
let falcon1 = new Cohete("luz", "falcon1", "Super Cohete de Elon", new Date());
console.log(falcon1.year);
class Tiposcohetes extends Detalles {
    constructor(nombre, descripcion, fechacreacion) {
        super(nombre, descripcion, fechacreacion);
        this.cohetes = [];
    }
    agregarCohete(cohete) {
        this.cohetes.push(cohete);
    }
}
let tiposcohetes = new Tiposcohetes("falcon", "Falcon de SpaceX", new Date());
tiposcohetes.agregarCohete(falcon1);
console.log(falcon1, tiposcohetes);
