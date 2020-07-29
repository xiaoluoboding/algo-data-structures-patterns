/**
 * @lc app=leetcode.cn id=78 lang=javascript
 * @problem https://leetcode-cn.com/problems/subsets/description/
 * [78] 子集
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * @tip DFS 回溯问题
 * @tags array | backtracking | bit-manipulation
 */
var subsets = function(nums) {
  let res = []

  // 深度优先搜索，回溯问题
  function dfs(path, index) {
    // 将结果拷贝至结果集
    res.push(path)

    for (let i = index; i < nums.length; i++) {
      // 做选择
      path.push(nums[i])
      // 回溯
      dfs(path.slice(), i + 1)
      // 撤销选择
      path.pop()
    }
  }

  dfs([], 0)

  return res
}

