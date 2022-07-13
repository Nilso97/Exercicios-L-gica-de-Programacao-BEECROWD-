// Média Ponderada
function calcularMedia(a, b, c) {
    var pesoA = 2;
    var pesoB = 3;
    var pesoC = 5;
    
    var mp = (a * pesoA) + (b * pesoB) + (c * pesoC);
    var mediaFinal = mp / (pesoA + pesoB + pesoC);
    
    console.log(`MEDIA = ${mediaFinal.toFixed(1)}`);
}

calcularMedia(5.0, 6.0, 7.0);