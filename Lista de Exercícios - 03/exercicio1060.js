/* Exercício 1060
Faça um programa que mostre os números pares entre 1 e 100, inclusive.
Entrada

Neste problema extremamente simples de repetição não há entrada.
Saída

Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
*/

var num = [7,-5, 6, -3.4, 4.6, 12];

function verifyValues(values) {
    result = num.filter(item => item > 0).length;
    return console.log(`${result} valores positivos`);
}

verifyValues(7,-5, 6, -3.4, 4.6, 12);
