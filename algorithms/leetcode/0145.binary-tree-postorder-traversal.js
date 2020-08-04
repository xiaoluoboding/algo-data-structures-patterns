/**
 * @lc app=leetcode.cn id=145 lang=javascript
 * @problem https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 * @tags 栈
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let stack = []

  const postorderNode = node => {
    if (node) {
      postorderNode(node.left)
      postorderNode(node.right)
      stack.push(node.val)
    }
  }

  postorderNode(root)

  return stack
};
// @lc code=end

