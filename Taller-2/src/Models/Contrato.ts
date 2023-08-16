import Camper from "./Camper";

export default class {
  constructor(
    public id: number,
    public camper: Camper[],
    public tipo: string
  ) {}

  public contar() {
    let remoto = 0;
    let presencial = 0;
    let hibrido = 0;
    this.camper.forEach((element) => {
      if (element.stateNivel === "remoto") remoto++;
      if (element.stateNivel === "presencial") presencial++;
      if (element.stateNivel === "hibrido") hibrido++;
    });
  }
}
