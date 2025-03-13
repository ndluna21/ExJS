// // const test =  new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         let success = true;
// //         if (success) {
// //             reject("False");
// //         } else {
// //             resolve("True");
// //         }
// //     }, 2000)
// // });

// // test
// //     .then((result) => {
// //         console.log("Ket qua: ", result);
// //     })
// //     .catch((error) => {
// //         console.log("Loi: ", error);
// //     })
// //     .finally(() => {
// //         console.log("End");
// //     })

// // Promise.race() trả về pr hoàn thành đầu tiên, kết quả phụ thuộc vào pr đầu tiên hoàn thành
// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve("P1 race"), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject("P2 race"), 1000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("P3 race"), 3000));
// const p4 = new Promise((resolve, reject) => setTimeout(() => reject("P4 race"), 4000));

// Promise.race([p1, p2, p3, p4])
//   .then((result) => console.log("Res race: ", result))
//   .catch((error) => console.log("Err race: ", error));


// // Promise.any() trả về pr đầu tiên resolve, reject khi tất cả pr reject
// const pr1 = new Promise((resolve, reject) =>  setTimeout(() => resolve("P1 any"), 4000));
// const pr2 = new Promise((resolve, reject) =>  setTimeout(() => reject("P2 any"), 3000));
// const pr3 = new Promise((resolve, reject) =>  setTimeout(() => resolve("P3 any"), 2000));
// const pr4 = new Promise((resolve, reject) =>  setTimeout(() => reject("P4 any"), 1000));

// Promise.any([pr1, pr2, pr3, pr4])
//     .then(result => console.log("Res any: ", result))
//     .catch(error => console.log("Err any: ", error));

// // Promise.allSetted() trả về 1 mảng kết quả về trạng thái của tất cả pr 
// const pro1 = new Promise((resolve, reject) => setTimeout(() => resolve("P1 allSetted"), 2000));
// const pro2 = new Promise((resolve, reject) => setTimeout(() => reject("P2 allSetted"), 1000));
// const pro3 = new Promise((resolve, reject) => setTimeout(() => resolve("P3 allSetted"), 3000));
// const pro4 = new Promise((resolve, reject) => setTimeout(() => reject("P4 allSetted"), 4000));

// const a = Promise
//   .allSettled([pro1, pro2, pro3, pro4])
//   .then((result) => console.log("Res allSetted: ", result));
// console.log(typeof a);

// Promise.all() reject khi có ít nhất 1 pro reject, resolve khi tất cả pr resolve
const prom1 = new Promise((resolve, reject) => setTimeout(() => resolve("P1 all"), 1000));
const prom2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("P2 all"), 2000)
);
const prom3 = new Promise((resolve, reject) => setTimeout(() => resolve("P3 all"), 3000));
const prom4 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("P4 all"), 4000)
);

Promise.all([prom1, prom2, prom3, prom4])
  .then((result) => console.log("Res all: ", result))
  .catch((error) => console.log("Err all: ", error));