/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let max = []
  let deque = []

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length -1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }

    if (i + 1 >= k) max.push(nums[deque[0]])
  }

  return max
}
