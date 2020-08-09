/**
 * @lc app=leetcode.cn id=98 lang=javascript
 * @problem https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 * @tags DFS | 递归
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const dfs = (root, minValue, maxValue) => {
    if (!root) return true
    
    if (root.val <= minValue || root.val >= maxValue) return false

    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
  }
  return dfs(root, -Infinity, Infinity)
};
// @lc code=end

