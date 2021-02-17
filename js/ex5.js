/* Shinde_hw4
 Example 5 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw4 Example 5");

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

let counts = 0;

let words = prompt("Please enter a word of your choice") 

for(let i=0; i < vowels.length; i++){
  if(vowels.includes(words[i])){
      counts++;
    }
  }
  function checkPalindrome(words) {
  for (j = 0; j < (words.len )/ 2; j++) {
    if (words[j] != words[words.len - 1 - j]) {
      return false;
    }
    else{
      return true;
    }
}
}
if (checkPalindrome(words) == true){
  console.log(`${words} has ${counts} vowels and is a palindrome`);
}
else {
  console.log(`${words} has ${counts} vowels and is not a palindrome`)
}
  

  












