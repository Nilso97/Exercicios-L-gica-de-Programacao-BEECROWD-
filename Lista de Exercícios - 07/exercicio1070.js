function numbers(min, max) {
    for (var x = min; x <= max; x++) {
        if (x % 2) {
            console.log(x);
        }
    }
}

numbers(8, 20);