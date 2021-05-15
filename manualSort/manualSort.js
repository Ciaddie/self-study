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
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      temp = arr[0];
      arr[0] = smallest;
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(manualSort([4, 5, 6, 7, 8, 1]));