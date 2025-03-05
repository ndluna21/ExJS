// 1️⃣ Khai báo chuỗi
let str1 = "Hello, JavaScript!";
let str2 = "Chào mừng đến với JS!";
let str3 = `Template String: ${str1}`;

console.log(str1);
console.log(str2);
console.log(str3);

// 2️⃣ Độ dài chuỗi
console.log("Độ dài chuỗi:", str1.length);

// 3️⃣ Truy cập ký tự
console.log("Ký tự đầu tiên:", str1[0]);
console.log("Ký tự cuối cùng:", str1[str1.length - 1]);

// 4️⃣ Cắt chuỗi (slice, substring, substr)
console.log("Slice (0,5):", str1.slice(0, 5));
console.log("Substring (5,0):", str1.substring(5, 0)); // Không hỗ trợ số âm, nhưng đổi dc vị trí start-end
console.log("Substr (0,5):", str1.substr(0, 5));

// 5️⃣ Chuyển đổi chữ hoa, chữ thường
console.log("To UpperCase:", str1.toUpperCase());
console.log("To LowerCase:", str1.toLowerCase());

// 6️⃣ Tìm kiếm chuỗi
console.log("Index of 'JavaScript':", str1.indexOf("JavaScript"));
console.log("Includes 'JS':", str1.includes("JS"));
console.log("Starts with 'Hello':", str1.startsWith("Hello"));
console.log("Ends with '!':", str1.endsWith("!"));

// 7️⃣ Thay thế chuỗi
let newStr = str1.replace("JavaScript", "JS");
console.log("Sau khi replace:", newStr);

// 8️⃣ Cắt chuỗi thành mảng
let words = str1.split(" ");
console.log("Mảng sau split:", words);

// 9️⃣ Nối chuỗi
let str4 = "Hello";
let str5 = "World";
console.log("Concatenation:", str4 + " " + str5);
console.log("Join bằng concat:", str4.concat(" ", str5));

// 🔟 Xóa khoảng trắng thừa
let str6 = "   JavaScript   ";
console.log("Trim:", str6.trim());
console.log("TrimStart:", str6.trimStart());
console.log("TrimEnd:", str6.trimEnd());
