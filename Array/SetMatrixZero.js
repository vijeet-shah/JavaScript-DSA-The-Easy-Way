//Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

function setMatrixZero(matrix) {

    //Length of Row & column
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    //New Array to store position of zero
    const zeroRows = new Array();
    const zeroCols = new Array();
  
    // Step 1: Identify the rows and columns that contain zeros
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (matrix[row][col] === 0) {
          zeroRows.push(row);
          zeroCols.push(col);
        }
      }
    }
  
    // Step 2: Set entire rows and columns to zero
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // Checks if current row & column value(which represents the row index) is present in the zeroRows & zeroCols Array.
        // If Yes then then set row & col index to to 0.
        if (zeroRows.includes(row) || zeroCols.includes(col)) {
          matrix[row][col] = 0;
        }
      }
    }
    return matrix;
  }
  
  // Example usage:
  const matrix1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  console.log(setMatrixZero(matrix1));
  // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  
  const matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
  console.log(setMatrixZero(matrix2));
  // Output: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]


/* Time Complexity 

To calculate the time complexity of the setMatrixZero function, let's analyze the two main steps:

Step 1: Identifying the rows and columns that contain zeros.
The nested for loop iterates over each element in the matrix, resulting in a time complexity of O(rows * cols), where rows represents the number of rows in the matrix and cols represents the number of columns.
Within the loop, the if condition checks if an element is zero, which has a constant time complexity of O(1).
Adding an element to a Set using zeroRows.add(row) and zeroCols.add(col) also has a constant time complexity of O(1).
Overall, the time complexity of this step is O(rows * cols).

Step 2: Setting entire rows and columns to zero.
Again, we have a nested for loop that iterates over each element in the matrix, resulting in a time complexity of O(rows * cols).
The if condition checks if the current row or column needs to be set to zero, which involves checking if the row or column index is present in the zeroRows or zeroCols sets. Both set operations (zeroRows.has(row) and zeroCols.has(col)) have a constant time complexity of O(1).
Setting an element in the matrix to zero (matrix[row][col] = 0) also has a constant time complexity of O(1).
Overall, the time complexity of this step is also O(rows * cols).

Since both steps are performed sequentially, the overall time complexity of the setMatrixZero function is the sum of the time complexities of the individual steps, which is O(rows * cols) + O(rows * cols) = O(rows * cols).

In simpler terms, the time complexity grows linearly with the number of elements in the matrix, or in other words, it scales with the product of the number of rows and columns.

In the given example, if the matrix has 'n' rows and 'm' columns, the time complexity would be O(n * m).

It's worth noting that the space complexity of this function is O(rows + cols) since the zeroRows and zeroCols sets store the row and column indices respectively.
*/

