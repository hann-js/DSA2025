/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // let count = 0 //BRUTE-FORCE
  // for (let i = 0; i < stones.length; i++) {
  //   if (jewels.indexOf(stones[i]) > -1) {
  //     count++
  //   }
  // }
  // return count;

  let count = 0;
  let jSet = new Set(); //since only English char are in jewels, max set length can be 26*2 = 52 therefore space complexit is O(1)
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }
  for (let j = 0; j < stones.length; j++) {
    if (jSet.has(stones[j])) {
      count++;
    }
  }
  return count;
};
