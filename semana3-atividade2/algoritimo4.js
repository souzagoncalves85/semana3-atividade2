//Algoritmo 4


//cria uma array de objetos que recebe uma lista de nome, salario e departamento
const funcionarios = [
 { nome: 'João', salario: 30000, departamento: 'TI' },
 { nome: 'Janete', salario: 70000, departamento: 'RH' },
 { nome: 'Sofia', salario: 100000, departamento: 'RH' },
];
//cria uma constante funcionáriosPorDepartamento onde recebe o metodo reduce para aplicar uma operaçao a cada elemento da lista
const funcionariosPorDepartamento = funcionarios.reduce(
 (acumulador, funcionario) => {
   const departamento = funcionario.departamento;
 

   //recebe o parametro acumulador

   //armazena o valor acumulador ao departamento
   if (!acumulador[departamento]) {
     acumulador[departamento] = [];
   }
   acumulador[departamento].push(funcionario);
   return acumulador;
 },
 {},
);
//cria uma constante mediaSalarioPorDepartamento onde recebe um objeto.Keys'lista de funcionarios por departamento usando o metodo map.. e o reduce reduz reduz esta lista 
const mediasSalarioPorDepartamento = Object.keys(
 funcionariosPorDepartamento,
).map((departamento) => {
 const total = funcionariosPorDepartamento[departamento].reduce(
   (acumulador, funcionario) => acumulador + funcionario.salario,
   0,
 );
 //retorna nome do departamento, média total por departamento,
 return {
   departamento: departamento,
   media: total / funcionariosPorDepartamento[departamento].length,
 };
});



//cria uma constante que recebe as médiasSalariosPoedepartamento maior que 65000 usando o metodo filter.
const maioresPagamentos = mediasSalarioPorDepartamento.filter(
 (departamento) => departamento.media > 65000,
);
