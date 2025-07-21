// VIMP
var moveZeroes = function (nums) {
  let movePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[movePointer] = nums[i];
      movePointer++;
    }
  }
  for (let j = movePointer; j < nums.length; j++) {
    nums[j] = 0;
  }
};
// keep moving only the non zero numbers to the front, and once that is done and loop ends
// your movepointer will point to the place from where all zeros need to be filled
// so write a loop from movepointer till end of array and fill zeros
