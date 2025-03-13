// (function () {
//   console.log("IIFE co ban");
// })();

// (() => {
//     console.log("IIFE chay Arrow function");
// })();

// (function (name) {
//     console.log(`${name}`);
// })("Luan");

// const result = (function (a, b) { 
//     return a + b;
// })(15, 20);
// console.log(result);

// const counter = (function () {
//     let a = 0; //Private variables
//     return {
//         increase: function () {
//             a++;
//             console.log(`Count: ${a}`);
//         },
//         getCount: function () {
//             return a;
//         }
//     };
// })();
// console.log(counter);
// counter.increase();
// counter.increase();
// console.log("Giá trị hiện tại:", counter.getCount()); 

// Closure
// Giữ trạng thái biến
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Counter: ${count}`);
    };
}
const counter1 = createCounter();
const counter2 = createCounter();
console.log(typeof counter1);
counter1();
counter1(); 
counter1();

// Hàm gọi 1 lần
function once(fn) {
    let executed = false;
    return function (...args) {
        if (!executed) {
            executed = true;
            return fn(...args);
        } else {
            console.log("Function đã chạy rồi!");
        }
    };
}
const init = once(() => console.log("Chạy lần đầu tiên!"));
console.log(typeof init);
init(); 
init();
init(); 
