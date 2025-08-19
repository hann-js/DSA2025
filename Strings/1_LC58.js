var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let count = 0;
  while (s[i] === " " && i >= 0) {
    // trimming white spaces
    i--;
  }

  if (i == 0) {
    // single char
    return 1;
  } else {
    while (s[i] != " " && i >= 0) {
      i--;
      count++;
    }
    return count;
  }
};
