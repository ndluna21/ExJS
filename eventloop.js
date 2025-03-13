console.log("So 1");
setTimeout(() => {
  console.log("So 2");
});
console.log("So 3");
const a = new Promise((resolve, reject) => {
  resolve("so 4")
});
a.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) =>{
    resolve("so 5")
  })
})
.then((result) => {
  console.log(result);
})

// console.log(a);
