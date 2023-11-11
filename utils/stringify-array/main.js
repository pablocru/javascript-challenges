"use strict";

function stringifyArray(arr) {
  const stringArr =
    JSON.stringify(arr, (key, value) => stringifyNullish(value), 0);

  var regExp = /\[\[\s*([^]*?)\s*\]\]/g;

  return stringArr.replace(regExp, "[ [$1] ]");
};

function stringifyNullish(value) {
  if (Number.isNaN(value)) return "NaN";
  
  if (typeof value === 'undefined') return "undefined";

  return value;
};

module.exports = { stringifyArray };