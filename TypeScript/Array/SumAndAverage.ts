// Find the length of an array.
// Calculate the sum and average of array elements.

let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(`Length of Array is ${numbers.length}`);

let sum=(arr: number[]): number =>{
  return arr.reduce((acc, curr) => acc + curr, 0);
}

let average=(arr: number[]): number =>{
  let totalSum = sum(arr); // Call the sum function to get the sum
  return totalSum / arr.length;
}

console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
