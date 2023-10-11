function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(inputString) {
  // Remove non-alphabet characters and convert to lowercase
  inputString = inputString.replace(/[^a-z]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedString = inputString.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  return inputString === reversedString;
}
// Test cases
console.log(isPalindrome("madam"));   // Output: true
console.log(isPalindrome("robot"));   // Output: false
console.log(isPalindrome(""));         // Output: true (an empty string is considered a palindrome)
console.log(isPalindrome("a"));        // Output: true (a single character is considered a palindrome)
/* 
  Add your pseudocode here
*/
Function .isPalindrome(inputString)
    reversedString = Reverse  (inputString)
    If (inputString )=== (reversedString)
        Return (true)
    Else:
        Return (false) ;
/*
  Add written explanation of your solution here
*/
//the isPalindrome function processes the input string by removing non-alphabet characters and converting it to lowercase for consistency. It then creates a reversed version of the input and compares it to the original. If the two versions are the same, the function returns true, signifying that the input is a palindrome. Otherwise, it returns false. This solution handles variations in case and considers the removal of non-alphabet characters, making it suitable for checking palindromes in strings.

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
