/* 

Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

*/

let names: string[] = [
  "Asim Ali Pasha",
  "Ebbad Asghar",
  "Hussain Ahmad Faraz",
  "Malik Mazher Qayyum",
  "Muhammad Anwar",
  "Pervaiz Iqbal",
  "Aizaz Ahmed Khan",
  "Syed Husnain Ali",
  "Umair Shabbir"
];

// Using for loop to print each element of the array.
for (let name of names) {
  console.log(name);
}
