/* Exercício 1010
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
Entrada

O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.
Saída

A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

function calcularValor(n1, v1, n2, v2) {
    var calc1 = v1 * n1;
    var calc2 = v2 * n2;
    
    var total = calc1 + calc2;
    
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}

calcularValor(2, 15.30, 4, 5.20);
