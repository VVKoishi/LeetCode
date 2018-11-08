/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var num = 0;
  var k = 1;
  var for2 = function(index) {
    for (let i=index; i<str.length; i++) {
      if(str[i]>='0'&&str[i]<='9') num = 10*num+new Number(str[i]);
      else break;
    }
  }
  var i=0;
  for (; i<str.length; i++){
    if(str[i]===' ') continue;
    if(str[i]==='+') { k=1; i++; break; }
    else if(str[i]==='-') { k=-1; i++; break; }
    else break;
  }
  for2(i);
  var ret = k*num;
  if(ret<-Math.pow(2,31)) ret=-Math.pow(2,31);
  else if(ret>Math.pow(2,31)-1) ret=Math.pow(2,31)-1;
  return ret;
};

console.log(myAtoi('-123'));

module.exports = myAtoi;