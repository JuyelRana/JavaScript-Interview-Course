let word = (function reverseWord(str){

  let wordsArr = str.split(' ');

  let reverseWordsArr = []

  wordsArr.forEach(word=>{

    let reverseWord = '';

    for(let i = word.length - 1; i >= 0; i--){
      reverseWord += word[i];
    }
    reverseWordsArr.push(reverseWord);
  });

  return reverseWordsArr.join(' ');

})('this is a string of words');

console.log(word);