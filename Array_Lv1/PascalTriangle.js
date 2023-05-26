//printing the first n rows of Pascal's Triangle.

function generatePascalsTriangle(n) {
    //Declare a empty Array which gonna store pascal triangle
    const triangle = [];
    
    // loop which will run nth i.e. size of pascal triangle
    for (let i = 0; i < n; i++) {
        //Declare a empty Array which going to contains n-th row of Pascal’s triangle. 
      const row = [];
      // Loop for single n-th row of Pascal’s triangle & will i time i.e. number of value n-th row of Pascal’s triangle
      for (let j = 0; j <= i; j++) {
        //Value of 1st row is fixed i.e. 1.
        if (j === 0 || j === i) {
          row.push(1);
        } 
        // Logic, prevRow is array at last nth postion i.e [1][1,1][1,2,3] - last is [1,2,3]
        // num is single number of next row i.e prevRow[0] + prevRow[1]
        // Push value of num to row array.
        else {
          const prevRow = triangle[i - 1];
          const num = prevRow[j - 1] + prevRow[j];
          row.push(num);
        }
      }
      // push row array to triangle Matrix.
      triangle.push(row);
    }
    
    return triangle;
  }
  
  // Example usage:
  const numRows = 5;
  const pascalsTriangle = generatePascalsTriangle(numRows);
  console.log(pascalsTriangle);
  

  /** Calculate time & space complexity
  Time Complexity: The outer loop runs n times, where n is the input number of rows. This is a linear relationship.
The inner loop runs for each row and increments its iterations with each row. The number of iterations for the inner loop can be approximated to (n*(n+1))/2, which is quadratic.
Inside the inner loop, the operations performed are constant time operations (comparisons, additions, and array operations).
As a result, the overall time complexity of the code is O(n^2), or quadratic time complexity, where n is the number of rows.

Space Complexity: The triangle list is used to store all the rows of Pascal's Triangle. Its size grows with the number of rows.
In the worst case, the number of rows stored in triangle is equal to n.
Each row has i+1 elements, so the space required for each row is also proportional to n.
Therefore, the space complexity of the code is O(n^2), or quadratic space complexity, where n is the number of rows.
 */