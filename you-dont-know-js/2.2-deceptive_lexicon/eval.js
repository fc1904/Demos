function test(str, a) {
  //   "use strict";
  eval(str);
  console.log(a, b);
}

// test("const b = 3; ", 1); // ReferenceError: b is not defined
// test("let b = 3; ", 1); // ReferenceError: b is not defined
test("var b = 3; ", 1); // 1 3
test("b = 3; ", 1); // 1 3
