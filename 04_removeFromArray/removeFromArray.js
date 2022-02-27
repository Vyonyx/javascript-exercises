const removeFromArray = function() {
  let chosenArray = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < chosenArray.length; j++) {
      if (arguments[i] === chosenArray[j]) {
        chosenArray.splice(j, 1);
      }
    }
  } return chosenArray
};

// Do not edit below this line
module.exports = removeFromArray;
