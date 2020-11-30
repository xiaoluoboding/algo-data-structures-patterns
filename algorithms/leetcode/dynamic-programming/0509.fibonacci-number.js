/**
 * @lc app=leetcode.cn id=509 lang=javascript
 * @problem https://leetcode-cn.com/problems/fibonacci-number/description/
 * [509] 斐波那契数
 */

/**
 * @param {number} N
 * @return {number}
 */
const fib = function(N) {
  const f = []

  f[0] = 0 
  f[1] = 1

  for (let i = 2; i <= N; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[N]
}

