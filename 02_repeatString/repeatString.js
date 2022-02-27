const repeatString = function(phrase, repeatAmount) {
  let message = "";
  if (repeatAmount < 0) {
    return "ERROR"
  } else {
    for (let i = 0; i < repeatAmount; i++) {
      message += phrase;
    }
  };
  return message
};

// Do not edit below this line
module.exports = repeatString;
