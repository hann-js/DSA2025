/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) return true;

  if (n < 1 || n % 2 != 0) return false;
  return isPowerOfTwo(n / 2);
};
// -16 should return false...but 16 is true,
// that is y we have NOT included n == -1 in return true
