/* Exercício 1059
Faça um programa que mostre os números pares entre 1 e 100, inclusive.
Entrada

Neste problema extremamente simples de repetição não há entrada.
Saída

Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
*/

function verifyValues() {
    for (var n = 1; n <= 100; n++) {
        if (n % 2 === 0) {
            console.log(n);
        }
    }
}

verifyValues();
