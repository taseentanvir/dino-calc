import React from "react";

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number % 2 === 0) {
    return number === 2;
  }
  if (number % 3 === 0) {
    return number === 3;
  }
  var horizon = Math.floor(Math.sqrt(number));
  var factor = 5;
  while (factor <= horizon) {
    if (number % factor === 0) {
      return false;
    }
    if (number % (factor + 2) === 0) {
      return false;
    }
    factor += 6;
  }
  return true;
};

export default isPrime;
