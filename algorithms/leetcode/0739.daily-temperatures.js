/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = []

  const res = new Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    const t = T[i]

    while (stack.length && t > T[stack[stack.length - 1]]) {
      const top = stack.pop()
      res[top] = i - top
    }

    stack.push(i)
  }

  return res
}
