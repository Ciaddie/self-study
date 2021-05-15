const manualSort = (arr) => {
  let result = [];
  let sorted = false;
  let temp = 0;

  while (sorted === false) {
    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (smallest > arr[i]) {
        smallest = arr[i];
        temp = arr[0];
        arr[0] = smallest;
        arr[i] = temp;
      }
    }
    result.push(arr[0])
    arr.splice(0, 1);

    if (arr.length === 0) {
      sorted = true;
    }
  }

  return result;
}

console.log(manualSort([10, 2, 5, 7, 30 , 4, 77, 55, 38]));