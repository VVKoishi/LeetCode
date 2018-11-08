/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var count = 0;
  var start = 0;
  var end = 0;
  for (let i=0; i<s.length; i++) {
    end += 1;
    for (let j=start; j<end-1; j++) {
      if (s[i]===s[j]) start = j+1;
    }
    count = (count>end-start)?count:end-start;
  }
  return count;
};

console.log(lengthOfLongestSubstring('pwwkew'));