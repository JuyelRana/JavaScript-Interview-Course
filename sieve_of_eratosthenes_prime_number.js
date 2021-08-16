let primeNumber = (function sieveOfEratosthenes(num){
  let primes = [];
  
  for(let i = 0; i <= num; i++){
    primes[i] = (i > 1) ? true : false;
  }

  for(let i = 2; i <= Math.sqrt(num); i++){
    for(let j = 2; i * j <= num; j++){
      primes[i * j] = false;
    }
  }

  let result = [];
  for(let i = 0; i < primes.length; i++){
    if(primes[i]) result.push(i);
  }

  return result.join(' ');

})(200);

console.log(primeNumber);