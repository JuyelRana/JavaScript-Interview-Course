/***
 * Variable and functions are hoisted to the top of the scope that they are 
 * declared in. 
 * 
 * 
 * console.log(getProducts(2,3));  // TypeError: getProducts is not a function
 * var getProducts = function(num1, num2){
 * return num1 * num2;
 * }
 * console.log(getProducts(2,4));
***/
/**
 * console.log(getProducts(2,3));
 * function getProducts(num1, num2){
 *    return num1 * num2;
 * }
 */



/**
 * console.log(num); // ReferenceError: num is not defined
 * num = 6; 
 * console.log(color)  // undefined
 * var color = "blue";
 * console.log(color);
 */


var globalVar = 'global';
(function(){
  var name= 'Jen';
  var getAge = function(){
    return '30';
  }
  function getState(){
    return 'Juyel City';
  }
})();



