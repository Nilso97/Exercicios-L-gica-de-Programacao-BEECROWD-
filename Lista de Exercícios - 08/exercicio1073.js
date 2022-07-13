function calcularQuadrado(valor) {
    for (let num = 1; num <= valor; num++) {
        if (num % 2 === 0) {
            var total = num * num;
            console.log(`${num}^2 = ${total}`);
        }
    }
}

calcularQuadrado(6);