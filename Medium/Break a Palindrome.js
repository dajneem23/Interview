// Problem https://leetcode.com/problems/break-a-palindrome/
// Break a Palindrome
/*

Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.
Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.

 
Submission Detail : https://leetcode.com/submissions/detail/560116897/
30 / 30 test cases passed.
Status: Accepted
Runtime: 68 ms
Memory Usage: 39 MB

Runtime: 68 ms, faster than 87.50% of JavaScript online submissions for Break a Palindrome.
Memory Usage: 39 MB, less than 25.00% of JavaScript online submissions for Break a Palindrome.

*/
var breakPalindrome = function(palindrome) {
    var n= palindrome.length;

    //string to array
    palindrome=palindrome.split('')
    // length <= 1 return ""
    if(n<=1) return "";
    //because  palindrome is symmetric  => just run to the middle element 
    // change element not equal a to a return string
   for(let i=0;i<Math.floor(palindrome.length/2);i++){
      if (palindrome[i] != 'a' ) {
            palindrome[i]='a';
            return palindrome.join('')
    }
 }
    //string   has only 'a' => Change the last character to 'b'.
    return palindrome.join('').substring(0,n-1) +'b'
};

// Input : "abccba"
// Expected: "aaccba"
console.log(breakPalindrome("aaccba"))
// Output: "aaccba"

// Input: ""aaaaaa""
// Expected: "aaaaab"
console.log(breakPalindrome("aaaaaa"))
// Output: "aaaaab"