var values: number[] = [4, 14, 123, 10, -25];

function inOutValues() {
    var positive = values.filter(num => num >= 0);
    
    var filterIn = positive.filter(value => value >= 10 && value <= 20);
    console.log(`${filterIn.length} in`);
    
    var filterOut = positive.filter(value => value < 10 || value > 20);
    console.log(`${filterOut.length} out`);
}

inOutValues();