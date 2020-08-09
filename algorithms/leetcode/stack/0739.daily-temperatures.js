/**
 * @lc app=leetcode.cn id=739 lang=javascript
 * @problem https://leetcode-cn.com/problems/daily-temperatures/description/
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = []

  const res = new Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    const t = T[i]

    while (stack.length && T[stack[stack.length - 1]] < t) {
      const top = stack.pop()
      res[top] = i - top
    }

    stack.push(i)
  }

  return res
};
// @lc code=end
