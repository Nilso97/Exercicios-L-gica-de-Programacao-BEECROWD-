var values = [-5, 0, -3, -4, 12];

var par = values.filter(num => num % 2 === 0).length;
var impar = values.filter(num => num % 2).length;
var positivo = values.filter(num => num > 0).length;
var negativo = values.filter(num => num < 0).length;

function verifyValues() {
    if (par) {
        console.log(`${par} valor(es) par(es)`);
    }
    if (impar) {
        console.log(`${impar} valor(es) impar(es)`);
    }
    if (positivo) {
        console.log(`${positivo} valor(es) positivo(s)`);
    }
    if (negativo) {
        console.log(`${negativo} valor(es) negativo(s)`);
    }
}

verifyValues();