// Tempo: 10h
// Velocidade: 85Km/h

function calcularCombustivel(tempo: number, velocidade: number) {
    var litros = (tempo * velocidade) / 12;
    
    return console.log(litros.toFixed(3));
}

calcularCombustivel(2, 92);


/* .js
function calcularCombustivel(tempo, velocidade) {
    var litros = tempo * velocidade / 12;
    
    console.log(litros.toFixed(3));
}

calcularCombustivel(10, 85);
*/