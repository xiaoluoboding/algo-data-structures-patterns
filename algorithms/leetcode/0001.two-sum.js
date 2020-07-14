/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 创建 hash 
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