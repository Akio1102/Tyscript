import axios from "axios";
import { APIResponse } from "./interfaces/api.Interface";

class Astronauta {
  /*     public id:number;
    public nombre:string;
    public record:string; */
  constructor(
    public readonly id: number,
    public nombre: string,
    private _record: string,
    public mision: string[] = []
  ) {
    /*     this.id = id,
    this.nombre = nombre,
    this.record = record */
  }

  async getlauches() {
    const url = `https://api.spacexdata.com/v3/launches`;
    const { data } = await axios.get<APIResponse[]>(url);

    data.forEach((element: any, index: number) => {
      /*       console.log(index, element.mission_name);*/
      this.mision[index + 1] = element.mission_name;
    });
    console.log(this.mision);
    return this.mision;
  }

  public set record(record: string) {
    this._record = record;
  }

  public get record(): string {
    return this._record;
  }

  public recompensa(record: string): string {
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
  constructor(
    public nombre: string,
    public descripcion: string,
    public fechacreacion: Date
  ) {}

  get year() {
    return this.fechacreacion.getFullYear();
  }
}

class Cohete extends Detalles {
  constructor(
    public orbita: string,
    nombre: string,
    descripcion: string,
    fechacreacion: Date
  ) {
    super(nombre, descripcion, fechacreacion);
  }
}

let falcon1 = new Cohete("luz", "falcon1", "Super Cohete de Elon", new Date());

console.log(falcon1.year);

class Tiposcohetes extends Detalles {
  public cohetes: Cohete[] = [];
  constructor(nombre: string, descripcion: string, fechacreacion: Date) {
    super(nombre, descripcion, fechacreacion);
  }
  agregarCohete(cohete: Cohete) {
    this.cohetes.push(cohete);
  }
}

let tiposcohetes = new Tiposcohetes("falcon", "Falcon de SpaceX", new Date());

tiposcohetes.agregarCohete(falcon1);

console.log(falcon1, tiposcohetes);
