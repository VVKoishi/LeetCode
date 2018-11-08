/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var k = x>0?1:-1;
  var xstr = Math.abs(x).toString();
  var max = Math.pow(2,31)-1;
  var min = -Math.pow(2,31);
  var y = 0;
  for (let i=0; i<xstr.length; i++) {
    y += xstr[i]*Math.pow(10,i);
  }
  y = k*y;
  if (y<min||y>max||y===NaN) return 0;
  return y;
};

console.log(reverse(2147483641));