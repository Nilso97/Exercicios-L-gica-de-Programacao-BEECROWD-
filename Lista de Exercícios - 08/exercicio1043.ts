class Triangle {
    value_A: number;
    value_B: number;
    value_C: number;
  
    constructor(a: number, b: number, c: number) {
      (this.value_A = a), (this.value_B = b), (this.value_C = c);
    }
  
    calculate() {
      let sum1 = this.value_A + this.value_B;
      let sum2 = this.value_A + this.value_C;
      let sum3 = this.value_B + this.value_C;
  
      if (sum1 > this.value_C) {
        if (sum2 > this.value_B) {
          if (sum3 > this.value_A) {
            let perimeter = sum1 + this.value_C;
  
            return console.log(`Perímetro = ${perimeter.toFixed(1)}`);
          }
        }
      } else {
        let area = (sum1 * this.value_C) / 2;
  
        return console.log(`Área = ${area.toFixed(1)}`);
      }
    }
  }
  
  const result = new Triangle(6.0, 4.0, 2.1);
  result.calculate();
  
  /* Forma Simplificada
  
  class Triangle {
      value_A: number;
      value_B: number;
      value_C: number;
  
      constructor(a: number, b: number, c: number) {
          this.value_A = a,
              this.value_B = b,
              this.value_C = c
      }
  
      calculate() {
          let sum1 = this.value_A + this.value_B;
          let sum2 = this.value_A + this.value_C;
          let sum3 = this.value_B + this.value_C;
  
          if (sum1 > this.value_C && sum2 > this.value_B && sum3 > this.value_A) {
              let perimeter = sum1 + this.value_C;
  
              return console.log(`Perimetro = ${perimeter.toFixed(1)}`);
          } else {
              let area = (sum1 * this.value_C) / 2;
  
              return console.log(`Perimetro = ${area.toFixed(1)}`);
          }
      }
  }
  
  const result = new Triangle(6.0, 4.0, 2.0);
  result.calculate();

  */