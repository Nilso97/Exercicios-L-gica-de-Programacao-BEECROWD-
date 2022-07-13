// Falta a segunda parte: "posição do maior valor"
function randomizerValues(max, min) {
    for (var num = 0; num <= max; num++) {
        var numbers = Math.random() * (max - min) + min;
        console.log(numbers.toFixed(0));
    }
    
    var highValue = Math.max(min, max);
    console.log(`O maior valor é: ${highValue}`);
}

randomizerValues(100, 0);