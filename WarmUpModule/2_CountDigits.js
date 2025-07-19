function countDigits(n) {
  n = Math.abs(n);

  if (n == 0) return 1;
  let count = 0;
  while (n >= 1) {
    n = Math.round(n / 10);
    count++;
  }
  console.log(count);
  return count;
}

countDigits(211);

///////////////////////
function countDigits(n) {
  n = Math.abs(n);
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
  return count;
}

countDigits(211);
