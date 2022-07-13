var nome = 'JOAO';
var salario = 500.00;

console.log(nome);
console.log(salario);

function calcularVendas(totalVendas) {
    return salario + totalVendas * (15 / 100);
}

const total = calcularVendas(1230.30);

console.log(total.toFixed(2));