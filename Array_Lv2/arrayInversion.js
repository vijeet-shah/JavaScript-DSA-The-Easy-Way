function merge(arr, temp, left, mid, right) {
    let inv_count = 0;
    let i = left;
    let j = mid;
    let k = left;
    while (i <= mid - 1 && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        inv_count = inv_count + (mid - i);
      }
    }
  
    while (i <= mid - 1)
      temp[k++] = arr[i++];
  
    while (j <= right)
      temp[k++] = arr[j++];
  
    for (i = left; i <= right; i++)
      arr[i] = temp[i];
  
    return inv_count;
  }
  
  function mergeSort(arr, temp, left, right) {
    let mid, inv_count = 0;
    if (right > left) {
      mid = Math.floor((left + right) / 2);
  
      inv_count += mergeSort(arr, temp, left, mid);
      inv_count += mergeSort(arr, temp, mid + 1, right);
  
      inv_count += merge(arr, temp, left, mid + 1, right);
    }
    return inv_count;
  }
  
  const arr = [5, 3, 2, 1, 4];
  const n = arr.length;
  const temp = new Array(n);
  const ans = mergeSort(arr, temp, 0, n - 1);
  console.log("The total inversions are " + ans);
  