// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Given Array transform to LinkList
export const createLinkList = (arr) => {
  let head = new ListNode(null)
  let curr = head

  arr.forEach(element => {
    curr.next = new ListNode(element)
    curr = curr.next
  })
  
  return head.next
}