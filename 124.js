/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
       this.val = val;
     this.left = this.right = null;
 }
var maxPathSum = function(root) {
  var ret = -Infinity;
  function getMax(root){
    if(!root) return 0;
    let left = Math.max(getMax(root.left),0);
    let right = Math.max(getMax(root.right),0);
    ret = Math.max(ret, left+root.val+right);
    return Math.max(left, right)+root.val;
  }
  getMax(root);
  return ret;
};
