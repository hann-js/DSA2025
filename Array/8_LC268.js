// revise the concept that sum of n natural no is (n * (n+1))/2
var missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let n = nums.length;
  let sumOfN = (n * (n + 1)) / 2;
  return sumOfN - sum;
};
