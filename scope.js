// var có function scope, truy cập trong hàm được gọi, muốn gọi ngoài hàm thì dùng return hoặc closure
var global = 1; let global2 = 2; const global3 = 3;
// console.log("var: ", window.global);
// console.log("let: ", window.let);
// console.log("const: ", window.const);
function test() {
  var b = 2;
  console.log(global);
  return b;
}
console.log(test());
// console.log(b);

// Có thể tuy cập bên ngoài nếu là if, for, while
if (true) {
  var c = 3;
}
// function () {
//   var d= 4
// }
console.log(c);

// let, const có block scope, truy cập trong dấu {} được khai báo
if (true) {
  let d = 4;
//   return d;
}
// console.log(d);

