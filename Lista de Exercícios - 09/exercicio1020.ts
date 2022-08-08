/* Exercício 1020
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
Entrada

O arquivo de entrada contém um valor inteiro.
Saída

Imprima a saída conforme exemplo fornecido.
*/

interface IPerson {
  name: string;
  age: number;
}

class Person implements IPerson {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    (this.name = n), (this.age = a);
  }

  calculateAgeInDays() {
    let years = this.age / 365;
    let months = (this.age % 365) / 30;
    let days = (this.age % 365) % 30;

    console.log(
      `${this.name} tem: ${years.toFixed(0)} ano(s), ${months.toFixed(0)} mes(es) e ${days.toFixed(0)} dia(s)`);
  }
}

const person = new Person("John", 400);
person.calculateAgeInDays();
