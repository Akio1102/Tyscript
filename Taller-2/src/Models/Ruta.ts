import Centro from "./Centro";

export default class {
  constructor(
    public readonly id: number,
    public nombre: string,
    public descripcion: string,
    public centro: Centro
  ) {}
}
