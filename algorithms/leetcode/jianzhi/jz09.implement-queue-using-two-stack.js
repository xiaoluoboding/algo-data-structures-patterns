/**
 * @name 剑指 Offer 09. 用两个栈实现队列
 * @description 用两个栈实现一个队列。队列的声明如下:
 * 请实现它的两个函数 appendTail 和 deleteHead
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */
var CQueue = function() {
  this.stack1 = []
  this.stack2 = []
}

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.stack2.length) return this.stack2.pop()
  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.length === 0 ? -1 : this.stack2.pop()
}
