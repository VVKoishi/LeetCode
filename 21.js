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
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = [];

var l2 = new ListNode(0);

var mergeTwoLists = function(l1, l2) {
  var h = new ListNode(NaN);
  var s = h;

  while(l1&&l2&&l1.val!= NaN&&l2.val!= NaN){
    if(l1.val<l2.val) { s.next = l1; l1 = l1.next; s = s.next}
    else { s.next = l2; l2 = l2.next; s = s.next}
  }

  if(l1&&l1.val != NaN) s.next = l1;
  else if (l2&&l2.val != NaN) s.next = l2;

  if(h.next) return h.next;
  else return [];
};

var t = mergeTwoLists(l1,l2);
console.log(t);