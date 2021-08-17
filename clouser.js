/*** 
 * Q. What is clouser?
 * 
 * => A clouser is an inner function that has access to the scope of an enclosing function.
 * A clouser has access to variables in 3 separate scope- 
 * (i) Variables in its own scope.
 * (ii) Variables in the scope of the outer function.
 * (iii) Variables in the global scope.
 * 
 * The clouser also has access to-
 * (i) Its own parameters.
 * (ii) Parameters of outer functions.  
 * 
 ***/

 const globalVariable = 'global var';

 function outerFunc (param1){
   const variable1 = 'var one';

   function innerFunc(param2){
     const variable2 = 'var two';
     console.log('globalVariable: ', globalVariable);
     console.log('variable1: '+variable1);
     console.log('variable2: '+variable2);
     console.log('param1: '+param1);
     console.log('param2: '+param2);
   }

   innerFunc('param one');
  
 }

 outerFunc('param two')