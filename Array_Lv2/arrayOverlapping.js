function mergeOverlappingIntervals(arr) {
    const n = arr.length;
  
    // Sort the given intervals
    arr.sort((a, b) => a[0] - b[0]);
  
    const ans = [];
  
    for (let i = 0; i < n; i++) {
      // If the current interval does not overlap with the previous interval
      if (ans.length === 0 || arr[i][0] > ans[ans.length - 1][1]) {
        ans.push(arr[i]);
      }
      // If the current interval overlaps with the previous interval, merge them
      else {
        ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
      }
    }
  
    return ans;
  }
  
  const arr = [[1, 3], [8, 10], [2, 6], [15, 18]];
  const ans = mergeOverlappingIntervals(arr);
  console.log("The merged intervals are:");
  for (let i = 0; i < ans.length; i++) {
    console.log(`[${ans[i][0]}, ${ans[i][1]}]`);
  }
  