//Sort an array of 0's 1's & 2's 

function sortColors(nums) {
  // This function sorts an array of numbers into three categories: 0, 1, and 2.

  // Initialize the pointers for the three categories.
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  // Iterate over the array.
  while (mid <= high) {

    // If the current number is 0, swap it with the number at the low pointer.
    if (nums[mid] === 0) {
      // Use the swap function to swap the numbers at the low and mid pointers.
      swap(nums, low, mid);

      // Increment the low and mid pointers.
      low++;
      mid++;
    }

    // If the current number is 1, do nothing.
    else if (nums[mid] === 1) {
      // Mid is already in the correct position, so do nothing.
      mid++;
    }

    // If the current number is 2, swap it with the number at the high pointer.
    else {
      // Use the swap function to swap the numbers at the mid and high pointers.
      swap(nums, mid, high);

      // Decrement the high pointer.
      high--;
    }
  }

  // Return the sorted array.
  return nums;
}

function swap(nums, i, j) {
  // This function swaps the numbers at the given indices in the array.

  // Save the value at the first index.
  const temp = nums[i];

  // Set the first index to the value at the second index.
  nums[i] = nums[j];

  // Set the second index to the value that was saved at the first index.
  nums[j] = temp;
}

// Example usage:
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
// Output: [0, 0, 1, 1, 2, 2]
