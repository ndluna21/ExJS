let x // Undefined
console.log(typeof x);
x = 25; // Number
console.log(typeof x);
x = "Luan" //String
console.log(typeof x);
x = true //Boolean
console.log(typeof x);
x = null; //Null
console.log(typeof x);

const a = ["Orange", "Red", "Yellow"] //Array
console.log(typeof a);
const b = {
    name: "Luan",
    age: 25
} // Object
console.log(typeof b);
const c = function (){
    return 1;
} // Function
console.log(typeof c);

x = false
console.log(Boolean(x));
console.log(Boolean(""));
