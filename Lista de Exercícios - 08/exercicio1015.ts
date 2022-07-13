interface INumbers {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
  
  class Calculate implements INumbers {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  
    constructor(x1: number, y1: number, x2: number, y2: number) {
      (this.x1 = x1), (this.y1 = y1), (this.x2 = x2), (this.y2 = y2);
    }
  
    calculateForm() {
      const p1 = this.x2 - this.x1;
      const p2 = this.y2 - this.y1;
  
      const calc = Math.pow(p1, 2) + Math.pow(p2, 2);
      const result = Math.sqrt(calc).toFixed(4);
  
      console.log(`RESULTADO = ${result}`);
    }
  }
  
  const calculate = new Calculate(1.0, 7.0, 5.0, 9.0);
  calculate.calculateForm();