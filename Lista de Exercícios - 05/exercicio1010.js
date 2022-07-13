function calcularValor(n1, v1, n2, v2) {
    var calc1 = v1 * n1;
    var calc2 = v2 * n2;
    
    var total = calc1 + calc2;
    
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
}

calcularValor(2, 15.30, 4, 5.20);