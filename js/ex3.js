/* Shinde_hw4
 Example 3 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw4 Example 3");

const values = [3, 11, 7, 2, 9, 10];
add = function(values) {
  return values.reduce((a,b) => a + b, 0);
};
let sum = add(values);
const min = values[0]
const max = values[values.length-1]
console.log(`Minimum of an array is ${min} and Maximum is ${max} and the sum is ${sum}`)




 



























