// // // // map()
// // // let numbers = [1, 2, 3, 4]
// // // let output = numbers.map(x => x*2)
// // // console.log(output)

// // // // filter()
// // // let marks = [7, 23, 36, 40, 15, 11, 34, 22, 18, 10]
// // // let pass = marks.filter(x => x>16) 
// // // console.log(pass)

// // let marks = [45, 12, 67, 29, 90, 33, 18, 76, 30, 24];
// // let result = marks.filter((mark)=>{
// //     if(mark>=16){
// //         console.log(mark,'pass')
// //     }
// //     else{
// //         console.log(mark,'fail')
// //     }
// // }) 


// let original = [1,2,3,4,5,6,7,8,9,10]

// let sum = 0

// for(i=0; i<original.length; i++){
//     sum+=original[i]
// }
// console.log(sum)
let arr = [1,2,3,4,5]
let res = arr.reduce((acc, current)=>acc+current)
HTMLFormControlsCollection.log(res)