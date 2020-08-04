/**
 * @lc app=leetcode.cn id=102 lang=javascript
 * @problem https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 * @tags BFS | queue
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = []

  if (!root) return result

  // 使用队列进行层序遍历
  const queue = []

  // 将根节点入队
  queue.push(root)

  while(queue.length) {
    let level = []

    // 缓存队列长度
    let len = queue.length
    
    for (let i = 0; i < len; i++) {
      // 取队头
      const top = queue.shift()

      level.push(top.val)

      if (top.left) queue.push(top.left)

      if (top.right) queue.push(top.right)
    }

    result.push(level)
  }

  return result
};
// @lc code=end

