// Demo với Array
const num = [1, 2, 3];
const [a, b, c] = num;
console.log(a,b,c);
// Bo qua phan tu
const [ , , third] = num;
console.log(third);
// Lay phan con lai
const [first, ...rest] = num;
console.log(...rest);

// Demo với Object
const per = {name: "Luan", age: 24, sex: "Nam"};
// const {name, age, sex} = per
// console.log(name, age, sex);
// Doi ten bien
const  {name: fullName} = per
console.log(fullName);
// Lay phan con lai
const {name, ...other} = per;
console.log(other);

// Demo với Func
function getVar() {
    return [10, 20]
}
const [x, y] = getVar();
console.log(x, y);
function printUser({name, age}) {
    console.log(`${name}, ${age} tuoi`);
}
printUser(per)


// Demo Spread
// Sao chép array, Object
const arr1 = [1,2,3], user1 = {name: "Luan", age: 24}
const arr2 = [...arr1], user2 = {...user1};
console.log(arr2, user2);
// Gộp object, nối array
const arr3 = [4,5,6], user3 = {country: "Bac Ninh"}
const meAr = [...arr1, ...arr3], meOb = {...user1, ...user3}
console.log(meAr, meOb);
// Thêm phần tử vào Array, Thêm và sửa prop trong Object
const arr4 = [0, ...arr1];
console.log(arr4);
const user4 = {...user1, age: 25, sex: "Nam"}
console.log(user4);
