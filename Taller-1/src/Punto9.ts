import * as readlineSync from "readline-sync";

interface Atleta {
  nombre: string,
  marca: number,
}

function cantidad(numAtletas: number): Atleta[] {
  const atletas: Atleta[] = [];
  for (let i = 0; i < numAtletas; i++) {
    let nombreAtleta = readlineSync.question(
      `Ingrese el nombre del atleta finalista ${i + 1}:`
    );
    let marca = parseFloat(
      readlineSync.question(
        `Ingrese la marca del salto en metros de el atleta ${nombreAtleta}: `
      )
    );
    const atleta: Atleta = {
      nombre: nombreAtleta,
      marca: marca,
    };
    atletas.push(atleta);
  }
  return atletas;
}

const numAtletas = parseInt(
  readlineSync.question("Ingrese el número de atletas finalistas: ")
);

const atletas = cantidad(numAtletas);

atletas.sort((a, b) => b.marca - a.marca);

const campeona = atletas[0];
console.clear()
console.log(
  `La atleta campeona es ${campeona.nombre} con una marca de ${
    campeona.marca
  } metros ${
    campeona.marca > 15.5
      ? "Rompio el record y es la ganadora de 500 millones"
      : ""
  }`
);

console.log("Ranking de las atletas:");
atletas.forEach((element, index) => {
  console.log(
    `Posicion ${index} Nombre ${element.nombre} Marca ${element.marca} metros`
  );
});
