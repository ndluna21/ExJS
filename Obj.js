const per = {
    name: "Luan",
    age: 24
}
// const per4 = {
//     name: "Tinh",
//     age: 22
// }
// const per5 = {
//     name: "Toan",
//     age: 23
// }
// const per6 = {
//     name: "Quynh",
//     age: 21
// }
const per2 = {
    age: 20,
    eyeColor: "blue"
}

// Object.assign(per, per2)
// console.log(per);

// keys la ra key cua Object
// const keys = Object.keys(per)
// console.log(keys);

// Tao Object tu mang
// const arr = ["Luan", 24]
// const arr1 = ["Tinh", 21];
// const arr2 = ["Toan", 22];
// const peo = [
//     arr,
//     arr1,
//     arr2,
// ];
// const myOb = Object.fromEntries(peo);
// console.log(myOb);
// console.log(myOb.Toan);

// preventExtensions khong cho them thuoc tinh
// Object.preventExtensions(per)

// let ans = Object.isExtensible(per)
// console.log(ans);

// Seal khong cho them va xoa thuoc tinh
// Object.seal(per)
// delete per.eyeColor
// console.log(per);

// let ans = Object.isSealed(per)
// console.log(ans);

// freeze khong cho them, xoa, sua thuoc tinh
// Object.freeze(per)
// per.age = 20;
// console.log(per);

// let ans = Object.isFrozen(per)
// console.log(ans);

// defineProperty them hoac sua 1 thuoc tinh
// Object.defineProperty(per, "name", {value: "Nga"})
// console.log(per);

// defineProperties them hoac sua nhieu thuoc tinh
// Object.defineProperties(per, {
//     name: {value: "Trinh"},
//     age: {value: 18}
// })
// console.log(per);

// getOwnPropertyDescriptor tra ve mo ta cua 1 thuoc tinh (bien, co the thay doi value k, co the dung vong lap k, co the xoa hoac sua cac descriptor khac)
// getOwnPropertyDescriptors tra ve mo ta cua tat ca thuoc tinh
// getOwnPropertyNames tra ve ten thuoc tinh cua Obj, keys chi lay duoc nhung thuoc tinh co the xuat hien trong vong lap
// let ans = Object.getOwnPropertyNames(per)
// console.log(ans);

// getPrototypeOf: Lay prototype cua Obj
// const prototype = Object.getPrototypeOf(per)
// console.log(prototype);

const a1 = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
console.log(a1.flat(4));
