/**
 * 代理模式
 */

/**************** 计算乘积 *****************/
const mult = (...args) => {
  var a = 1
  for (var i = 0, l = args.length; i < l; i++) {
    a = a * args[i]
  }
  return a
}

/**************** 计算加和 *****************/
const plus = (...args) => {
  var a = 0
  for (var i = 0, l = args.length; i < l; i++) {
    a = a + args[i]
  }
  return aq
};

/**************** 创建缓存代理的工厂 *****************/
const createProxyFactory = function (fn) {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      console.log(cache)
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

// 记忆函数
const memoize = fn => {
  let cache = {}
  return (...args) => {
    const key = JSON.stringify(args)
    if (!cache.hasOwnProperty(key)) {
      cache[key] = fn(...args)
      console.log(cache)
    }
    return cache[key]
  }
}

const proxyMult = createProxyFactory(mult)
const proxyPlus = memoize(plus)

console.log(proxyMult(1, 2, 3, 4))
console.log(proxyMult(1, 2, 3, 4))
console.log(proxyPlus(1, 2, 3, 4))
console.log(proxyPlus(1, 2, 3, 4))