/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const hash = {}
  let res = []

  const shortNums = nums1.length > nums2.length ? nums2 : nums1
  const longNums = nums1.length > nums2.length ? nums1 : nums2

  for(let i = 0; i < shortNums.length; i++) {
    let num = shortNums[i]
    if (!hash.hasOwnProperty(num)) {
      hash[num] = 1
    } else {
      hash[num] += 1
    }
  }

  for(let i = 0; i < longNums.length; i++) {
    let num = longNums[i]
    if (hash[num] && hash[num] !== 0) {
      hash[num] -= 1
      res.push(num)
    }
  }

  return res
}
