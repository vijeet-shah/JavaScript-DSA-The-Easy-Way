/* Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside
 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31). */

//What is setTimout()
//How do i optain current day of month?
//Is setTimeout Async, how to use it.

const higherOrderAsync = (callback) => {
  let x = new Date().getUTCDate();
  setTimeout(callback, x);
};

const callAboveFun = () => {
  console.log("Execute every 5 seconds");
};

higherOrderAsync(callAboveFun);
let a = new Date();
console.log(a);
let x = new Date().getUTCDate();
console.log(x);
