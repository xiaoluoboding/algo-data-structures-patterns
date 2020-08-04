/**
 * @lc app=leetcode.cn id=234 lang=javascript
 * @problem https://leetcode-cn.com/problems/palindrome-linked-list/description/
 * @tags linked-list | two-pointers
 * @tip 快慢指针，快指针走两步，慢指针走一步，快指针走完，慢指针正好在中间节点
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 如果链表为空
  if(head === null || head.next === null) return true

  // 声明快慢指针，均指向头部节点
  let [slow, fast] = [head, head]
  // 声明两个游标，用于翻转链表前半部分
  let [prev, curr] = [null, null]

  while (fast && fast.next) {
    // 存储慢指针
    prev = slow

    fast = fast.next.next
    slow = slow.next

    // 翻转链表
    prev.next = curr
    curr = prev
  }

  // 如果链表节点为奇数，慢指针再走一步
  if (fast) {
    slow = slow.next
  }

  // 遍历翻转过的节点和剩余慢指针节点
  while (prev && slow) {
    if (prev.val !== slow.val) return false

    prev = prev.next
    slow = slow.next
  }

  return true
};
// @lc code=end

