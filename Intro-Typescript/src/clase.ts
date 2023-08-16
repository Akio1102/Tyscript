class Astronauta {
  /*     public id:number;
    public nombre:string;
    public record:string; */
  constructor(
    public readonly id: number,
    public nombre: string,
    private _record: string
  ) {
    /*     this.id = id,
    this.nombre = nombre,
    this.record = record */
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

console.log(astro1);
console.log(`Record ${astro1.record}`);
console.log(astro1.recompensa(astro1.record));
