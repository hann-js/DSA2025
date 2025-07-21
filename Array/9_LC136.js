// XOR of a ^ a is zero
// XOR of a ^ 0  is a
var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
