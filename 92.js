/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(!head.next||m==n) return head;
  let p = null;
  let q = head;
  let r;
  let i=1;
  for (; i<m; i++){
    p = q;
    q = q.next;
  }
  let start = p;
  let temp = q;
  p = q;
  q = q.next;
  for (; i<n; i++){
    r = q.next;
    q.next = p;
    p = q;
    q = r;
  }
  let end = q;
  if (m!=1) start.next = p;
  else head = p;
  temp.next = q;
  return head;
};