/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @problem https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let curr = head

  while (curr !== null && curr.next !== null) {
    // 当前节点和下个节点相等时，当前节点指向下下个节点
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
}
// @lc code=end
