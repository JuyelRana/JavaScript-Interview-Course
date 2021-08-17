/**
 * TASK: 
 * 1. Describe what is json format
 * 2. Delete the data types not permitted in JSON.
 * 3. Replace the placeholder-text with the corresponding data type, properly 
 * formatted as JSON.
 * 
 * const myJson = {
 *    myString : [some string],
 *    myNumber : [some number],
 *    myNull : [null],
 *    myBoolean : [false],
 *    myUndefined : [undefined],
 *    myArray : [some array],
 *    myFunction : [some function],
 *    myObject : [some object]
 * }
 * 
 * ==> JSON : JavaScript Object Notation
 * (i) Light weight format for transferring data.
 * 
 * ==> JSON is used beacuse: 
 * (i) It is easy for humans to understand. 
 * (ii) It is easy for computers to parse & generate. 
 * 
 */

const myJson = {
  'myString' : 'hello world',
  'myNumber' : 01726903951,
  'myNull' : '',
  'myBoolean' : false,
  'myArray' : [1,2,3,4,5,6],
  'myObject': {
    'name': 'Md. Juyel Rana',
    'ID': 1302058,
    'age': 26
  }
}

console.log(myJson.myObject);