function merge(arr, temp, left, mid, right) {
// This function merges two sorted subarrays of arr.
// The first subarray is arr[left..mid-1]
// The second subarray is arr[mid..right]

let inv_count = 0; // The number of inversions found so far

let i = left; // Index of the first subarray
let j = mid; // Index of the second subarray
let k = left; // Index of the merged subarray

while (i <= mid - 1 && j <= right) {
// Compare the elements at the current indices of the two subarrays
if (arr[i] <= arr[j]) {
// If the element at the current index of the first subarray is less than or equal to the element at the current index of the second subarray,
// then copy the element from the first subarray to the merged subarray.
temp[k++] = arr[i++];
} else {
// Otherwise, copy the element from the second subarray to the merged subarray.
temp[k++] = arr[j++];

Code snippet
  // Increment the inversion count by the number of elements left in the first subarray.
  // This is because for every element we copy from the second subarray, there are that many elements in the first subarray that are greater than it.
  inv_count = inv_count + (mid - i);
}
Use code with caution. Learn more
}

// Copy any remaining elements from the first subarray to the merged subarray.
while (i <= mid - 1) {
temp[k++] = arr[i++];
}

// Copy any remaining elements from the second subarray to the merged subarray.
while (j <= right) {
temp[k++] = arr[j++];
}

// Copy the merged subarray back to the original array.
for (i = left; i <= right; i++) {
arr[i] = temp[i];
}

// Return the number of inversions found.
return inv_count;
}

