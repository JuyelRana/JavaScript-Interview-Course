let mergeSort = (function mergeSort(arr){
  // Take in a single, unsorted array as a parameter 
  // Split the array into two halves

if(arr.length < 2) return arr;

let middleIndex = Math.floor(arr.length / 2);
let firstHalf = arr.slice(0, middleIndex);
let secondHalf = arr.slice(middleIndex);

return merge(mergeSort(firstHalf), mergeSort(secondHalf));

})([3,34,4,23,-45,43,31]);

console.log(mergeSort);

function merge (arr1, arr2){
  // takes in two sorted arrays as parameter
  // merges those sorted arrays into one sorted array
  // return one sorted array

  let result = [];
  while(arr1.length && arr2.length){
    let min;
    if(arr1[0] < arr2[0]) min = arr1.shift();
    else min = arr2.shift();
    result.push(min); 
  }

  if(arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
  return result;
}