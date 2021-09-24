/*Problem String to Integer (atoi)
Description:
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


Submission Detail https://leetcode.com/submissions/detail/560113647/
1082 / 1082 test cases passed.
Status: Accepted
Runtime: 80 ms
Memory Usage: 40.2 MB
*/
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const min = -(2**31);
    const max = 2**31 - 1;
    /*
    regex explain :
    ^ => matches the beginning
    \s =>search with condition 
    *  =>Matches the preceding item "x" 0 or more times.
    [+|-] search contion condition
    \d => get digits
    + => get all  
    \d+ => get all digits
    s.match(/^\s*[+|-]?\d+/) && s.match(/^\s*[+|-]?\d+/)[0] => s.match(/^\s*[+|-]?\d+/) and s.match(/^\s*[+|-]?\d+/)[0]  defined and 
    that means there is a number at the beginning of the string  if not return 0
    */ 
    let number = s.match(/^\s*[+|-]?\d+/) && s.match(/^\s*[+|-]?\d+/)[0] || null;    
    if(number === null) return 0 ;
    let num = number.match(/-?\d+/)[0]; 
    //if  num is less than or equal to  min return min
    if(num <= min) return min;
    // num is greater than or equal to max return max
    if(num >= max)return  max ;

    return num
};
// Input: s = "words and 987"
// Expected: 0
console.log(myAtoi("words and 987"))
// Output 0

// Input: s = "4193 with words"
// Expected: 4193
console.log(myAtoi("4193 with words"))
// Output: 4193