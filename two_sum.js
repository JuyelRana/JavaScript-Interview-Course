let twoSum = (function twoSum(numArray, sum){
  let pairs = [];
  let hashTable = [];

  numArray.forEach(num=>{
    let currentNumber = num;
    let counterPart = sum - currentNumber;

    if(hashTable.indexOf(counterPart) !== -1){
      pairs.push([currentNumber, counterPart]);
    }
    hashTable.push(currentNumber);

  });

  return pairs;

})([40,11,19,17,-12], 28);

console.log(twoSum);