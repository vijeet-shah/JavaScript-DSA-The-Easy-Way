/**Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */


function maxProfit(arr) {
  // This function finds the maximum profit that can be made by buying and selling stocks.

  // Initialize the maximum profit to 0.
  let maxPro = 0;

  // Initialize the number of stocks to the length of the array.
  let n = arr.length;

  // Initialize the minimum price to infinity.
  let minPrice = Infinity;

  // Iterate over the stock prices.
  for (let i = 0; i < n; i++) {

    // Update the minimum price to the minimum of the current price and the minimum price so far.
    minPrice = Math.min(minPrice, arr[i]);

    // Update the maximum profit to the maximum of the current profit and the maximum profit so far.
    maxPro = Math.max(maxPro, arr[i] - minPrice);
  }

  // Return the maximum profit.
  return maxPro;
}

// Create a list of stock prices.
const arr = [7, 1, 5, 3, 6, 4];

// Find the maximum profit.
const maxPro = maxProfit(arr);

// Print the maximum profit.
console.log("Max profit is:", maxPro);
