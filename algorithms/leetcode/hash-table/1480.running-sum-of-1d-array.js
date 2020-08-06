/**
 * @lc app=leetcode.cn id=1480 lang=javascript
 * @problem https://leetcode-cn.com/problems/running-sum-of-1d-array/description/
 * [1480] 一维数组的动态和
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * @summary 哈希表解法
 * hash: {
 *  '0': 1 + 0,
 *  '1': 2 + hash[0],
 *  '2': 3 + hash[1],
 *  '3': 4 + hash[2]
 * }
 */
var runningSum = function(nums) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    // 注意哈希表存入的是下标
    if (!hash[i]) {
      let prev = i === 0 ? 0 : hash[i - 1]
      hash[i] = nums[i] + prev
    }
  }

  return Object.values(hash)
}
/**
 * @param {number[]} nums
 * @return {number[]}
 * @summary 哈希表解法
 * hash: {
 *  '0': 1 + 0,
 *  '1': 2 + hash[0],
 *  '2': 3 + hash[1],
 *  '3': 4 + hash[2]
 * }
 */
var runningSum = function(nums) {
  let hash = new Map()

  for (let i = 0; i < nums.length; i++) {
    // 注意哈希表存入的是下标
    if (!hash.has(i)) {
      let prev = i === 0 ? 0 : hash.get(i - 1)
      hash.set(i, nums[i] + prev)
    }
  }

  return Array.from(hash.values())
}
