// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertValueAtIndex(arr: any[], index: number, value: any): any[] {
  // The array and value set to take "any" date type so it can accept string or number to add into the new array.

  // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

  // Parameters
  // start: the index which to start changing the array
  // deleteCount: an integer indicating the number of elements in the array to remove from the start
  // items: the elements to add to the array, beginning from the start

  // Return Values
  // New Array

  // Using splice to insert the value at the specified index
  arr.splice(index, 0, value);

  // Returning the modified array
  return arr;
}

// Example usage
let myArray: number[] = [1, 2, 3, 4, 5];
let modifiedArray: number[] = insertValueAtIndex(myArray, 2, 'How are you?');

console.log(modifiedArray);
