/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) return false;
  var half1=x,half2=0;
  for (let i=0; ;i++){
    half2 = half2*10 + half1%10;
    half1 = Math.floor(half1/10);
    if(half2>=half1 || half2==0) break;
  }
  if(half1===half2 || half1*10+half2%10===half2) return true;
  else return false;
};

console.log(isPalindrome(10));