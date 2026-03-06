
// Promises: used to manage asynchronous code effectivly better than callback HTMLElement. And advantages are easy to manage the getComputedStyle, easy to debugger, code readability is good.
// Promise has 3 states.
// pending
// fullfilled
// rejected
// Promise Consumers :
// 1. .then(): when promise resolved then it is going to .then
// 2. .catch(): when promise rejected it is goinf to .catch to handle the error.
//.finally(): finally will run every time a promise defined weather the prmose resolved or rejected


function pro() {
    return new Promise((res, rej) => {
        let a=10;
        if (a>50){
            res();
        }
        else {
            rej()
        }
    })
}
pro()
.then(() => consonle.log("res"))
.catch(() => console.log("rej"))
.finally(() => console.log("inside finally"))