/* Exercício 1066
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.
Entrada

O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída

Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/

var values = [-5, 0, -3, -4, 12];

var par = values.filter(num => num % 2 === 0).length;
var impar = values.filter(num => num % 2).length;
var positivo = values.filter(num => num > 0).length;
var negativo = values.filter(num => num < 0).length;

function verifyValues() {
    if (par) {
        console.log(`${par} valor(es) par(es)`);
    }
    if (impar) {
        console.log(`${impar} valor(es) impar(es)`);
    }
    if (positivo) {
        console.log(`${positivo} valor(es) positivo(s)`);
    }
    if (negativo) {
        console.log(`${negativo} valor(es) negativo(s)`);
    }
}

verifyValues();
