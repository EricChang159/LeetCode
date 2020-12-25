// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 let s = 'babad'
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 0) return
    let answer = ''
    let startW = s[0]
    // let endW = 0
    for (let i = 1; i < s.length; i++) {
        if (startW[0] !== s[i]) {
            startW = startW + s[i]
        } else {
            answer = startW + s[i]
            startW = s[i]
        }
    }
    if(answer[0] !== answer[answer.length -1]) {
        return ''
    }
    return answer
};
console.log(longestPalindrome(s))