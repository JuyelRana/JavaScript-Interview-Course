let binarySearch = (function binarySearch(numArray, key){

  let middleIndex = Math.floor(numArray.length/2);
  let middleElement = numArray[middleIndex];

  if(middleElement === key){
    return true;
  }else if(middleElement < key && numArray.length > 1){
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  }else if(middleElement > key && numArray.length > 1){
    return binarySearch(numArray.splice(0, middleIndex), key);
  }else{
    return false;
  }

})([5,7,12,16,36,39,42,34,71], 15);

console.log(binarySearch);