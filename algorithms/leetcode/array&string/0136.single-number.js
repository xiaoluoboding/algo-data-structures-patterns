/**
 * @lc app=leetcode.cn id=136 lang=javascript
 * @problem https://leetcode-cn.com/problems/single-number/description/
 * @tip ^运算符求值
 * [136] 只出现一次的数字
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0

  for(let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }

  return res
}
