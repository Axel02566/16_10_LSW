const recebido = '{"produto":"Monitor","preco":900,"estoque":4}';
const produto = JSON.parse(recebido);

console.log(typeof produto);

produto.preco = produto.preco * 0.9; 
produto.estoque = produto.estoque - 1;

const jsonFinal = JSON.stringify(produto);

console.log(jsonFinal);
console.log(typeof jsonFinal);