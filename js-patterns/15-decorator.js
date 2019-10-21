/**
 * 装饰者模式
 */

Function.prototype.before = function (fn) {
  // 保存原函数的引用
  const self = this
  // 返回包含原函数和新函数的代理函数，在执行原函数之前“装饰”新函数
  return function () {
    // 在原函数之前执行新函数
    fn.apply(this, arguments)
    // 执行原函数并返回原函数的执行结果
    return self.apply(this, arguments)
  }
}

Function.prototype.after = function (fn) {
  // 保存原函数的引用
  const self = this
  // 返回包含原函数和新函数的代理函数，在执行原函数之前“装饰”新函数
  return function () {
    // 执行原函数并返回原函数的执行结果
    const res = self.apply(this, arguments)
    // 在原函数之后执行新函数
    fn.apply(this, arguments)
    return res
  }
}

/**
 * 切面函数
 * @param {*} beforeFn
 * @param {*} fn
 * @param {*} afterFn
 */
function aop(beforeFn, fn, afterFn) {
  return function () {
    beforeFn && beforeFn.apply(this, arguments)
    const res = fn.apply(this, arguments)
    return afterFn
      ? afterFn.apply(this, [res, ...arguments])
      : res
  }
}

const combHair = () => {
  console.log('Comb hair')
}

const wearSuit = () => {
  console.log('Wear a suit')
}

const sparyPerfume = () => {
  console.log('Spary perfume')
}

const lookHandsome = aop(combHair, wearSuit, sparyPerfume)

lookHandsome()