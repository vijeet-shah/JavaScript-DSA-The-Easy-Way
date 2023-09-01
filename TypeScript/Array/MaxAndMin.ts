//Find the maximum and minimum values in an array.

let array: number[] = [3, 6, 2, 9, 23, 7, 4]

let max = (arr: number[]): number => {
  let m = arr[0]
  arr.forEach((i) => {
    if (arr[i] > m) {
      m = arr[i];
    }
  })
  return m;
}

let min = (arr: number[]): number => {
  let m = arr[0];
  arr.forEach((i) => {
    if (arr[i] < m) {
      m = arr[i];
    }
  })
  return m;
}

console.log(`Maximum Value in Array : ${max(array)}`);
console.log(`Minimum Value in Array : ${min(array)}`);
