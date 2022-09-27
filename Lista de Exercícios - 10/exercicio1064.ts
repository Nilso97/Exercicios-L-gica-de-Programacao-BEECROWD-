/**
 *
 * Exercício 1064
 *
 * @author: Nilso Junior
 * @since: 27/09/2022
 *
 *
 * Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.
 * Entrada
 *
 * A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.
 *Saída
 *
 *O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
 *
 */

var values: Array<number> = [7, -5, 6, -3.4, 4.6, 12];
var sum: number = 0;

function calculateValues(): void {
  var positiveArr: number[] = values.filter((val) => val >= 0);

  console.log(`${positiveArr.length} números positivos`);

  const mediaCalculate = (): void => {
    for (var val in positiveArr) {
      sum += positiveArr[val];
    }

    var media = sum / positiveArr.length;
    console.log(`Média: ${media}`);
  };

  mediaCalculate();
}

calculateValues();
