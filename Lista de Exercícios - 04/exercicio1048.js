/* Exercício 1048
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.
Entrada

A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
Saída

Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.
*/

// Forma 1
function calcularSalario(salario, percentual) {
    if (salario >= 0) {
        if (salario <= 400.00) {
            var aumento = (salario * percentual) / 100;
            var total = (aumento + salario).toFixed(2);
        }
    }

    if (salario >= 400.01) {
        if (salario <= 800.00) {
            var aumento = (salario * percentual) / 100;
            var total = (aumento + salario).toFixed(2);
        }
    }

    if (salario >= 800.01) {
        if (salario <= 1200.00) {
            var aumento = (salario * percentual) / 100;
            var total = (aumento + salario).toFixed(2);
        }
    }

    if (salario >= 1200.01) {
        if (salario <= 2000.00) {
            var aumento = (salario * percentual) / 100;
            var total = (aumento + salario).toFixed(2);
        }
    }

    if (salario > 2000.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }

    console.log(`Novo salário: ${total}`);
    console.log(`Reajuste de ganho: ${(aumento).toFixed(0)}`);
    console.log(`Em percentual: ${percentual}%`);
}


calcularSalario(800.01, 10);


// Forma 2 - Simplificada
function calcularSalario(salario, percentual) {
    if (salario >= 0 && salario <= 400.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }
    else if (salario >= 400.01 && salario <= 800.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }
    else if (salario >= 800.01 && salario <= 1200.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }
    else if (salario >= 1200.01 && salario <= 2000.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }
    else if (salario > 2000.00) {
        var aumento = (salario * percentual) / 100;
        var total = (aumento + salario).toFixed(2);
    }

    console.log(`Novo salário: ${total}`);
    console.log(`Reajuste de ganho: ${(aumento).toFixed(0)}`);
    console.log(`Em percentual: ${percentual}%`);
}


calcularSalario(2000.00, 7);
