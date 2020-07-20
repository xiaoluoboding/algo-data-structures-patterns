/**
 * @problem 150. 逆波兰表达式求值
 * @param {string[]} tokens
 * @return {number}
 * @description
 * 输入：["2", "1", "+", "3", "*"]
 * 输出：9
 * 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 * @tip 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 * @topic stack
 */
var evalRPN = function (tokens) {
  let stack = []
  let numRight
  let numLeft

  for (let token of tokens) {
    switch (token) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        numRight = stack.pop()
        numLeft = stack.pop()
        stack.push(numLeft - numRight)
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        numRight = stack.pop()
        numLeft = stack.pop()
        stack.push(parseInt((numLeft / numRight), 10))
        break
      default:
        stack.push(parseInt(token, 10))
    }
  }

  return stack.pop()
}

/**
 * 解法2，在leetcode上执行效率更高
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => parseInt(a / b, 10)
  }

  let fun = () => {
    let char = tokens.pop()
    if (map[char]) {
      let numRight = fun()
      let numLeft = fun()
      return map[char](numLeft, numRight)
    } else {
      return parseInt(char, 10)
    }
  }

  return fun()
}