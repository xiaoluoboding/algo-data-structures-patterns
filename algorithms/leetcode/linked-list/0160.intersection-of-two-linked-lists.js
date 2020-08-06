/**
 * @lc app=leetcode.cn id=160 lang=javascript
 * @problem https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/
 * @tip 双指针，拼接两个链表
 * pA = headA + HeadB + intersectionNode
 * pB = headB + HeadA + intersectionNode
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let [pA, pB] = [headA, headB]

  while (pA !== pB) {
    pA = pA !== null ? pA.next : headB
    pB = pB !== null ? pB.next : headA
  }

  return pA
};
// @lc code=end

