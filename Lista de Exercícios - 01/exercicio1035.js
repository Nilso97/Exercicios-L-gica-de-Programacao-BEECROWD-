function readValues(a, b, c, d) {
    if (b > c && d > a && (c + d) > (a + b) && (a & b) > 0 && a / 2) {
      console.log('Valores aceitos');
    } else { 
        console.log('Valores não aceitos');
        
    }
  }
  
  readValues(2, 6, 4, 8);
  //readValues(-2, -3, 2, 6);