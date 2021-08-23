/**
 * @lc app=leetcode.cn id=108 lang=javascript
 * @problem https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 * @tags DFS | 二分查找 | 平衡二叉树
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length) return null

  function buildRoot (start, end) {
    if (start > end) return null

    // 利用位运算，得到中心位置
    const mid = (start + end) >> 1

    const cur = new TreeNode(nums[mid])

    cur.left = buildRoot(start, mid - 1)
    cur.right = buildRoot(mid + 1, end)

    return cur
  }

  return buildRoot(0, nums.length - 1)
};
// @lc code=end
