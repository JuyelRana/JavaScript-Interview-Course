/**
 * Problem: 
 * -Write a function that keeps track of how many times it was called and returns
 * that number.
 * - All functionality should be inside of the function - none outside.
 */

// function myFunc(){

// }

// console.log(myFunc());   // returns 1
// console.log(myFunc());   // returns 2
// console.log(myFunc());   // returns 3

function myFunc(){
  let count = 0;
  return function(){

    if(count<4){
      // do some
    }else{
      // do some
    }

    count++;
    return count;
  }
}

// console.log(myFunc());   

const instanceOne = myFunc();
const instanceTwo = myFunc();

console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());