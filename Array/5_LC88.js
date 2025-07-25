//IMP
var merge = function (nums1, m, nums2, n) {
  // let nums1Copy = [...nums1]
  // let p1 = 0
  // let p2 = 0

  // for (let i = 0; i < m + n; i++) {
  //   if (p1 >= m || (nums1Copy[p1] > nums2[p2] && p2 < n)) {
  //     nums1[i] = nums2[p2]
  //     p2++
  //   } else {
  //     nums1[i] = nums1Copy[p1]
  //     p1++
  //   }
  // }
  // another solution

  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    // we are copying the larger value to last empty digits of nums1
    if (p2 < 0) break; // not needed as we are already copying to nums1 only
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
