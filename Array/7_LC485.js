/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOneCount = 0;
  let oneCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      oneCount = 0;
    } else {
      oneCount++;
    }
    maxOneCount = Math.max(maxOneCount, oneCount);
  }
  return maxOneCount;
};
