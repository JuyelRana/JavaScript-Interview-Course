function getProduct(num1){
  return function(num2){
    return num1 * num2;
  }
}

console.log(getProduct(10)(20));

function getTravelTime(distance){
  return function(speed){
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime(400);
console.log(travelTimeBosNyc(100));
console.log(travelTimeBosNyc(80));