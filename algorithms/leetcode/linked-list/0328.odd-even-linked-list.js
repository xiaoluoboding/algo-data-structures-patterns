/**
 * @lc app=leetcode.cn id=328 lang=javascript
 * @problem https://leetcode-cn.com/problems/odd-even-linked-list/description/
 * @tip 双指针，奇数指针指向头部，偶数指针指向头部下个节点
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head || !head.next) return head

  // 奇数指针指向头部，偶数指针指向头部下个节点
  let [odd, even] = [head, head.next]

  // 储存偶数链表
  let dummy = even

  // 当偶数链表节点遍历完毕
  while (even && even.next) {
    // 将偶数节点删掉
    odd.next = odd.next.next
    // 将奇数节点删掉
    even.next = even.next.next

    // 双指针各走一步
    odd = odd.next
    even = even.next
  }

  // 拼接链表
  odd.next = dummy

  return head
};
// @lc code=end

