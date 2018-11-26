/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let h = [];
  for(let i=0; i<nums.length; i++){
    if(typeof h[nums[i]] == 'undefined') h[nums[i]] = 1;
    else return true;
  }
  return false;
};