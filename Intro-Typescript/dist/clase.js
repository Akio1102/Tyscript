"use strict";
class Astronauta {
    /*     public id:number;
      public nombre:string;
      public record:string; */
    constructor(id, nombre, _record) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        /*     this.id = id,
        this.nombre = nombre,
        this.record = record */
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
console.log(astro1);
console.log(`Record ${astro1.record}`);
console.log(astro1.recompensa(astro1.record));
