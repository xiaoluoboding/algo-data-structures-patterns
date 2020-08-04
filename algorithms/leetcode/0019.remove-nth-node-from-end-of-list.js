/**
 * @lc app=leetcode.cn id=19 lang=javascript
 * @problem https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 * @tip 双指针、快慢指针
 * 快指针移动 n 步，快慢一起移动到链表尾部，慢指针即到了倒数第N个节点的前面，删除下一个节点即可
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(null)
  dummyHead.next = head

  let fast = dummyHead
  let slow = dummyHead

  // 快指针向前 n 步
  while (n !== 0) {
    fast = fast.next
    n--
  }

  // 慢指针开始移动，快指针移动到链表最后节点
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  // 删除慢指针下一个节点，即位倒数第N个节点
  slow.next = slow.next.next

  return dummyHead.next
}
