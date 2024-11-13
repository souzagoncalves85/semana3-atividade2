//lgoritmo 3

//cria uma lista de objetos scom nomes e notas dos estudante
const estudantes = [
 { nome: 'Alice', notas: [100, 60, 92] },
 { nome: 'João', notas: [75, 30, 85] },
 { nome: 'Charles', notas: [90, 95, 85] },
 { nome: 'Paulo', notas: [100, 100, 100] },
];

//cria uma constante estudantesMedias onde recebe uma nova lista estudante utilizando o metodo reduce 'onde se obtem a soma total de tdas as notas do estudantes'
const estudantesMedias = estudantes.map((estudante) => {
 const total = estudante.notas.reduce((soma, nota) => soma + nota);
 let {nome} = estudante;//retorna o nome do estudante
 return { nome, media: total / estudante.notas.length };//retorna o nome, média total
});

//cria uma constante melhoresMedias onde recebe as melhore Médias dos estudantes usando o metodo filter
const melhoresMedias = estudantesMedias.filter(
 (student) => student.media > 90