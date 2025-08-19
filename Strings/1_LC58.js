var lengthOfLastWord = function (s) {
  // let i = s.length - 1;
  // let count = 0;
  // while (s[i] === " " && i >= 0) {
  //   // trimming white spaces
  //   i--;
  // }

  // if (i == 0) {
  //   // single char
  //   return 1;
  // } else {
  //   while (s[i] != " " && i >= 0) {
  //     i--;
  //     count++;
  //   }
  //   return count;
  // }

  // another approach, doing in a single loop
  let i = s.length - 1;
  let count = 0;
  while (i >= 0) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      // count > 0 means we have already encountered char and now its space again for this index
      break;
    }
    i--;
  }
  return count;
};
