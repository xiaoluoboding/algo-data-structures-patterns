/**
 * @lc app=leetcode.cn id=70 lang=javascript
 * @problem https://leetcode-cn.com/problems/climbing-stairs/description/
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const f = []

  f[1] = 1
  f[2] = 2

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
}
// @lc code=end

