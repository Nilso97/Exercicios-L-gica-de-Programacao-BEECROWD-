class Coordinates {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      (this.x = x), (this.y = y);
    }
  
    calculateCoordinates() {
      if (this.x > 0 && this.y > 0) {
        console.log("Q1");
      } else if (this.x < 0 && this.y > 0) {
        console.log("Q2");
      } else if (this.x < 0 && this.y < 0) {
        console.log("Q3");
      } else if (this.x > 0 && this.y < 0) {
        console.log("Q4");
      } else {
        console.log("Origem");
      }
    }
  }
  
  const coordinates = new Coordinates(4.5, -2.2);
  coordinates.calculateCoordinates();
  