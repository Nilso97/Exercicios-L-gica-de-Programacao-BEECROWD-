function calculate(raio: number) {
    const calc = (4/3.0) * 3.14159 * Math.pow(raio, 3);
    console.log(`VOLUME = ${calc.toFixed(3)}`);
}

calculate(1523);