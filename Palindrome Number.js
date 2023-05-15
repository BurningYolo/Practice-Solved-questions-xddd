/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = x.toString().split('').reverse().join('')
    var normal = x.toString()
      return (reverse === normal)
  };
  
  
    