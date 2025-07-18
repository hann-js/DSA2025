//Based on episode- Star pattern in Warm up module
function blockStarPattern(n) {
  for (let i = 0; i < n; i++) {
    // outer loop are responisble for rows,
    // ie how many rows will be printed
    let row = "";
    for (let j = 0; j < n; j++) {
      //inner loop are responsible for columns
      row += "*";
    }
    console.log(row);
  }
}
blockStarPattern(4);
///////////////////////////////////////
function rightTrianglePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      //when row(i) is 0, col should be 1(j should run 1 time)
      //when row is 1, col should run 2 times
      //when row is 2, col should run 3 times
      // to run 3 times in last line (j)...should take values 0,1,2 so j<i+1 or j<=i
      row += "*";
    }
    console.log(row);
  }
}
rightTrianglePattern(4);
///////////////////////////////////////
function rightTrianglePatternNumber(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += `${j + 1}`;
    }
    console.log(row);
  }
}
rightTrianglePatternNumber(5);
///////////////////////////////////////
function rightTrianglePattern2Number(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += `${i + 1}`;
    }
    console.log(row);
  }
}
rightTrianglePattern2Number(5);
///////////////////////////////////////
function rightTrianglePattern3Number(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += `${j + 1}`;
    }
    console.log(row);
  }
}
rightTrianglePattern3Number(5);
//OR--by decrementing values
function rightTrianglePattern3A_Number(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${j + 1}`;
    }
    console.log(row);
  }
}
rightTrianglePattern3A_Number(5);
///////////////////////////////////////
function rightTrianglePatternStar(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
rightTrianglePatternStar(5);
///////////////////////////////////////
function rightTrianglePattern2Star(n) {
  for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j + 1 < i) {
        row += " ";
      } else {
        row += "*";
      }
    }
    console.log(row);
  }
}
rightTrianglePattern2Star(5);
///////////////////////////////////////
// OR
function rightTrianglePattern2A_Star(n) {
  // we need a nxn matrix where  i+1 spaces will be star at the end
  // and n-(i+1) spaces before that.. y?? because each row has n spaces, if i+1 stars are
  // at the end, we are left with n-(i+1) spaces!
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
      row += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
rightTrianglePattern2A_Star(5);
///////////////////////////////////////
function rightTrianglePatternBoolean(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let digit = 1;
    for (let j = 0; j < i + 1; j++) {
      row += digit;
      if (digit == 0) {
        digit = 1;
      } else {
        digit = 0;
      }
    }
    console.log(row);
  }
}
rightTrianglePatternBoolean(5);
///////////////////////////////////////
function rightTrianglePatternBoolean2(n) {
  let digit = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += digit;
      if (digit == 0) {
        digit = 1;
      } else {
        digit = 0;
      }
    }
    console.log(row);
  }
}
rightTrianglePatternBoolean2(5);
///////////////////////////////////////
