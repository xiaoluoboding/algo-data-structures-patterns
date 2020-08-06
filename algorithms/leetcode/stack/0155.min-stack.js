/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  // 声明一个辅助最小栈
  this.minStack = [Infinity]
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  // 最小栈顶永远保存最小值
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 同时出栈
  this.stack.pop()
  this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
