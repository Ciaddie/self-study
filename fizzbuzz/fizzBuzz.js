const fizzBuzz = () => {
  let result = {};

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      result[i] = 'Fizz';
    } else if (i % 5 === 0) {
      result[i] = 'Buzz';
    } else {
      result[i] = i;
    }
  }

  return result;
}
 let test = fizzBuzz();

 console.log(test);