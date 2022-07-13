// Forma 01
function descobrirAnimal(a, b, c) {
    if (a === 'vertebrado') {
        if (b === 'ave') {
            if (c === 'carnivoro') {
                console.log('Águia');
            }
            else if (a === 'vertebrado' && b === 'ave' && c === 'onivoro') {
                console.log('Pomba');
            }
        }
    }

    if (a === 'vertebrado') {
        if (b === 'mamifero') {
            if (c === 'onivoro') {
                console.log('Homem');
            }
            else if (a === 'vertebrado' && b === 'mamifero' && c === 'herbivoro') {
                console.log('Vaca');
            }
        }
    }

    if (a === 'invertebrado') {
        if (b === 'inseto') {
            if (c === 'hematofago') {
                console.log('Pulga');
            }
            else if (a === 'invertebrado' && b === 'inseto' && c === 'herbivoro') {
                console.log('Lagarta');
            }
        }
    }

    if (a === 'invertebrado') {
        if (b === 'anelideo') {
            if (c === 'hematofago') {
                console.log('Sanguessuga');
            }
            else if (a === 'invertebrado' && b === 'anelideo' && c === 'onivoro') {
                console.log('Minhoca');
            }
        }
    }
}

descobrirAnimal('vertebrado', 'mamifero', 'onivoro');


// Forma 2 - Simplificada
function descobrirAnimal(a, b, c) {
    if (a === 'vertebrado' && b === 'ave' && c === 'carnivoro') {
        console.log('Águia');
    }
    else if (a === 'vertebrado' && b === 'ave' && c === 'onivoro') {
        console.log('Pomba');
    }

    if (a === 'vertebrado' && b === 'mamifero' && c === 'onivoro') {
        console.log('Homem');
    }
    else if (a === 'vertebrado' && b === 'mamifero' && c === 'herbivoro') {
        console.log('Vaca');
    }

    if (a === 'invertebrado' && b === 'inseto' && c === 'hematofago') {
        console.log('Pulga');
    }
    else if (a === 'invertebrado' && b === 'inseto' && c === 'herbivoro') {
        console.log('Lagarta');
    }

    if (a === 'invertebrado' && b === 'anelideo' && c === 'hematofago') {
        console.log('Sanguessuga');
    }
    else if (a === 'invertebrado' && b === 'anelideo' && c === 'onivoro') {
        console.log('Minhoca');
    }
}

descobrirAnimal('invertebrado', 'anelideo', 'onivoro');
