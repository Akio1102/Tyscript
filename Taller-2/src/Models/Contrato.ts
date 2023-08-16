import Camper from "./Camper";

export default class {
  constructor(
    public id: number,
    public camper: Camper,
    public tipo: string
  ) {}

  typeContract(contrado:string){
    if(contrado == "Presencial"|| contrado == "Remoto"){
      this.tipo = contrado;  
    }else{
      console.log("Tipo contrato no valido");          
    }
}

  public validador():void{
    if (this.camper.stateNivel === "En Proceso") {
      console.log("No se puede efectuar el contrato");
      this.tipo = "Inactivo"
    }
    else{
      console.log("Esta Contatado");
    }
  }
}
