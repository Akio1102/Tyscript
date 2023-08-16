import Camper from "./Camper";

export default class {
  constructor(
    public readonly id: number,
    public nombre: string,
    public direccion: string,
    public cantidad?: Camper[]
  ) {
  }

  public quantity(quant: Camper[]) {
    this.cantidad = quant;
  }

  public Cantidad():string{
    return `La cantidad de Campers es de ${this.cantidad?.length} en el centro ${this.nombre}`
  }
  
}
