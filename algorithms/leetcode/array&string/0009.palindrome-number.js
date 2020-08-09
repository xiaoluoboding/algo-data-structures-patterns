/**
 * @lc app=leetcode.cn id=9 lang=javascript
 * @problem https://leetcode-cn.com/problems/palindrome-number/description/
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false

  const str = Number.isInteger(x) ? x.toString() : x
  const arr = Array.from(str)

  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) return false
  }

  return true
};
// @lc code=end
