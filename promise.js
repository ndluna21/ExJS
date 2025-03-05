
const test =  new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            reject("False");
        } else {
            resolve("True");
        }
    }, 2000)
});

test
    .then((result) => {
        console.log("Ket qua: ", result);
    })
    .catch((error) => {
        console.log("Loi: ", error);
    })
    .finally(() => {
        console.log("End");
        
    })