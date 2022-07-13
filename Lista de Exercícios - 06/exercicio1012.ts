function calcularArea(a: number, b: number, c: number) {
    var areaTriangulo = (a * c) / 2;
    var areaCirculo = 3.14159 * (c * c);
    var areaTrapezio = (b + a) * c / 2;
    var areaQuadrado = b * b;
    var areaRetangulo = a * b;
    
    console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
    console.log(`CÍRCULO: ${areaCirculo.toFixed(3)}`);
    console.log(`TRAPÉZIO: ${areaTrapezio.toFixed(3)}`);
    console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
    console.log(`RETÂNGULO: ${areaRetangulo.toFixed(3)}`);
}

calcularArea(3.0, 4.0, 5.2);