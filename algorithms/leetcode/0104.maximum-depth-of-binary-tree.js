/**
 * @lc app=leetcode.cn id=104 lang=javascript
 * @problem https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 * [104] 二叉树的最大深度
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * @summary 递归解法
 */
var maxDepth = function (root) {
  // 空树返回0
  if (!root) return 0

  // 递归左右节点
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

/**
 * @param {TreeNode} root
 * @return {number}
 * @summary BFS 解法
 */
var maxDepth = function (root) {
  // 空树返回0
  if (!root) return 0

  let queue = [root]
  let level = 0

  while (queue.length) {

    for (let i = 0; i < queue.length; i++) {
      let top = queue.shift()

      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
    }

    level++
  }

  return level
};
