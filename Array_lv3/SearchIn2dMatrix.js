/*
Given an sorted 2D matrix and an integer, write a program to find if the given integer exists in the matrix.
 */

class Solution {
  searchMatrix(matrix, target) {
    // Initialize the lower bound to 0
    let lo = 0;
    
    // Check if the matrix is empty, if so, return false
    if (!matrix.length) return false;
    
    // Calculate the upper bound based on the total number of elements in the matrix
    let hi = matrix.length * matrix[0].length - 1;

    // Perform binary search
    while (lo <= hi) {
      // Calculate the middle index
      let mid = lo + Math.floor((hi - lo) / 2);
      
      // Calculate the row and column indices based on the middle index
      let row = Math.floor(mid / matrix[0].length);
      let col = mid % matrix[0].length;
      
      // If the element at the middle index is equal to the target, return true
      if (matrix[row][col] === target) {
        return true;
      }
      
      // If the element at the middle index is less than the target, update the lower bound
      if (matrix[row][col] < target) {
        lo = mid + 1;
      } 
      // If the element at the middle index is greater than the target, update the upper bound
      else {
        hi = mid - 1;
      }
    }
    // Target not found, return false
    return false;
  }
}


/*The algorithm uses binary search to search for the target element in the matrix. In each iteration of the while loop, the search space is halved by dividing it into two parts based on the middle element. This is done by calculating the middle index using the formula mid = lo + Math.floor((hi - lo) / 2).

The time complexity of the provided code is O(log(m * n)), where m is the number of rows in the matrix and n is the number of columns.
*/