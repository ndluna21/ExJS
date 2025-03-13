// // Khai báo chuỗi
let str1 = "Hello, JavaScript!";
let str2 = "Chào mừng đến với JS!";
let str3 = `Template String: ${str1}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// // Độ dài chuỗi
// console.log("Độ dài chuỗi:", str1.length);

// match() trả về mảng chứa tất cả các kết quả phù hợp, nếu k sẽ là null
// console.log(str1.match("Ja"));
// let str4 = "I love JavaScript 8. JavaScript is fun 1! ";
// console.log(str4.match(/Ja/g)); // g tìm tất cả kết quả
// console.log(str4.match("Hello")); // Không có sẽ trả về null
// console.log(str4.match(/S/i)); // i để không phân biệt hoa thường

// search()
// console.log(str4.search("Java")); // Trả về vị trí xuất hiện đầu tiên, nếu không sẽ là -1

// Thêm kí tự vào chuỗi
// console.log(str1.padStart(20, "o"));
// console.log(str1.padEnd(20, "o"));
// console.log(str1.padEnd(10, "o"));


// // Truy cập ký tự
// console.log("Ký tự đầu tiên:", str1[0]);
// console.log("Ký tự cuối cùng:", str1[str1.length - 1]);

// // Cắt chuỗi (slice, substring)
// console.log(str1.indexOf("J"));
// console.log("Slice 1:", str1.slice(7)); // Lấy từ start tới cuối, 
// console.log("Slice 2:", str1.slice(-7)); // Lấy từ cuối ngược lại tới số âm, 
// console.log("Slice 3:", str1.slice(-7, -2)); // Lấy từ cuối ngược lại tới ngay trước end

// Số âm =>leng + số âm, (Nếu vẫn ra âm thì = 0) tính từ đó tới end nếu end > 0, tới start nếu end < 0
// console.log("Slice 4:", str1.slice(5, -20));

// console.log("Substring (5,0):", str1.substring(5, 0)); // Không hỗ trợ số âm, nhưng đổi dc vị trí start-end
// console.log("Substring (5,0):", str1.substring(-5)); // Tự động quy về thành 0
// console.log("Substring (5,0):", str1.substring(1, -100)); // Đổi âm về 0, cắt từ 0 đến tham số còn lại
// console.log("Substring (5,0):", str1.substring(-1, -9)); // Đổi âm về 0, 0 -> 0 => ""

// // Chuyển đổi chữ hoa, chữ thường
// console.log("To UpperCase:", str1.toUpperCase());
// console.log("To LowerCase:", str1.toLowerCase());

// // Tìm kiếm chuỗi
// console.log("Index of a:", str1.indexOf("a"));
// console.log("Index of a:", str1.lastIndexOf("a"));
// console.log("Includes 'JS':", str1.includes("JS"));
// console.log("Starts with 'Hello':", str1.startsWith("Hello"));
// console.log("Ends with '!':", str1.endsWith("!"));

// // Thay thế chuỗi
// let newStr = str1.replace("JavaScript", "JS");
// console.log("Sau khi replace:", newStr);

// // Cắt chuỗi thành mảng
// let words = str1.split(" ");
// console.log("Mảng sau split:", words);

// // Nối chuỗi
// let str4 = "Hello";
// let str5 = "World";
// let str6 = 3
// let str7 = "1"
// let str8 = null
// console.log(str6 - str7); // Dấu - ưu tiên số hơn, + ưu tiên chuỗi hơn
// console.log(str6 + str7); 
// console.log("Concatenation:", str6 + " " + str4); // Tự động ép kiểu thành chuỗi
// // Chỉ dùng được khi str5 là chuỗi, tránh việc có null và undefined trong kq
// console.log("Concat:", str5.concat(" ", str4));

// // Xóa khoảng trắng thừa
// let str6 = "   JavaScript   ";
// console.log("Trim:", str6.trim());
// console.log("TrimStart:", str6.trimStart());
// console.log("TrimEnd:", str6.trimEnd());

// const s2 = "Hello Haha"
// const s3 = s2.split("")
// console.log(s3);
// let sum = s3.reduce((acc, next) => {
//   if (next === "H" || next === "h") acc++;
//   return acc;
// }, 0);
// console.log(sum);
// for (let i = 0; i < s3.length; i++) {
//     if(s3[i] == "h" || s3[i] == "H" )
//     sum++;
// }
// console.log(sum);


