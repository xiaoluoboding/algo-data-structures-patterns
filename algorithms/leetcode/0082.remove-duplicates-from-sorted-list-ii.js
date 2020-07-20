/*
 * @lc app=leetcode.cn id=82 lang=javascript
 * @problem https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 * [82] 删除排序链表中的重复元素 II
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
 */
var deleteDuplicates = function (head) {
  // 延长链表头部节点
  let dummy = new ListNode(null)
  dummy.next = head

  // 双指针，快慢指针，慢指针的下一个节点是快指针
  let fast = dummy.next
  let slow = dummy

  while (fast && fast.next) {
    let hasSome = false

    // 快步向前，去掉所有重复节点，剩余一个
    while (fast.next && fast.val === fast.next.val) {
      fast = fast.next
      hasSome = true
    }

    if (hasSome) {
      slow.next = fast.next
    } else {
      slow = slow.next
    }

    fast = fast.next
  }

  return dummy.next
}
