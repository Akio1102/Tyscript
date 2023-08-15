import * as readlineSync from 'readline-sync';

let valores: number[] = [];
let suma = 0;
 
while (true) {
    let valor = parseFloat(readlineSync.question('Ingrese un valor numerico y 0 para finalizar la ejecucción: '));
  
    if (valor === 0) break;
  
    valores.push(valor);
    suma += valor;
}
  
let cantidadValores = valores.length;
let promedio = suma / cantidadValores;
let mayorValor = Math.max(...valores);
let menorValor = Math.min(...valores);

console.log(`La sumatoria es: ${suma}`);
console.log(`El promedio es: ${promedio}`);
console.log(`Cantidad de numeros digitados: ${cantidadValores}`);
console.log(`Mayor : ${mayorValor}`);
console.log(`Menor : ${menorValor}`);
