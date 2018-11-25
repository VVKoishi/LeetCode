/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

var kthSmallest = function(root, k) {
  let count = 0;
  function Inorder(root){
    if (root){
      let l = Inorder(root.left);
      count++;
      if(count==k) return root.val;
      let r = Inorder(root.right);
      if(typeof l == 'number'|| typeof r == 'number'){
        if(typeof l == 'number') return l;
        else return r;
      }
    }
  }
  return Inorder(root);
};

// var a = new TreeNode(1);
// a.right = new TreeNode(2);

// console.log(kthSmallest(a,2));
