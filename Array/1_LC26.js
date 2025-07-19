/**
 * @param {number[]} nums
 * @return {number}
 */
//26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length == 1) return 1;
  let uniquePointer = 0;
  let set = {};
  set[nums[0]] = true;

  for (let i = 0; i < nums.length; i++) {
    if (!set[nums[i]]) {
      set[nums[i]] = true;
      nums[uniquePointer + 1] = nums[i];
      uniquePointer++;
    }
  }
  return uniquePointer + 1;
};

removeDuplicates([1, 1, 2]);
