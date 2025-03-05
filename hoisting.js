// Hoisting với var
console.log(a); 
var a = 10;
console.log(a); 

// Hoisting với let (Lỗi)
try {
  console.log(b);
} catch (e) {
    console.log("Lỗi:", e.message);
}
let b = 20;

// Hoisting với const (Lỗi)
try {
  console.log(c);
} catch (e) {
    console.log("Lỗi:", e.message);
}
const c = 30;

// Hoisting với Function Declaration
sayHello(); 
function sayHello() {
    console.log("Hello World!");
}

// Hoisting với Function Expression (Lỗi)
try {
    greet();
} catch (e) {
    console.log("Lỗi:", e.message);
}
var greet = function () {
    console.log("Hello!");
};
