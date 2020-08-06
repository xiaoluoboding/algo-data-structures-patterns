/**
 * @lc app=leetcode.cn id=239 lang=javascript
 * @problem https://leetcode-cn.com/problems/sliding-window-maximum/description/
 * @description
 * 输入: nums = [1, 3, -1, -3, 5, 3, 6, 7], 和 k = 3
 * 输出: [3, 3, 5, 5, 6, 7]
 * 解释:
 * 
 *  滑动窗口的位置                最大值
 *  -- -- -- -- -- -- -- -- -- -- -- --
 *  [1, 3, -1,] -3, 5, 3, 6, 7      3
 *  1, [3, -1, -3,] 5, 3, 6, 7      3
 *  1, 3, [-1, -3, 5,] 3, 6, 7      5
 *  1, 3, -1, [-3, 5, 3,] 6, 7      5
 *  1, 3, -1, -3, [5, 3, 6,] 7      6
 *  1, 3, -1, -3, 5, [3, 6, 7]      7
 *  -- -- -- -- -- -- -- -- -- -- -- --
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // 记录最大值的数组
  let max = []
  // 声明一个双端队列
  let deque = []

  for (let i = 0; i < nums.length; i++) {
    // 单调栈模版套起来，队头永远保持存储最大元素的索引，类似问题：496. 下一个更大元素 I
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      // 队尾出队保持递减
      deque.pop()
    }

    deque.push(i)

    // 将窗口外的队头元素索引出队
    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }

    // 形成窗口开始，记录队列头部最大值, max 的长度等于 nums.length - k + 1
    if (i + 1 >= k) max.push(nums[deque[0]])
  }

  return max
};
// @lc code=end

