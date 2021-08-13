let encryptCipher = (function caesarCipher(str, num){
  // Convert any number between 0 to 25;
  num = num % 26;

  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newString = '';
  
  for(let i =0; i < lowerCaseString.length; i++){
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' '){
      newString += currentLetter;
      continue;
    }

    // get the current index
    let currentIndex = alphabet.indexOf(currentLetter);
    // Rotate the character into num times
    let newIndex = currentIndex + num;
    
    if(newIndex > 25){
      newIndex = newIndex - 26;
    }

    if(newIndex < 0){
      newIndex = 26 + newIndex;
    }

    if(str[i] === str[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    }else{
      newString += alphabet[newIndex];
    }
  }

  return newString;

})("JavaScript", -10000);

console.log(encryptCipher);