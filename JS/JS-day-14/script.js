// function pro(num) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(num);
//             res()
//         }, 2000)
//     })
// };

// pro(1)
//     .then(() => pro(2))
//     .then(() => pro(3))
//     .then(() => pro(4))











// const pro = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved")
//     },3000)
// })

// function data(){
//     pro.then(x=>console.log(res));
//     console.log("after promise")
// }


// data()





// use of async await
// 1. to avoid promise chainging
// 2. to execute async code properly without confusion
// 3. to handle promise in better wait






// 1. async funtion always returns a promise
// 2. await always used inside async funtion


const pro = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("payment done")
    },3000)
})

async function getData() {
    const x = await pro;
    console.log(x);
    console.log('dashboard access')
}

getData()