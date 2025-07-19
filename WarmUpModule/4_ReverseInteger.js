function ReverseInteger(n) {
  // LC 7
  let isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = Math.abs(n);
  }

  let reverseNumber = 0;
  while (n > 0) {
    let lastdigit = n % 10;
    reverseNumber = reverseNumber * 10 + lastdigit;
    n = Math.floor(n / 10);
  }
  return isNegative ? -1 * reverseNumber : reverseNumber;
}

ReverseInteger(8339);
