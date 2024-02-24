function nextGreaterPermutation(arr) {
  const n = arr.length;

  // Step 1: Find the break point
  let ind = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }

  // If break point does not exist
  if (ind === -1) {
    arr.reverse();
    return arr;
  }

  // Step 2: Find the next greater element and swap it with arr[ind]
  for (let i = n - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      break;
    }
  }

  // Step 3: Reverse the right half
  let left = ind + 1;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const A = [1,3,2];
const ans = nextGreaterPermutation(A);

console.log("The next permutation is: [" + ans.join(" ") + "]");
