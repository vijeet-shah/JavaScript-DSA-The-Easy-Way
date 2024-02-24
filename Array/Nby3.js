/*Majority Elements(>N/3 times) | Find the elements that appears more than N/3 times in the array
*/

function majorityElement(v) {
// v is the array of elements to find the majority element of

// Get the size of the array
const n = v.length;

// Initialize the counts of the two majority elements
let cnt1 = 0,
cnt2 = 0;

// Initialize the two majority elements
let el1 = Number.MIN_SAFE_INTEGER,
el2 = Number.MIN_SAFE_INTEGER;

// Apply the Extended Boyer Moore's Voting Algorithm
for (let i = 0; i < n; i++) {
// If the count of either majority element is 0 and the current element is not equal to the other majority element
if (cnt1 === 0 && el2 !== v[i]) {
// Increment the count of the current element and set it as the first majority element
cnt1 = 1;
el1 = v[i];
} else if (cnt2 === 0 && el1 !== v[i]) {
// Increment the count of the current element and set it as the second majority element
cnt2 = 1;
el2 = v[i];
} else if (v[i] === el1) {
// Increment the count of the first majority element
cnt1++;
} else if (v[i] === el2) {
// Increment the count of the second majority element
cnt2++;
} else {
// Decrement the counts of both majority elements
cnt1--;
cnt2--;
}
}

// Create a list to store the majority elements
const ls = [];

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

// Get the minimum number of elements required to be a majority element
const mini = Math.floor(n / 3) + 1;

// If the count of either majority element is greater than or equal to mini, add it to the list of majority elements
if (cnt1 >= mini) {
ls.push(el1);
}
if (cnt2 >= mini) {
ls.push(el2);
}

// Uncomment the following line if it is told to sort the answer array
// ls.sort(); //TC --> O(2*log2) ~ O(1);

// Return the list of majority elements
return ls;
}

// Create an array of elements
const arr = [11, 33, 33, 11, 33, 11];

// Find the majority elements in the array
const ans = majorityElement(arr);

// Print the majority elements
console.log("The majority elements are: " + ans.join(" "));
  

// Uncomment the following line if it is told to sort the answer array
    // ls.sort(); //TC --> O(2*log2) ~ O(1);
