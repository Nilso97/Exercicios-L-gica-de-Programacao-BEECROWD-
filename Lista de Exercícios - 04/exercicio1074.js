function verifyValues(value) {
    if (value % 2 === 0) { 
        if (value > 0) { 
            console.log('EVEN POSITIVE');
        } else if (value < 0) {
            console.log('EVEN NEGATIVE');
        }
    } else if (value % 2) {
        if (value > 0) {
            console.log('ODD POSITIVE');
        } else { 
            console.log('ODD NEGATIVE');
        }
    }

    if (value === 0) {
        console.log('NULL');
    }
}

verifyValues(-10);