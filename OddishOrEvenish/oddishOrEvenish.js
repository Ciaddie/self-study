const oddishOrEvenish = (num) => {
  let splitNum = num.toString().split('');
  let total = 0;

  for (let i = 0; i < splitNum.length; i++) {
    let current = parseInt(splitNum[i], 10);
    total += current;
  }

  if (total % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }
}

const test1 = oddishOrEvenish(4433);
const test2 = oddishOrEvenish(43);
const test3 = oddishOrEvenish(373);

console.log(test1);
console.log(test2);
console.log(test3);

//just keeping it green...