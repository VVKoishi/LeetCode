/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var num = 0;
  var count = 0.0;
  while(nums1.length>0&&nums2.length>0&&nums1.length+nums2.length>2){
    if(nums1[0]<=nums2[0]) nums1.shift();
    else nums2.shift();
    if(nums2.length==0||nums1[nums1.length-1]>=nums2[nums2.length-1]) nums1.pop();
    else nums2.pop();
  }
  while(nums1.length>2){
    nums1.shift();
    nums1.pop();
  }
  while(nums2.length>2){
    nums2.shift();
    nums2.pop();
  }
  nums1.forEach(x => {
    num += x;
    count++;
  });
  nums2.forEach(x => {
    num += x;
    count++;
  });
  
  return num/count;
};

console.log(findMedianSortedArrays([-2,-1],[1]));