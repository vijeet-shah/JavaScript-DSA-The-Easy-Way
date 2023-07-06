/**Array Map with Callback:
• Implement a function 'mapArray that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of the array and return a new array with the modified values. */

let mapArray = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let modifiedValue = callback(arr[i]);
    newArr.push(modifiedValue);
  }
  return newArr;
};

let modifyValue = (value) => {
  return value + 1;
};

let x = [1, 2, 3, 4, 5, 6];
let modifiedArray = mapArray(x, modifyValue);
console.log(modifiedArray);
