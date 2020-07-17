/**
 * @lc app=leetcode.cn id=215 lang=javascript
 * @problem https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * [215] 数组中的第K个最大元素
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const n = nums.length
  
  const quickSort = arr => {
    if (arr.length <= 1) return arr

    const pivot = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
      const val = arr[i]
      if (val < pivot) {
        left.push(val)
      } else {
        right.push(val)
      }
    }

    return quickSort(left).concat([pivot], quickSort(right))
  }

  const sortedNums = quickSort(nums)

  return sortedNums[n - k]
}

