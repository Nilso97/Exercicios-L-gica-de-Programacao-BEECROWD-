function tabuada(value) {
    for (var num = 1; num <= 10; num++) {
        var result = num * value;
        
        console.log(`${num} x ${value} = ${result}`);
    }
}

tabuada(140);