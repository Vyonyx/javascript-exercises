const ftoc = function(temp) {
  let conversion = (temp - 32) * (5/9);
  const rounded = Math.round(conversion * 10) / 10;
  return rounded
};

const ctof = function(temp) {
  let conversion = temp * (9/5) + 32;
  let rounded = Math.round(conversion * 10) / 10;
  return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
