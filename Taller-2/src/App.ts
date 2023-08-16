import Centro from "./Models/Centro";
import Ruta from "./Models/Ruta";
import Nivel from "./Models/Nivel";
import Camper from "./Models/Camper";
import Contrato from "./Models/Contrato";

const Campus = new Centro(1, "CampusLand", "Zona franca");
const Campus2 = new Centro(2, "CampusLand2", "Zona franca2");
const Campus3 = new Centro(3, "CampusLand3", "Zona franca3");
const Campus4 = new Centro(4, "CampusLand4", "Zona franca4");
const Campus5 = new Centro(5, "CampusLand5", "Zona franca5");

const Node = new Ruta(1, "Backend Node", "Dev Backend with Node", Campus);
const css = new Ruta(2, "FrontEnd Css", "Dev FrontEnd with Css", Campus2);
const NetCore = new Ruta(
  3,
  "Backend Net Core",
  "Dev Backend with Net-Core",
  Campus3
);
const SprintBoot = new Ruta(
  4,
  "Backend SpringBoot",
  "Dev Backend with SprintBoot",
  Campus4
);

const Django = new Ruta(
  5,
  "Backend Django",
  "Dev Backend with Django",
  Campus5
);

const M1 = new Nivel(1, "Sputnik", Node);
const M2 = new Nivel(2, "Sputnik", Node);
const V1 = new Nivel(3, "Artemis", Node);
const V2 = new Nivel(4, "Artemis", Node);
const J1 = new Nivel(5, "Apolo", NetCore);
const J2 = new Nivel(6, "Apolo", NetCore);

const Zharick = new Camper(1, "Zharick", V1);
const Akio = new Camper(2, "Akio", V1);
const Nicolas = new Camper(3, "Nicolas", V1);
const Amed = new Camper(4, "Amed", V1);
const Jean = new Camper(5, "Jean", M1);
const Julian = new Camper(6, "Julian", J1);
const Karen = new Camper(7, "Karen", J1);

const presencial = new Contrato(1, [Karen, Julian], "Presencial");
const remoto = new Contrato(2, [Amed, Jean], "Remeto");
const Hibidro = new Contrato(3, [Nicolas, Akio, Zharick], "Hibrido");
