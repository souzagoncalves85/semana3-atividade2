
//Algoritmo 1

//uma constante que recebe uma lista de numeros
const tamanho = prompt('1,2,3,4,5');
const lista = new Array(tamanho).fill(null);//cria uma constante lista que recebe um novo array usando o metodo fill 
lista

//cria uma função map
 .map(function (item, index) {
   return index + 1;//retorna o índice mais 1.
 })
 .reduce(function (acumulador, item) {
   return acumulador * item;
 });


new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);