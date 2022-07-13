function bhaskaraForm(a, b, c) {
    var delta = (b ** 2) - 4 * a * c;
    
    if (a === 0 || delta < 0) {
        
        console.log("Impossivel calcular!");
        
    } else if (delta === 0 || delta > 0) {
        
        var r1 = (-b + Math.sqrt(delta)) / (2 * a);
        var r2 = (-b - Math.sqrt(delta)) / (2 * a);
        
        console.log(`R1 = ${r1.toFixed(5)}`);
        console.log(`R2 = ${r2.toFixed(5)}`);
    }
}

bhaskaraForm(10.3, 203.0, 5.0);
