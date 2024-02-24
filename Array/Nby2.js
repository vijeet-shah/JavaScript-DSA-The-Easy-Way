function majorityElement(v) {
  // Size of the given array
  const n = v.length;
  let cnt = 0; // Count
  let el; // Element

  // Applying the algorithm
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = v[i];
    } else if (el === v[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  // Checking if the stored element is the majority element
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (v[i] === el) {
      cnt1++;
    }
  }

  if (cnt1 > Math.floor(n / 2)) {
    return el;
  }
  return -1;
}

const arr = [2, 2, 1, 1, 1, 2, 2];
const ans = majorityElement(arr);
console.log("The majority element is: " + ans);


/**Since the algorithm iterates over the array twice, the time complexity is linear with respect to the size of the input array, resulting in O(n) time complexity.
 */