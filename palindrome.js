
let palindromeChecker = (function isPalindrome(str) {
  
  let strArr = str.toLowerCase().split('');
  
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz';
  
  let charactersArr = [];

  strArr.forEach(iterator=>{
    if(validCharacters.indexOf(iterator) > -1) charactersArr.push(iterator);
  })

  if(charactersArr.join('') === charactersArr.reverse().join('')) return true;
  else return false;

})("Madam I am adam");

console.log(palindromeChecker);