//Write a function 'higherOrder' that takes a callback function as an argument. Inside 'higherOrder', call the callback function synchronously.

const higherOrder = (callback) => {
  console.log("Task completed"); // Call the callback function
  callback();
};

const callAboveFun = () => {
  console.log("Callback function executed");
};

higherOrder(callAboveFun);

// What is Callback fuction?
// Whats the difference between normal fuction & Callback function?
// Whats the difference between Higher order fuction & Callback function?
