function print(num, hours, value) {
    console.log(`NUMBER = ${num}`);
    
    var salary = hours * value;
    console.log(`SALARY = $ ${salary.toFixed(2)}`);
  }
  
  print(25, 100, 5.50);