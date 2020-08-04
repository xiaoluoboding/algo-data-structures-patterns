/**
 * @lc app=leetcode.cn id=144 lang=javascript
 * @problem https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 * @tags 栈 | 递归
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let stack = []

  const preorderNode = node => {
    if (node) {
      stack.push(node.val)
      preorderNode(node.left)
      preorderNode(node.right)
    }
  }

  preorderNode(root)

  return stack
};
// @lc code=end

