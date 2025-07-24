function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapHappened = false; // if there are no swaps done in one 'j' iteration
    // means the array is already sorted.
    ////////////////////////////////////
    // why till n-1 because there are n-1 comparisons
    // say [2,1,0 ] => (2,1) and (2,0) [once 2 is moved to right]
    // if you dont do 0 -> n-1 then you have to deal with if condition that array is not out of bound
    for (let j = 0; j < n - 1 - i; j++) {
      // why n-1-i because after every loop last element is already sorted so we can skip that check
      // so reducing the number of loops by 1 after each 'i' or outer loop iteration by subtracting i
      // which is increasing linearly
      if (arr[j] > arr[j + 1]) {
        swapHappened = true;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      if (swapHappened === false) {
        break; //array is sorted now, we can skip the rest of the iteration
      }
    }
  }
  return arr;
}
