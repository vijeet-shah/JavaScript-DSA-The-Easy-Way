/**Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].
 */

function merge(nums, low, mid, high) {
    // Define a function called merge that takes an array nums and indices low, mid, and high as parameters.

    let total = 0;
    let j = mid + 1;
  
    for (let i = low; i <= mid; i++) {
      while (j <= high && nums[i] > 2 * nums[j]) {
        j++;
      }
      total += j - (mid + 1);
    }
  
    const t = [];
    let left = low;
    let right = mid + 1;
  
    while (left <= mid && right <= high) {
      if (nums[left] <= nums[right]) {
        t.push(nums[left++]);
      } else {
        t.push(nums[right++]);
      }
    }
  
    while (left <= mid) {
      t.push(nums[left++]);
    }
  
    while (right <= high) {
      t.push(nums[right++]);
    }
  
    for (let i = low; i <= high; i++) {
      nums[i] = t[i - low];
    }
  
    return total;
  }
  
  function mergeSort(nums, low, high) {
    if (low >= high) {
      return 0;
    }
  
    const mid = Math.floor((low + high) / 2);
    let inv = mergeSort(nums, low, mid);
    inv += mergeSort(nums, mid + 1, high);
    inv += merge(nums, low, mid, high);
  
    return inv;
  }
  
  function reversePairs(arr) {
    return mergeSort(arr, 0, arr.length - 1);
  }
  
  const arr = [1, 3, 2, 3, 1];
  console.log("The Total Reverse Pairs are " + reversePairs(arr));
  