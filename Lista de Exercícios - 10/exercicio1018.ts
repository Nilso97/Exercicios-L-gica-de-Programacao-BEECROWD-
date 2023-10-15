// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
interface Calculate {
    calculateNotes(money: number, noteValue: number): number;
    decomposeCurrency(totalAmount: number): void
}

class AccountService implements Calculate {

    constructor() { }

    calculateNotes(money: number, noteValue: number): number {
        let notesCount = 0;
        while (true) {
            if (money >= noteValue) {
                money -= noteValue
                notesCount++
            } else {
                console.log(`${notesCount} nota(s) de R$ ${noteValue},00`);
                break;
            }
        }
        return money;
    }

    decomposeCurrency(totalAmount: number): void {
        let rest = 0;
        let notes: number[] = [100, 50, 20, 10, 5, 2, 1];
        for (let i = 0; i < notes.length; i++) {
            if (i === 0) {
                rest = this.calculateNotes(totalAmount, notes[i]);
            } else {
                rest = this.calculateNotes(rest, notes[i]);
            }
        }
    }
}

let calculate = new AccountService();
calculate.decomposeCurrency(503);
