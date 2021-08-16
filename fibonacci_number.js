let fibonacci = (function fibo(n){
  return (n < 3) ? 1 : fibo(n - 1) + fibo(n - 2);
})(50);

console.log(fibonacci);