function readNumber(num: number) {
    for (let n = 0; n <= num; n++) { 
      if (num % n === 0) {
          console.log(n);
      }
    }
}

readNumber(6);