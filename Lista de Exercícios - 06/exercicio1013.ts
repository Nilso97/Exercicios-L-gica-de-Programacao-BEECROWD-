function calcularMaior(a: number, b: number, c: number) {
    if (a > b && a > c) { 
        console.log(`${a} é o maior`);
    } else if (b > a && b > c) { 
        console.log(`${b} é o maior`);
    } else if (c > b && c > a) {
        console.log(`${c} é o maior`);
    }
}

calcularMaior(7, 14, 106);