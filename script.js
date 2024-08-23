console.log('teste')

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sum(10));