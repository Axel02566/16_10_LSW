const funcionarios = [
  { nome: "Lia", setor: "TI" },
  { nome: "Rui", setor: "RH" },
  { nome: "Ana", setor: "TI" },
  { nome: "Caio", setor: "Vendas" }
];

const nomesTI = funcionarios
  .filter(func => func.setor === "TI") 
  .map(func => func.nome);            
console.log(nomesTI);

console.log(funcionarios.length);