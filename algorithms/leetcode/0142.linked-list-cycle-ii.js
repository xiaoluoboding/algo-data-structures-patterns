/**
 * @lc app=leetcode.cn id=142 lang=javascript
 * @problem https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 * [142] 环形链表 II
 */

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
 * @tip 哈希表解法
 */
var detectCycle = function(head) {
  let hash = new Map()

  while (head) {
    if (hash.has(head)) return head
    hash.set(head, true)
    head = head.next
  }

  return null
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @tip 快慢指针解法
 */
var detectCycle = function(head) {
  let [fast, slow] = [head, head]

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
};
