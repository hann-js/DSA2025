function mergeSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr; // base case : if the array has only 1 element
  let mid = Math.floor(n / 2);
  let leftArray = mergeSort(arr.slice(0, mid));
  let rightArray = mergeSort(arr.slice(mid));
  // function mergeSortedArray(left, right) {
  //   // sorts 2 sorted array
  //   let p1 = 0;
  //   let p2 = 0;
  //   let totalLen = left.length + right.length;
  //   let res = [];
  //   for (let i = 0; i < totalLen; i++) {
  //     if (p1 >= left.length || (p2 < right.length && left[p1] > right[p2])) {
  //       res.push(right[p2]);
  //       p2++;
  //     } else {
  //       res.push(left[p1]);
  //       p1++;
  //     }
  //   }
  //   return res;
  // }

  //  a more easy way to write the utility function is

  function mergeSortedArray(left, right) {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    return [...res, ...left.slice(i), ...right.slice(j)]; // adding the remaining elements of whatever is left of either array
  }
  return mergeSortedArray(leftArray, rightArray);
}
