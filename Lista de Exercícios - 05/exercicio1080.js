/* Exercício 1080 - Falta uma parte... :)
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.
Entrada

O arquivo de entrada contém 100 números inteiros, positivos e distintos.
Saída

Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
*/

// Falta a segunda parte: "posição do maior valor"
function randomizerValues(max, min) {
    for (var num = 0; num <= max; num++) {
        var numbers = Math.random() * (max - min) + min;
        console.log(numbers.toFixed(0));
    }
    
    var highValue = Math.max(min, max);
    console.log(`O maior valor é: ${highValue}`);
}

randomizerValues(100, 0);
