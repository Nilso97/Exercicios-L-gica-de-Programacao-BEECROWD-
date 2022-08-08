/*
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/

const calculate = () => {
    let arrNums: number[] = [7, -5, 6, -4, 12];
    
    const filterNums = arrNums.filter((value) => value % 2 === 0);
    
    console.log(`${filterNums.length} valores pares`);
};

calculate();

