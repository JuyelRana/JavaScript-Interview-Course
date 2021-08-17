console.log(900.9 === 3 * 300.3);  // false
console.log(Number((3 * 300.3).toPrecision(12)));

console.log(900.9 === Number((3 * 300.3).toPrecision(12)));
