//Implement Pow(x,n) | X raised to the power N


function myPow(x, n) {
    let ans = 1.0;
    let nn = Math.abs(n); // Convert n to its absolute value
    
    while (nn) {
      if (nn % 2) { // If nn is odd
        ans *= x; // Multiply ans by x
        nn -= 1; // Subtract 1 from nn
      } else {
        x *= x; // Square x
        nn /= 2; // Divide nn by 2
      }
    }
    
    if (n < 0) {
      ans = 1.0 / ans; // If n is negative, take the reciprocal of ans
    }
    
    return ans;
  }
  
  console.log(myPow(2, 10));
  

  /**
   * The function uses an iterative approach to calculate the value of x raised to the power of n. It employs a binary exponentiation algorithm, which reduces the number of multiplications required to compute the result.

The algorithm iterates while the exponent nn is nonzero. In each iteration, it performs one of two operations based on whether nn is odd or even. If nn is odd, it multiplies the answer ans by x and decrements nn by 1. If nn is even, it squares x and divides nn by 2.

Since the number of iterations depends on the value of the exponent n, the number of iterations is proportional to the number of bits required to represent n in binary form. This is logarithmic in n, leading to a time complexity of O(log(n)). */