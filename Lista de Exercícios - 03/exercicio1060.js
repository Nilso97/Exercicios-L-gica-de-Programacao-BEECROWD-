var num = [7,-5, 6, -3.4, 4.6, 12];

function verifyValues(values) {
    result = num.filter(item => item > 0).length;
    return console.log(`${result} valores positivos`);
}

verifyValues(7,-5, 6, -3.4, 4.6, 12);