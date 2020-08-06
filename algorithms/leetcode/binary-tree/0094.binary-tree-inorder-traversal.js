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
 * @tip 递归实现
 */
// var inorderTraversal = function(root) {
//   let stack = []

//   const inorderNode = node => {
//     if (node) {
//       inorderNode(node.left)
//       stack.push(node.val)
//       inorderNode(node.right)
//     }
//   }

//   inorderNode(root)

//   return stack
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @tip 栈实现 
 */
var inorderTraversal = function(root) {
  let [stack, result] = [[], []]

  let curr = root

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()

    result.push(curr.val)

    curr = curr.right
  }

  return result
};
// @lc code=end

