function swapIfGreater(arr1, arr2, ind1, ind2) {
    if (arr1[ind1] > arr2[ind2]) {
      [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
  }
  
  function merge(arr1, arr2, n, m) {
    // Length of the imaginary single array
    const len = n + m;
  
    // Initial gap
    let gap = Math.ceil(len / 2);
  
    while (gap > 0) {
      // Place 2 pointers
      let left = 0;
      let right = left + gap;
      while (right < len) {
        // Case 1: left in arr1[] and right in arr2[]
        if (left < n && right >= n) {
          swapIfGreater(arr1, arr2, left, right - n);
        } 
        // Case 2: both pointers in arr2[]
        else if (left >= n) {
          swapIfGreater(arr2, arr2, left - n, right - n);
        }
        // Case 3: both pointers in arr1[]
        else {
          swapIfGreater(arr1, arr1, left, right);
        }
        left++;
        right++;
      }
      // Break if iteration gap=1 is completed
      if (gap === 1) break;
  
      // Otherwise, calculate new gap
      gap = Math.ceil(gap / 2);
    }
  }
  
  const arr1 = [1, 4, 8, 10];
  const arr2 = [2, 3, 9];
  const n = 4;
  const m = 3;
  merge(arr1, arr2, n, m);
  console.log("The merged arrays are:");
  console.log("arr1[] = " + arr1.join(" "));
  console.log("arr2[] = " + arr2.join(" "));