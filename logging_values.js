(function(){
 
  var x = y = 200;

/***
 * y = 200 // global variable 
 * var x = y; local variable.
 * thats why logged 200 and ReferenceError: x is not defined
 */
})();

console.log('y: ', y);
console.log('x: ', x);