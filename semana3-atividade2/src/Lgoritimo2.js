//Algoritmo 2

//
const letras = [
 ['a', 'b', 'c'],
 ['c', 'd', 'f'],
 ['d', 'f', 'g'],
];


let resultado = letras.flat().reduce((objeto, numero) => {
 if (objeto[numero]) {
   objeto[numero] += 1;
 } else {
   objeto[numero] = 1;
 }
 return objeto;
}, {});
