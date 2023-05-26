//Sort an array of 0's 1's & 2's 

function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
  
    while (mid <= high) {
      if (nums[mid] === 0) {
        swap(nums, low, mid);
        low++;
        mid++;
      } else if (nums[mid] === 1) {
        mid++;
      } else if (nums[mid] === 2) {
        swap(nums, mid, high);
        high--;
      }
    }
  
    return nums;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  // Example usage:
  const nums = [2, 0, 2, 1, 1, 0];
  console.log(sortColors(nums));
  // Output: [0, 0, 1, 1, 2, 2]
  