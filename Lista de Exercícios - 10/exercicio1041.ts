/* Exercício 1041
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
Entrada

A entrada contem as coordenadas de um ponto.
Saída

A saída deve apresentar o quadrante em que o ponto se encontra.
*/

class Coordinates {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      (this.x = x), (this.y = y);
    }
  
    calculateCoordinates() {
      if (this.x > 0 && this.y > 0) {
        console.log("Q1");
      } else if (this.x < 0 && this.y > 0) {
        console.log("Q2");
      } else if (this.x < 0 && this.y < 0) {
        console.log("Q3");
      } else if (this.x > 0 && this.y < 0) {
        console.log("Q4");
      } else {
        console.log("Origem");
      }
    }
  }
  
  const coordinates = new Coordinates(4.5, -2.2);
  coordinates.calculateCoordinates();
  
