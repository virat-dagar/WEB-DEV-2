/* 
let arr = [1,2,3,4,5,-3,-4,-2,0,9,8,-10,-29]
let res = []
while (arr.length>0){
    let val = arr.shift()
    if(val>0){
        res.push(val)
    }
}
console.log(res) 
*/

// check for palindrome. 

/*

let arr = [1,2,3,4,5,6,5,4,3,2,1];
let isPalindrome = true;

while (arr.length > 1) {
  let a = arr.shift();
  let b = arr.pop();

  if (a !== b) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("is a palindrome");
} else {
  console.log("not a palindrome");
}

*/

let arr = [1,2,3,4,5,6,5,4,3,2,1];

let i = 0;
let j = arr.length - 1;
let isPalindrome = true;

while (i < j) {
  if (arr[i] !== arr[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

console.log(isPalindrome ? "is a palindrome" : "not a palindrome");