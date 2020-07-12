/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  const str = Number.isInteger(x) ? x.toString() : x
  const arr = Array.from(str)
  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) return false
  }
  return true
}
