const add = function(a, b) {
	return a + b
};

const subtract = function(a ,b) {
	return a - b
};

const sum = function(inputArray) {
	const arraySum = inputArray.reduce(function(total, num) {return total + num}, 0);
  return arraySum
};

const multiply = function(inputArray) {
  const firstNumber = inputArray[0];
  const newArray = inputArray.slice(1);
  const multipleTotal = newArray.reduce(function(total, num) {
    return total * num
  }, firstNumber);
  return multipleTotal
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	if (num < 2) return 1
  let startingNumber = num;
  let factoralTotal = 0;
  for (i = startingNumber; i > 0; i--) {
    if (factoralTotal === 0) {
      factoralTotal = startingNumber;
    } else {
      factoralTotal *= i;
    }
  };
  return factoralTotal
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
