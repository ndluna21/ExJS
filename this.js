// THIS TRONG PHẠM VI TOÀN CỤC
console.log("Global:", this); // Browser: window | Node.js: global

// THIS TRONG OBJECT
const person = {
  name: "Luan",
  age: 24,
  showInfo: function () {
    console.log("Object:", person.name + " - " + person.age); // this trỏ đến person
  },
};
person.showInfo();

// THIS TRONG CONSTRUCTOR FUNCTION
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const user1 = new Person("Tinh", 22);
console.log("Constructor:", user1.name); // this tham chiếu tới đối tượng mới được tạo 

// THIS TRONG ARROW FUNCTION
const obj = {
  name: "Toan",
  show: function () {
    const arrowFunc = () => console.log("Arrow Function:", this.name);
    arrowFunc(); // this trỏ đến obj vì arFn không có this riêng
  },
};
obj.show(); 

// THIS TRONG SETTIMEOUT
// const obj2 = {
//   name: "Luan",
//   show: function () {
//     setTimeout(() => {
//       console.log("setTimeout:", this.show);
//     }, 1000);
//   },
// }; // ArFn k có this nên kế thừa từ show, this trong show trỏ đến obj2
// obj2.show();

// THIS VỚI CALL, APPLY, BIND
function greet(country, age) {
  console.log("Xin chào, " + this.name + " " + country + " " + age);
}
const user = { name: "Tinh" }; // this trỏ tới user

greet.call(user, "Thai Binh", 20);
greet.apply(user, ["Thai Binh", 20]);

const boundFunc = greet.bind(user, "Thai Binh", 20);
boundFunc();
