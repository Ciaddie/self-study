const manualSort = (arr) => {
  let result = [];
  let sorted = false;

  // while (sorted === false) {
  //   let smallest = arr[0];
  //   let temp = 0;
  //   for (let i = 0; i < arr.length(); i++) {
  //     if (smallest > arr[i]) {

  //     }
  //   }
  // }

  // return result;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(manualSort([1, 3, 4, 5, 2]));