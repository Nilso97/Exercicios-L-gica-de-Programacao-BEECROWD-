/* Exercício 1015
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =
Entrada

O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.
Saída

Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

interface INumbers {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
  
  class Calculate implements INumbers {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  
    constructor(x1: number, y1: number, x2: number, y2: number) {
      (this.x1 = x1), (this.y1 = y1), (this.x2 = x2), (this.y2 = y2);
    }
  
    calculateForm() {
      const p1 = this.x2 - this.x1;
      const p2 = this.y2 - this.y1;
  
      const calc = Math.pow(p1, 2) + Math.pow(p2, 2);
      const result = Math.sqrt(calc).toFixed(4);
  
      console.log(`RESULTADO = ${result}`);
    }
  }
  
  const calculate = new Calculate(1.0, 7.0, 5.0, 9.0);
  calculate.calculateForm();
