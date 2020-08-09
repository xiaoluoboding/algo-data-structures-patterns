/**
 * @lc app=leetcode.cn id=496 lang=javascript
 * @problem https://leetcode-cn.com/problems/next-greater-element-i/description/
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 如果 `nums1` 的长度比 `nums2` 大，则不是期望的比较对象
  if (nums1.length > nums2.length) return []

  // 声明一个单调栈
  let stack = []

  // 声明一个 hash 表，存储 nums2 中更大的元素的关系
  let hash = {}

  const res = []

  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]
    // 单调栈模版套起来
    while (stack.length && nums2[stack[stack.length - 1]] < num) {
      const top = stack.pop()
      // 弹出栈顶元素后，需要记录当前元素和下一个更大元素的关系表
      hash[nums2[top]] = num
    }

    // 向单调栈中压入索引
    stack.push(i)
  }


  // 遍历 nums1 的时候只需在 hash 表中取出相应关系即可。如果 hash 表中没有记录，那么为 -1
  for (let num of nums1) {
    res.push(hash[num] ? hash[num] : -1)
  }

  return res
};
// @lc code=end
