// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Dữ liệu từ server ");
//     }, 2000);
//   });
// }
// async function getData() {
//   console.log("Đang lấy dữ liệu...");
//   const data = await fetchData(); // ⏳ Chờ fetchData() hoàn thành
//   console.log("Dữ liệu nhận được:", data);
// }
// getData();


async function getData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await data.json());
}
getData();

