/**
 * @lc app=leetcode.cn id=206 lang=javascript
 * @problem https://leetcode-cn.com/problems/reverse-linked-list/
 * [206] 反转链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @solution 一、迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let [prev, curr] = [null, head]

  while (curr) {
    let temp = curr.next  // 暂存下一个节点
    curr.next = prev      // 当前节点的next指向上一个节点，翻转链表
    prev = curr           // 存储上一节点
    curr = temp           // 跳转到下一个节点
  }

  // 简化版
  // while(curr) {
  //   [curr.next, prev, curr] = [prev, curr, curr.next]
  // }

  return prev
}

/**
 * @solution 二、尾递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  return reverse(null, head)
};

const reverse = (prev, curr) => {
  if (!curr) return prev

  let temp = curr.next
  curr.next = prev
  return reverse(curr, temp)
}
