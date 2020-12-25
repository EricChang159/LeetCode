// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
let s = "abcabcbb"
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0, maxLen = 0;
    var map = new Map();
  
    for(var i = 0; i < s.length; i++) {
        var ch = s[i];
      
        if(map.get(ch) >= start) start = map.get(ch) + 1;
        map.set(ch, i);
      
        maxLen = Math.max(maxLen, i - start + 1);
    }
  
    return maxLen;
  };

  console.log(lengthOfLongestSubstring(s))