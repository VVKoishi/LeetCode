/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = -Infinity;
  let sum = 0;
  for (let i=0; i<nums.length; i++){
    if(sum<0) sum = 0;
    sum += nums[i];
    maxSum = Math.max(sum,maxSum);
  }
  return maxSum;
};