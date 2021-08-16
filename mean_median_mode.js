// Avarage sum of total numbers 
function getMean(arr){
  return arr.reduce((accumulator, currentValue) => { return accumulator + currentValue}) / arr.length;
}

// Middle elements of odd length sorted array. Or avarage of even numbers middle elements of the sorted array.
function getMedian(arr){

  arr.sort(function(a,b){return a-b});

  let median;

  // Find median of odd length sorted array
  if(arr.length % 2 !== 0){
    median = arr[Math.floor(arr.length / 2)];
  }
  // find middle two elements of even length sorted array and avarage them.
  else{
    mid1 = arr[Math.floor(arr.length / 2) - 1];
    mid2 = arr[Math.floor(arr.length / 2)];

    median = (mid1 + mid2)/2;
  }

  return median;
}

function getMode(arr){

  let modeObj = {};

  arr.forEach(num =>{
    if(!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  let modes = [];
  let maxFrequency = 0;

  for(let num in modeObj){
    if(modeObj[num] > maxFrequency){
      modes = [num];
      maxFrequency = modeObj[num];
    }else if(modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }

  if(modes.length === Object.keys(modeObj).length) {
    modes = [];
  }


  return modes;
}

let mean_median_mode = (function meanMedianMode(arr){
  return {
    mean : getMean(arr),
    median : getMedian(arr),
    mode : getMode(arr)
  }
})([9,10,23,10,23,9]);

console.log(mean_median_mode);