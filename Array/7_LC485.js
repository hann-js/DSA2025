/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxOneCount = 0;
  let oneCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      maxOneCount = Math.max(maxOneCount, oneCount);

      oneCount = 0;
    } else {
      oneCount++;
    }
  }
  return Math.max(maxOneCount, oneCount);
  // this is the part you should keep in mind else will miss the case when
  // there are no zeros at the end of array
};
