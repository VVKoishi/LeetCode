/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function postOrder(root){
    if(root){
      let a = postOrder(root.left);
      let b = postOrder(root.right);
      if(typeof a == 'object') return a;
      if(typeof b == 'object') return b;
      if((root==p||root==q)&&(a||b)) return root;
      if(a&&b) return root;
      if(root==p||root==q) return true;
      if(a||b) return true;
    }
  }
  return postOrder(root);
};

function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}
var a = new TreeNode(6);
a.left = new TreeNode(2);
a.left.left = new TreeNode(0);
a.left.left.left = null;
a.left.left.right = null;
a.left.right = new TreeNode(4);
a.right = new TreeNode(8);
a.right.left = new TreeNode(7);
a.right.right = new TreeNode(9);

console.log(lowestCommonAncestor(a,a.left,a.left.right));