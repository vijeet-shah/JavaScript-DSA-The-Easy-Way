function rotate(matrix) {
  let n = matrix.length;

  // Transposing the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reversing each row of the matrix
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(arr);
console.log("Rotated Image:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}