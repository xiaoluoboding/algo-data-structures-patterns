/**
 * @lc app=leetcode.cn id=46 lang=javascript
 * @problem https://leetcode-cn.com/problems/permutations/description/
 * @tip DFS 回溯问题
 * @tags backtracking | dfs | stack
 * [46] 全排列
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  let res = []

  // 深度优先搜索，回溯问题
  function dfs(path) {
    // 填充满时候，将结果拷贝至结果集
    if (path.length == nums.length) {
      res.push(path.slice())
    }
    for (const num of nums) {
      // 如果全部选择完毕，则进入下次循环
      if (path.includes(num)) continue
      // 做选择
      path.push(num)
      // 进行回溯
      dfs(path)
      // 撤销选择
      path.pop()
    }
  }

  dfs([])
  return res
}
