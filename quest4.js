const alunos = [
  { nome: "Ana", media: 8.5 },
  { nome: "Bruno", media: 6 },
  { nome: "Carla", media: 9 },
  { nome: "Davi", media: 5.5 }
];

const alunoAbaixoDaMedia = alunos.find(aluno => aluno.media < 7);
console.log(alunoAbaixoDaMedia.nome);

const temNotaExcelente = alunos.some(aluno => aluno.media >= 9);
console.log(temNotaExcelente);

const todosAprovados = alunos.every(aluno => aluno.media >= 7);
console.log(todosAprovados);