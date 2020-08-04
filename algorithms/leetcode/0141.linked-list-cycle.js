/**
 * @lc app=leetcode.cn id=141 lang=javascript
 * @problem https://leetcode-cn.com/problems/linked-list-cycle/description/
 * [141] 环形链表
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
 * @return {boolean}
 * @summary 哈希表解法，需要给每个节点设置一个映射关系，当遇到哈希表中存在的关系，说明有环
 */
var hasCycle = (head) => {
  let hash = new Map()

  while (head) {
    if (hash.has(head)) return true
    hash.set(head, true)
    head = head.next
  }
  return false
}

/**
 * @param {ListNode} head
 * @return {boolean}
 * @summary 快慢指针解法，快指针快于慢指针 2 倍，如果相遇，说明有环，性能稍好于哈希表解法
 */
var hasCycle = function(head) {
  let [slow, fast] = [head, head]

  while (fast && fast.next) {
    // 快指针 2 倍于慢指针
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) return true
  }

  return false
}
