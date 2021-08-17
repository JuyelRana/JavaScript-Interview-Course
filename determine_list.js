// passing by reference 
// const list1 = [1,2,3,4,5];
// const list2 = list1;
// console.log(list2); // [ 1, 2, 3, 4, 5 ]
// list1.push(6,7,8);
// console.log(list2);  // [1, 2, 3, 4,5, 6, 7, 8]

// console.log(list1);


// passing by value
// const myNum = 10;
// const myString = 'hello world';
// const myString1 = myString;
// console.log(myString1);


// passing by reference 
let list1 = [1,2,3,4,5];

let list2 = list1.slice();

list1.push(6,7,8);

console.log('List 1: ', list1);  // [1, 2, 3, 4,5, 6, 7, 8]

console.log('List 2: ', list2); 


// passing by value
let myNum = 10;
let myString = 'hello world';
let myString1 = myString;
console.log(myString1);
