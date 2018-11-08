/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows==1) return s;
  var ret = '';
  for (var i=0; i<numRows+numRows-2; ){
    var prei = i;
    for (var j=0; j*(numRows+numRows-2)<s.length; ){
      if (s[j*(numRows+numRows-2)+i]) ret += s[j*(numRows+numRows-2)+i];
      if (i==0||i==numRows-1) j++;
      else if (i<numRows) {
        i = numRows+numRows-2 - i;
      }
      else if (i>=numRows) {
        i = numRows+numRows-2 - i;
        j++;
      }
    }
    i = prei+1;
    if (i==numRows) break;
  }
  return ret;
};

console.log(convert('A',1));



// 0 1 3 2     3
// 0 1 5 2 4 3    4  6