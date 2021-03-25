const reverse = (number) => {
  let stringNum = number.toString();
  let numsArray = stringNum.split('');
  let result = [];

  if (stringNum.length === 1) {
    return Number(stringNum);
  }

  for (let i = numsArray.length - 1; i >= 0; i--) {
    result.push(numsArray[i]);
  }

  result = result.join('');

  return Number(result);
}

let test1 = 123090000.0900
console.log(reverse(test1));