const filterArrayCallback = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let modifiedValue = callback(arr[i]);
    newArr.push(filterValue);
  }
  return newArr;
};

let filterValue = (value) => {
  return value + 1;
};

let x = [1, 2, 3, 4, 5, 6];
