function getTotal(){
  let args = Array.prototype.slice.call(arguments);
  
  if(args.length > 1){
    return args.reduce((previousValue, currentValue) => { 
      return previousValue + currentValue;
     });
  }else{
    return function(num){
      return args[0] + num;
    }
  }
}

console.log(getTotal(10,20));
console.log(getTotal(5,40));
console.log(getTotal(3)(30));
console.log(getTotal(8)(12));