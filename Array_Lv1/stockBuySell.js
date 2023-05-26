/**Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */


function maxProfit(arr) {
    let maxPro = 0;
    let n = arr.length;
    let minPrice = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      minPrice = Math.min(minPrice, arr[i]);
      maxPro = Math.max(maxPro, arr[i] - minPrice);
    }
  
    return maxPro;
  }
  
  const arr = [7, 1, 5, 3, 6, 4];
  const maxPro = maxProfit(arr);
  console.log("Max profit is:", maxPro);