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

})([1,6,5,4,3,3,0,7], 7);

console.log(twoSum);