/**
 * @lc app=leetcode.cn id=203 lang=javascript
 * @problem https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 * @tip 遇到下一个节点的值和给定值相等，则移除
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummyHead = new ListNode(null)
  dummyHead.next = head

  let curr = dummyHead

  while (curr) {
    if (curr.next && curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return dummyHead.next
};
// @lc code=end

