/**
 * @lc app=leetcode.cn id=2 lang=javascript
 * @problem https://leetcode-cn.com/problems/add-two-numbers/
 * @demo
 * |---|----------------------------------------------------|
 * |---| 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * |---| 输出： 7 - > 0 - > 8
 * |---| 原因： 342 + 465 = 807
 * |---|----------------------------------------------------|
 * [2] 两数相加
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 虚拟头部节点
  const head = new ListNode('head')

  let curr = head
  // 因为逆位运算，保存下次节点进位数
  let carry = 0
  let sum = 0

  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0
    let n2 = l2 ? l2.val : 0

    // 如果有进位数，则加上进位数
    sum = n1 + n2 + carry
    // 进位数最大为1
    carry = parseInt(sum / 10)
    // 将余数作为下个节点的数值， 6 % 10 = 6; 10 % 10 = 0; 11 % 10 = 1
    curr.next = new ListNode(sum % 10)
    
    // 进入下个节点
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    curr = curr.next
  }

  if (carry > 0) (curr.next = new ListNode(carry))

  return head.next
};

