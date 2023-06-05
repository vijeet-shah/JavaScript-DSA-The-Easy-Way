class Solution {
    uniquePaths(m, n) {//Define a method called uniquePaths that takes two parameters m and n
      const N = m + n - 2; //: Calculate the total number of steps required to reach the bottom-right corner from the top-left corner of the grid by summing up the number of rows (m) and columns (n) and subtracting 2 since the starting and ending positions are fixed.
      const r = m - 1; //calculate the number of steps to move vertically (downward) from the starting position to reach the bottom-right corner (m - 1 since the row indices are 0-based).
      let res = 1; // Initialize a variable res to 1, which will store the result.
  
      for (let i = 1; i <= r; i++) {
        res = (res * (N - r + i)) / i;//Update the result by multiplying res with (N - r + i) and then dividing it by i. This calculates the binomial coefficient using the formula C(N, r).
      }
  
      return Math.floor(res);//Return the result after converting it to an integer using Math.floor() to get the total number of unique paths.
    }
  }
  
  const obj = new Solution();
  const totalCount = obj.uniquePaths(2, 3);
  console.log("The total number of Unique Paths are " + totalCount);
  
//The time complexity of this algorithm is 
//O(min(m, n)) since it depends on the smaller value between m and n.




