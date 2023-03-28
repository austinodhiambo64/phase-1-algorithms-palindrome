function isPalindrome(string) {
  // Write your algorithm here
  arr0 = string.split('');
  reversedLetters = arr0.reverse();
  reversedString = reversedLetters.join('');

  if (string ==reversedString){
    return true
  }
  else {
    return false
  }


}

/* 
  Add your pseudocode here
  arr split into letters
  reversed
  join()
  if condition
  return true
  else 
*/

/*
  Add written explanation of your solution here

  the functions uses the split()method to seperate the substrings, then reverses them and tests to see whether it is equal to the initial string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
