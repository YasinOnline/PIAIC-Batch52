"use strict";
let numbers = [5, -3, 8, -2, 10, -7, 4, -1];
numbers = numbers.filter((number) => number >= 0);
console.log("Array after removing negative numbers:", numbers);
