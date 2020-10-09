let obj = {
  b: 2,
};

let a = 3;
let c = 10;

with (obj) {
  a = 2;
  c = 4;
}

console.log(obj.a, a, c);

function f(x, o) {
  with (o) {
    console.log(x);
  }
}
f(1, { x: 2 }); // 2

f(1, { test: 2 }); // 1
