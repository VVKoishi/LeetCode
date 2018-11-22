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

var reverseList = function(head) {
  if (!head) return [];
  if (!head.next) return head;
  let start = head;
  let end = head.next;
  let temp;
  while(end){
    temp = end.next;
    end.next = start;
    start = end;
    end = temp;
  }
  head.next = null;
  head = start;
  return head;
};
