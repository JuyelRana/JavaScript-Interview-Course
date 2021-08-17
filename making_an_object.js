/**
 * 3 Different ways to create an object
 * TASK: 
 * List and describe 3 different ways of creating an object in javascript. 
 * 
 */

// 1. Object literal syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function(){
    return this.length;
  }
}

console.log(myBoat);

// 2. new keyword and object constructor

const student = new Object();

student.name = 'Md. Juyel Rana';
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ['English','Algebra', 'Chemistry'];
student.getClasses = function(){
  return this.classes;
}

console.log(student);

function Car (color,brand,year){
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function(){
  return this.color;
}

let juyelsCar = new Car('blue', 'ferarri', 2021);
let rafiasCar = new Car('black', 'bmw', 2021);
console.log(rafiasCar);

