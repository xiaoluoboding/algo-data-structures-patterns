/**
 * @lc app=leetcode.cn id=92 lang=javascript
 * @problem https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 * [92] 反转链表 II
 * @tip 反转局部链表，采取分段，[head - m, m - n, n - end]，链接三段链表即可
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let dummy = new ListNode(null)
  dummy.next = head

  // 将 m 前面节点缓存在 prevHead 中
  let prevHead = dummy

  for (let i = 0; i < m - 1; i++) {
    prevHead = prevHead.next
  }

  // 范围头部为 prevHead 下一节点
  let betweenHead = prevHead.next

  // 套用反转链表公式，前后双指针
  let [curr, prev] = [betweenHead.next, betweenHead]

  // 进行反转 n - m 次链表
  for (let i = m; i < n; i++) {
    [curr.next, prev, curr] = [prev, curr, curr.next]
  }

  // 将前置节点拼接
  prevHead.next = prev
  // 这时 betweenHead 从 m 前进到 n，下一节点即为 curr
  betweenHead.next = curr

  return dummy.next
}
