/**
 *  Task: Describe the javascript call() and apply() methods.
 * Address the following: 
 * (i) How do they function?
 * (ii) What arguments do they take?
 * (iii) How are they different?
 */

const car1 = {
  brand : 'Porsche',
  getCarDescription: function(cost, year, color){
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${year}.\n`);
  }
}

/**
 * call() method is a native javascript method of the function prototype
 * object. 
 * 
 * The call() method takes arguments separately.
 * The apply() method takes arguments as an array.
 */

const car2 = {
  brand: 'Lamborghini'
}

const car3 = {
  brand: 'BMW'
}

car1.getCarDescription.call(car2, 20000, 2021, 'yellow');
car1.getCarDescription.apply(car3, [10000, 2019, 'green']);
