/**
 * @lc app=leetcode.cn id=1 lang=javascript
 * @problem https://leetcode-cn.com/problems/two-sum/
 * @lang javascript
 * [1] 两数之和
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 创建 hash 表 
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (hash[diff] !== undefined) {
      return [hash[diff], i]
    }
    hash[nums[i]] = i
  }

  return []
}