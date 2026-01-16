///didt get why
console.log([]==[])
console.log({}=={})
console.log(!false)
console.log(!!false)
console.log(!!'false')
console.log(![])
console.log(!![])
console.log(1+'1')
console.log('1'-1) /// --> 0
console.log('5'*'2')
console.log('5'*'2')
console.log(true + true)
console.log(true + false)
console.log([1.2]+[3,4])///--> 1,23,4
console.log([]+{})///--> [object Object]
console.log(0.2 + 0.2 == 0.3)
console.log(0.2 + 0.2 === 0.3)





//---types of function---//

// 1. regular function
function sample(a){
    console.log(a,"sample");
}
sample(5)
function sample(){
   return'sample';
}
console.log(sample());




// 2. arrrow function
const sample=()=>"sample"
console.log(sample())


const sample=(a,b)=>a+b;
console.log(sample(5,10))


// 3. callback function

function sample(){
    console.log('sample');
}
sample()
function demo(){
    console.log('demo');
}
demo()

// to call in one line to reduce time 
// sample(demo())
//this is still not good cuz demo is called first. better way is to use the callback feature

function sample(callback){
    console.log('sample');
    callback();
}
function demo(){
    console.log('demo');
}

sample(demo)
//this demo is stored as the value of calback. of fn1. 
// and the top function is run as 
// demo() instead of callback())
//call back define -->
// in call back function if we pass a function as an argument inside another function its called callback function
