/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @problem https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/
 * [167] 两数之和 II - 输入有序数组
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let hash = {}

  for (let i = 0; i < numbers.length; i++) {
    let idx = hash[target - numbers[i]]

    if (idx >=0 ) {
      return [idx + 1, i + 1]
    } else {
      hash[numbers[i]] = i
    }
  }

  return [-1, -1]
}
