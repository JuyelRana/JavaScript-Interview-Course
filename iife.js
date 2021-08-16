/*** 
 * Q. What is an IIFE and why are they used?
 * 
 * => Immediately Invoked Function Expression. A function that is executed right after it is called. example 
 * 
 ***/

 let iife = (function doubleNumber (num){
   return num * 2;
 })(10);

console.log(iife);