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


/*
//Write a function 'filterArray' that takes an array and a callback function as arguments. 'filterArray' should filter the elements of the array based on the condition specified by the callback function and return a new array with the filtered elements.

let filterArray = (a, callback) => {
  let x = a.filter((e) => {
    return callback(e);
  });
  return x;
};

function moreThanFive(z) {
  if (z > 5) {
    return z;
  }
}

let arr = [0, 2, 4, 5, 6, 78, 5];

console.log(filterArray(arr, moreThanFive));


**/
