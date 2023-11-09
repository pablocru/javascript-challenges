"use strict";

/**
cleanArrayInPlace(arrayIn);

Removes the entries of the input array that have value null or undefined
or "empty" entries.
Does not assume array of primitives, but does not work recursively.
*/
function cleanArrayInPlace(arrayIn) {
  /** Infinite loop locker because of recursive function. */
  let hasPassed = false;
  for (let i = 0; i < arrayIn.length;) {
    const item = arrayIn[i];

    if (item === null || (typeof item !== 'object' && !item)) {
      const length = arrayIn.length;

      // Move each item 1 position left and delete last array item.
      for (let j = i; j < length; j++) arrayIn[j] = arrayIn[j + 1];
      arrayIn.length = length - 1;
    }
    // Recursive function call to clean arrays
    else if (!hasPassed && Array.isArray(item)) {
      cleanArrayInPlace(item)
      hasPassed = true;
    }
    else {
      i++; // Index only is increase if is a valid value.

      hasPassed = false; // Restore locker.
    };
  }
};

let arrayInOut2 = [
  3, , [2,4,undefined, null], , 4, undefined, 5, null,
  { a: 6 }, [ 7, 8, [null], null, 9 ], 10
];
cleanArrayInPlace(arrayInOut2);
console.log(arrayInOut2);