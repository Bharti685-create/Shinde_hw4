/* Shinde_hw4
 Example 4 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw4 Example 4");

let list = []
let words = prompt("Enter a word!")

if (words == "stop"){
  console.log("No words to display, Stop was the first word entered.")
}

while(words !== "stop"){
  list.push(words)
  words = prompt("Please enter a word of your choice")
}

for (let i=0; i< list.length;i++){
  console.log(list[i]);
}