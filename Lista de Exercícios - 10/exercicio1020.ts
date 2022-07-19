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
