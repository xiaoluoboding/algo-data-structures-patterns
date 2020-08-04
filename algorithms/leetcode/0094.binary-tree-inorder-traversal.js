/**
 * @lc app=leetcode.cn id=94 lang=javascript
 * @problem https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 * @tags 栈 | 哈希表
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  let stack = []

  const inorderNode = node => {
    if (node) {
      inorderNode(node.left)
      stack.push(node.val)
      inorderNode(node.right)
    }
  }

  inorderNode(root)

  return stack
};
// @lc code=end

