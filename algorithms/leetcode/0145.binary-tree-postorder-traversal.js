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
 * @tip 递归实现
 */
// var postorderTraversal = function(root) {
//   let stack = []

//   const postorderNode = node => {
//     if (node) {
//       postorderNode(node.left)
//       postorderNode(node.right)
//       stack.push(node.val)
//     }
//   }

//   postorderNode(root)

//   return stack
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @tip 栈实现，左 -> 右 -> 根
 */
var postorderTraversal = function(root) {
  let [stack, result] = [[], []]

  if (!root) return result

  // 根节点入栈
  stack.push(root)

  while (stack.length) {
    // 栈顶出栈
    let top = stack.pop()

    result.unshift(top.val)

    // 右子节点入栈
    if (top.right) stack.push(top.right)

    // 左子节点入栈
    if (top.left) stack.push(top.left)
  }

  return result
}
// @lc code=end

