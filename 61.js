/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return [];
  if (!k || !head.next) return head;
  function countLength (head){
    let p = head;
    let length = 1;
    while(p.next) { p = p.next; length++;}
    return length;
  }
  function rotateOneStep (head){
    let rear = head;
    let end = head.next;
    while(end.next) { end = end.next; rear = rear.next;}
    end.next = head;
    rear.next = null;
    head = end;
    return head;
  }
  k = k % countLength(head);
  for(let i=0; i<k; i++) head = rotateOneStep(head);
  return head;
};