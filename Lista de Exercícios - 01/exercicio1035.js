/* Exercício 1035
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
Entrada

Quatro números inteiros A, B, C e D.
Saída

Mostre a respectiva mensagem após a validação dos valores.
*/

function readValues(a, b, c, d) {
    if (b > c && d > a && (c + d) > (a + b) && (a & b) > 0 && a / 2) {
      console.log('Valores aceitos');
    } else { 
        console.log('Valores não aceitos');
        
    }
  }
  
  readValues(2, 6, 4, 8);
  //readValues(-2, -3, 2, 6);
