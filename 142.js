/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  let i = head;
  let j = head.next;
  while (i!=j){
    if (!j || !j.next) return null;
    i = i.next;
    j = j.next.next;
  }
  let count = 1;
  i = i.next;
  j = j.next.next;
  while (i!=j){
    i = i.next;
    j = j.next.next;
    count++;
  }
  let m = head;
  let n = head;
  for (let k=0; k<count; k++) n = n.next;
  while (m!=n){
    m = m.next;
    n = n.next;
  }
  return m;
};