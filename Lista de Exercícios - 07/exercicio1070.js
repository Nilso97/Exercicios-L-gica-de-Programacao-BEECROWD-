/* Exercício 1070
Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.
Entrada

A entrada será um valor inteiro positivo.
Saída

A saída será uma sequência de seis números ímpares.
*/

function numbers(min, max) {
    for (var x = min; x <= max; x++) {
        if (x % 2) {
            console.log(x);
        }
    }
}

numbers(8, 20);
