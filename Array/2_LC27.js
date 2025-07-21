// IMP
var removeElement = function (nums, val) {
  let non_val_pointer = 0;
  // variable that maintains the position where the next non-val should shift to
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[non_val_pointer] = nums[i];
      non_val_pointer = non_val_pointer + 1;
    }
  }
  return non_val_pointer;
};
