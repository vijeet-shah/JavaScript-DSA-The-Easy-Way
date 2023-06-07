function findDuplicate(nums) {
  // Initialize slow and fast pointers.
  let slow = nums[0];
  let fast = nums[0];

  // Iterate until the two pointers meet.
  do {
    // Move slow pointer one step at a time.
    slow = nums[slow];

    // Move fast pointer two steps at a time.
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Set fast pointer to the beginning of the list.
  fast = nums[0];

  // Iterate until the two pointers point to the same element.
  while (slow !== fast) {
    // Move slow pointer one step at a time.
    slow = nums[slow];

    // Move fast pointer one step at a time.
    fast = nums[fast];
  }

  // Return the duplicate element.
  return slow;
}
