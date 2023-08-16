import Camper from "./Camper";

export default class {
  constructor(
    public readonly id: number,
    public nombre: string,
    public direccion: string,
    public cantidad?: Camper[]
  ) {}
}
