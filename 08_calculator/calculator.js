const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
	return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let num of array) {
    product *= num;
  }
  return product;
};

const power = function(base, power) {
	let solution = 1;
  for (let i = 0; i < power; i++) {
    solution *= base;
  }
  return solution;
};

const factorial = function(number) {
	let solution = 1;
  for (let i = 1; i <= number; i++) {
    solution *= i;
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
