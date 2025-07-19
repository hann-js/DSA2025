/**
 * @param {number[]} nums
 * @return {number}
 */
//26. Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  // Solution with with extra spaces

  // if (nums.length == 1) return 1;
  // let uniquePointer = 0;
  // let set = {};
  // set[nums[0]] = true;

  // for (let i = 0; i < nums.length; i++) {
  //   if (!set[nums[i]]) {
  //     set[nums[i]] = true;
  //     nums[uniquePointer + 1] = nums[i];
  //     uniquePointer++;
  //   }
  // }
  // return uniquePointer + 1;

  ///////////////////////////////////////////
  // Another solution without extra space ///
  ///////////////////////////////////////////
  let x = 0; // unique element pointer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      // if the current element is not equal to
      // the pointer-elemenet which was last updated,
      // then its a unique element
      nums[x + 1] = nums[i];
      x = x + 1;
    }
  }
  return x + 1;
};

removeDuplicates([1, 1, 2]);
