function findMissingRepeatingNumbers(a) {
    const n = a.length; // size of the array
  
    let xr = 0;
  
    // Step 1: Find XOR of all elements
    for (let i = 0; i < n; i++) {
      xr = xr ^ a[i];
      xr = xr ^ (i + 1);
    }
  
    // Step 2: Find the differentiating bit number
    const number = xr & ~(xr - 1);
  
    // Step 3: Group the numbers
    let zero = 0;
    let one = 0;
    for (let i = 0; i < n; i++) {
      // part of 1 group
      if ((a[i] & number) !== 0) {
        one = one ^ a[i];
      }
      // part of 0 group
      else {
        zero = zero ^ a[i];
      }
    }
  
    for (let i = 1; i <= n; i++) {
      // part of 1 group
      if ((i & number) !== 0) {
        one = one ^ i;
      }
      // part of 0 group
      else {
        zero = zero ^ i;
      }
    }
  
    // Last step: Identify the numbers
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] === zero) {
        cnt++;
      }
    }
  
    if (cnt === 2) {
      return [zero, one];
    }
    return [one, zero];
  }
  
  const a = [3, 1, 2, 5, 4, 6, 7, 5];
  const ans = findMissingRepeatingNumbers(a);
  console.log("The repeating and missing numbers are: [" + ans[0] + ", " + ans[1] + "]");
  