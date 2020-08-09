/**
 * @lc app=leetcode.cn id=20 lang=javascript
 * @problem https://leetcode-cn.com/problems/valid-parentheses/description/
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s && s.length % 2 !== 0) return false

  let stack = []

  const pair = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let char of s) {
    if (pair[char]) {
      stack.push(char)
    } else {
      let left = stack.pop()
      let right = char
      if (pair[left] !== right) return false
    }
  }

  return !stack.length
};
// @lc code=end
