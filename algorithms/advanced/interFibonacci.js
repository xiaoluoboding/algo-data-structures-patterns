/**
 * 用递归实现计算 Fibonacci 数列函数
 * @param {Number} n 
 */
function fibonacci (n) {
  if (n < 2) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

console.log(fibonacci(10))

/**
 * 用动态规划实现计算 Fibonacci 数列函数
 * @param {Number} n 
 */
function interFibonacci (n) {
  let last = 1
  let nextLast = 1
  let result = 1
  for (let i = 2; i < n; i ++) {
    result = last + nextLast
    nextLast = last
    last = result
  }
  return result
}

console.log(interFibonacci(10))