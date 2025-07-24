function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    // will start with el at idx =1 as we will consider 0th el is sorted
    let currentElement = a[i]; // this is the pivot element to start comparison
    let p = i - 1; // this is idx
    while (p >= 0 && arr[p] > currentElement) {
      // p>=0 so that array index doesnt go out of bound when last elment[0th] also needs to be removed
      arr[p + 1] = arr[p];
      p--;
    }
    arr[p + 1] = currentElement; // placing the pivot in place after moving other elements
  }
  return arr;
}
