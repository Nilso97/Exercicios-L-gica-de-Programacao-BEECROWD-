/* Exercício 1078
Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N
Entrada

A entrada contém um valor inteiro N (2 < N < 1000).
Saída

Imprima a tabuada de N, conforme o exemplo fornecido.
*/

function tabuada(value) {
    for (var num = 1; num <= 10; num++) {
        var result = num * value;
        
        console.log(`${num} x ${value} = ${result}`);
    }
}

tabuada(140);
