/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

console.log("Exploring promises ");

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

let a = wait(2000);
a.then(() => console.log("Hell Promise done"));

function delay(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

console.log("Start");
delay(3) // Wait for 3 seconds
  .then(() => {
    console.log("After 3 seconds");
    return delay(2); // Wait for another 2 seconds
  })
  .then(() => {
    console.log("After 2 more seconds");
    // Other code to execute
  });
