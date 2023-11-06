"use strict";

/*
insertInArrayInPlace(arrayIn, indexThatIsBefore, arrayOrPrimitiveToInsert)

Same as `insert-in-array.js`, but modifies the input array in place,
and does not return anything.
*/

function insertInArrayInPlace(
  arrayInOut, indexThatIsBefore, arrayOrPrimitiveToInsert
) {
  let insertedArray = [];
  const position = indexThatIsBefore + 1;
  let moveOriginalArrayIndex = 0;

  for (let i = position; i < arrayInOut.length; i++) {
    // Insert item
    if (i === position) {
      // Case 1: Is a primitive value
      if (typeof arrayOrPrimitiveToInsert !== 'object') {
        insertedArray[i] = arrayOrPrimitiveToInsert;
        moveOriginalArrayIndex++;
      }
      // Case 2: Is an Array
      else {
      const length = arrayOrPrimitiveToInsert.length;
      moveOriginalArrayIndex += length;

        for (let j = 0; j < length; j++)
          insertedArray[i + j] = arrayOrPrimitiveToInsert[j];
      };
    };

    // Insert rest of arrayIn
    if (i >= position)
      insertedArray[i + moveOriginalArrayIndex] = arrayInOut[i];
  };

  for (let i = position; i < insertedArray.length; i++) {
    arrayInOut[i] = insertedArray[i];
  };
};

let arrayInOut = [ 8, 9];
insertInArrayInPlace(arrayInOut, 3, "hi");
console.log(arrayInOut);