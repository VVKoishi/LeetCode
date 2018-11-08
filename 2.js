/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var sum = l1.val+l2.val;
  var ret = new ListNode(sum%10);
  var p = ret;
  var plusone = sum>=10;
  while (l1.next||l2.next||plusone) {
    sum = 0;
    if (l1.next) {
      l1 = l1.next;
      sum += l1.val;
    }
    if (l2.next) {
      l2 = l2.next;
      sum += l2.val;
    }
    if (plusone) {
      plusone = false;
      sum += 1;
    }
    plusone = sum>=10;
    var s = new ListNode(sum%10);
    p.next = s;
    p = p.next;
  };
  
  return ret;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var l1 = new ListNode(5);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

var temp = addTwoNumbers(l1,l2)
console.log(temp.val,temp.next.val,temp.next.next.val,temp.next.next.next.val);