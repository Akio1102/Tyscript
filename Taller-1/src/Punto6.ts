import * as readlineSync from "readline-sync";

interface Estudiante {
  nombre: string;
  sexo: string;
  nota: number;
}

function cantidad(numEstudiantes: number): Estudiante[] {
  const estudiantes: Estudiante[] = [];
  for (let i = 0; i < numEstudiantes; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del Estudiante ${i + 1}: `
    );
    const sexo = readlineSync.question(
      `Ingrese el sexo del Estudiante ${nombre}: `
    );
    const nota = parseFloat(
      readlineSync.question(
        `Ingrese la nota definitiva del Estudiante ${nombre}: `
      )
    );

    const estudiante: Estudiante = { nombre, sexo, nota };
    estudiantes.push(estudiante);
  }
  return estudiantes;
}

const numEstudiantes = parseInt(
  readlineSync.question("Ingrese el número de Estudiantes: ")
);

const estudiantes = cantidad(numEstudiantes);

estudiantes.sort((a, b) => b.nota - a.nota);

const MayorNota = estudiantes[0];
const MenorNota = estudiantes[estudiantes.length - 1];

let masculinos = 0;
let femeninos = 0;
estudiantes.forEach((element) => {
  if (element.sexo === "Masculino") masculinos++;
  if (element.sexo === "Femenino") femeninos++;
});

console.log(`El estudiante con mayor nota definitiva es: ${MayorNota.nombre}.
Y el Estudiante con menor nota definitiva es: ${MenorNota.nombre}
Cantidad de Mujeres en Números es ${femeninos}
Cantidad de Hombres en Números es ${masculinos}
`);
