// 1️⃣ Hàm Đơn Giản (Function Declaration)
function sayHello(name) {
  return `Xin chào, ${name}!`;
}
console.log(sayHello("Luan"));

// 2️⃣ Hàm Biểu Thức (Function Expression)
const add = function (a, b) {
  return a + b;
};
console.log("Tổng:", add(5, 10));

// 3️⃣ Hàm Mũi Tên (Arrow Function)
const multiply = (x, y) => x * y;
console.log("Nhân:", multiply(4, 3));

// 4️⃣ Hàm Không Có return (void function)
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("JavaScript");

// 6️⃣ Hàm Sử Dụng `arguments` (Chỉ có trong function thường, không dùng được với arrow function)
function sumAll() {
  let sum = 0;
  for (let num of arguments) {
    sum += num;
  }
  return sum;
}
console.log("Tổng các số:", sumAll(1, 2, 3, 4, 5));

// 7️⃣ Hàm Rest Parameter (...args)
function sumWithRest(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Tổng với rest:", sumWithRest(10, 20, 30));

// 8️⃣ Hàm Trả Về Hàm (Closure)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = createMultiplier(2);
console.log("Gấp đôi:", double(5));
