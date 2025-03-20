const fruits = ["Banana", "Orange", "Apple", "Mango"];

// toString trả về một chuỗi với tất cả giá trị mảng và phân tách nhau bởi dấu phẩy
// join trả về một chuỗi giống toString nhưng có thể thay đổi dấu phân cách
// let text = fruits.toString();
// let text2 = fruits.join(" and ")
// console.log(text);
// console.log(text2);

// concat: Nối chuỗi
// const arr1 = ["Thinh", "Truong"];
// const arr2 = ["Dang", "Hoang", "Mai"];
// const arr3 = ["Luan"];
// const children = arr1.concat(arr2, arr3);
// console.log(children);

// splice: Thêm từ vị trí x , xoá y phần tử, nếu start < 0, đi từ cuối mảng, del < 0 mặc định là 0
// fruits.splice(1, 0, "Lemon", "Kiwi") //Thêm từ vt số 1, xoá 0 ptu
// console.log(fruits);

// slice: số dương từ trái qua, bắt đầu từ 0, số âm bắt đầu từ -1, cắt từ x đến y ra một mảng mới
// const ans = fruits.slice(-3, -1)
// console.log(ans);

// indexOf: Tìm vị trí của phần tử đầu tiên xuất hiện trong mảng, trả về -1 nếu k thấy, phân biệt hoa thường
// lastIndexOf: Tìm vị trí của phần tử cuối cùng, tìm từ phải qua
// let index = fruits.indexOf("Apple", -1);
// console.log(index);
// const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index2 = fruits2.lastIndexOf("Apple", 3)
// console.log(index2);

// flat: Làm phẳng các mảng lồng nhau tạo thành mảng mới, mặc định là 0, Infinity để phẳng toàn bộ
// const myArr = [1, 2, [3, [4, [5, 6]], 7], 8];
// const newArr = myArr.flat(Infinity);
// console.log(newArr);

// forEach: Lặp qua từg phần tử trong mảng mà không cần trả về giá trị
// fruits.forEach(function (fruit, index) {
//     console.log(`${fruit}: ${index}`);
// })

// map: Lặp qua các phần tử của mảng và trả về mảng mới
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);
// console.log(newArr);
// function myFunction(num) {
//   return num * 10;
// }

// filter: Lọc phần tử thoả mãn điều kiện, tạo mảng mới, k hỗ trợ await, dùng Promise.all() nếu cần async
// const long = fruits.filter(word => word.length > 5)
// console.log(long);

// reduce: Duyệt qua mảng và thao tác với mảng, không tạo mảng mới, trả về một giá trị duy nhất
// const res = fruits.reduce((pre, next) => pre + ", " + next, "luna")
// console.log(res);

// some: Kiểm tra xem có ít nhất 1 ptu thoả mãn điều kiện không, trả về true nếu có ít nhất 1 ptu đúng và dừng ngay
// const res = fruits.some(function(fr){
//     return fr.startsWith("B")
// })
// console.log(res);

// every: Kiểm tra các phần tử trong mảng thoả mãn điều kiện k, k thay đổi mảng gốc, dừng ngay khi gặp phần tử false, true nếu tất cả ptu đúng
// const res = fruits.every(word => word.length < 7)
// console.log(res);

// find: Tìm phần tử đầu tiên trong mảng thoả mãn điều kiện, giữ nguyên mảng gốc, trả về 1 phần tử hoặc undefined
// const res = fruits.find(word => word.length == 5)
// console.log(res);

// findIndex: Tìm vị trí đầu tiên của phần tử thoả mãn điều kiện, trả về -1 nếu k tìm thấy, dừng ngay khi thấy, phân biệt hoa thường
// const res = fruits.findIndex(word => word.endsWith("e"))
// console.log(res);

// sort: Sắp xếp các phần tử trong mảng theo chuỗi Unicode 
// const res = fruits.sort()
// console.log(res);
// Sắp xếp có dấu
// const arr1 = ["Luận", "Thịnh", "Trường", "Mai", "Hoàng", "Đáng"];
// const res = arr1.sort((a, b) => a.localeCompare(b, "vi"))
// console.log(res)

// Prototype
Array.prototype.quicksort = function () { 
    // console.log("Current: ", this);
    let left = [], right = [];
    if(this.length <= 1) return this;
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] !== "number") {
            right.push(this[i])
        } else left.push(this[i])
    }
    // console.log(tmp);
    // console.log(right);
    // let tmp = left[left.length - 1];
    // for(let i = 0; i < left.length - 1; i++){
    //     if(left[i] == tmp) continue;
    //     if(typeof this[i] == "number"){
    //         if(this[i] < tmp) left.push(this[i]);
    //         else right.push(this[i])
    //     } 
    // }

    return left;
}
const arr2 = ['Thai',8, 2, , 9, undefined, 1, 4, null, 7, "Luna", 77, 20, 16];
const arr3 = arr2.quicksort()
console.log(arr3.sort((a,b) => a-b));
const arr4 = [3,  {
    a: "afssabf",
    e: {
        f: "hddks"
    }
}]
arr4[1].e = {a: "hehe"}
console.log(arr4);
