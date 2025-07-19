function PalindromNumber(x) {
  if (x < 0) return false;

  let originalNumber = x; // copy created as we are changing x

  let reverseNo = 0;

  while (x > 0) {
    let last_digit = x % 10; // extract last digit
    reverseNo = reverseNo * 10 + last_digit; // multiple the prev reverseNo by 10, makes it simple to add last digit
    x = Math.floor(x / 10); // remove last digit
  }
  return reverseNo === originalNumber;
}

console.log(PalindromNumber(121));
console.log(PalindromNumber(-121));
console.log(PalindromNumber(10));
console.log(PalindromNumber(34));
console.log(PalindromNumber(0));
console.log(PalindromNumber(6));
