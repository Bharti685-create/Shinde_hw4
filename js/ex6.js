/* Shinde_hw4
 Example 6 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw4 Example 6");

let num = Math.floor(Math.random() * 100) + 1;
console.log(`${num}`);
let attempts = 0;
let temp = 0;

while(temp< 1){
  let number = prompt(`Please guess a number:`);

  if(number< num){
    attempts++;
    console.log(`Too low, guess again`);
  }
  else if(number> num){
    attempts++;
    console.log(`Too high, guess again`);
  }
  else{
    console.log(`Correct! it took you ${attempts} attempts to guess the correct number`);
    temp +=1;
  }

}

