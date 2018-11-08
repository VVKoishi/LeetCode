/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var start=0, end=0;
  var p=0, q=s.length-1;
  while (s.length-1-p>end-start) {
    if(q-p>end-start){
      var ok = true;
      for (let r=0; r<=(q-p)/2.0; r++){
        if(s[p+r]!=s[q-r]) {
          ok = false;
          break;
        }
      }
      if (ok) {
        start = p;
        end = q;
      }
    }
    q--;
    if(p==q){
      p++;
      q=s.length-1;
    }
  }
  return s.slice(start,end+1);
};


console.log(longestPalindrome("aaaa"))