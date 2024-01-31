"use strict";
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
let modifiedArray = insertValueAtIndex(myArray, 2, 'How are you?');
console.log(modifiedArray);
