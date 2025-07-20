var maxProfit = function (prices) {
  let minValueIdxSoFar = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[minValueIdxSoFar]) {
      minValueIdxSoFar = i;
    } else {
      let tempProfit = prices[i] - prices[minValueIdxSoFar];
      if (tempProfit > profit) {
        profit = tempProfit;
      }
    }
  }
  return profit;
};
