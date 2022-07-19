/* Exercício 1038
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

Entrada

O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.
Saída

O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/

var cachorroQuente = 4.00;
var xSalada = 4.50;
var xBacon = 5.00;
var torradaSimples = 2.00;
var refrigerante = 1.50;

function calcularTotal(quantidade) {
    return total = xSalada * quantidade;
}

calcularTotal(3);

console.log('Total: R$ ' + total.toFixed(2));
