import React from "react";

const primeFactorTree = (number) => {
  var array = [];
  var s = 6;
  while (number > 1 && number % 2 === 0) {
    number /= 2;
    array.push(2);
  }
  while (number > 2 && number % 3 === 0) {
    number /= 3;
    array.push(3);
  }
  while (number > 4) {
    var p = s - 1;
    var q = s + 1;
    while (number > 4 && number % p === 0) {
      number /= p;
      array.push(p);
    }
    while (number > 4 && number % q === 0) {
      number /= q;
      array.push(q);
    }
    s += 6;
  }
  return array;
};

export default primeFactorTree;
