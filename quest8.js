const aplicarOperacao = (a, b, operacao) => operacao(a, b);
const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(aplicarOperacao(8, 2, somar));
console.log(aplicarOperacao(8, 2, multiplicar));
console.log(aplicarOperacao(8, 2, (a, b) => a - b));