/*Majority Elements(>N/3 times) | Find the elements that appears more than N/3 times in the array
*/

function majorityElement(v) {
    const n = v.length; // Size of the array
  
    let cnt1 = 0,
      cnt2 = 0; // Counts
    let el1 = Number.MIN_SAFE_INTEGER; // Element 1
    let el2 = Number.MIN_SAFE_INTEGER; // Element 2
  
    // Applying the Extended Boyer Moore's Voting Algorithm
    for (let i = 0; i < n; i++) {
      if (cnt1 === 0 && el2 !== v[i]) {
        cnt1 = 1;
        el1 = v[i];
      } else if (cnt2 === 0 && el1 !== v[i]) {
        cnt2 = 1;
        el2 = v[i];
      } else if (v[i] === el1) {
        cnt1++;
      } else if (v[i] === el2) {
        cnt2++;
      } else {
        cnt1--;
        cnt2--;
      }
    }
  
    const ls = []; // List of answers
  
    // Manually check if the stored elements in el1 and el2 are the majority elements
    cnt1 = 0;
    cnt2 = 0;
    for (let i = 0; i < n; i++) {
      if (v[i] === el1) {
        cnt1++;
      }
      if (v[i] === el2) {
        cnt2++;
      }
    }
  
    const mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) {
      ls.push(el1);
    }
    if (cnt2 >= mini) {
      ls.push(el2);
    }
  
    // Uncomment the following line if it is told to sort the answer array
    // ls.sort(); //TC --> O(2*log2) ~ O(1);
  
    return ls;
  }
  
  const arr = [11, 33, 33, 11, 33, 11];
  const ans = majorityElement(arr);
  console.log("The majority elements are: " + ans.join(" "));
  