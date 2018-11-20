 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  var h = new ListNode();
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

var mergeKLists = function(lists) {
  for (let i=0; i<lists.length-1; i++){
    lists[i+1] = mergeTwoLists(lists[i], lists[i+1]);
  }
  if(lists[lists.length-1]&&lists[lists.length-1].val != NaN) return lists[lists.length-1];
  else return [];
};

console.log(mergeKLists([[],[]]));