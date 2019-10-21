/**
 * 职责链模式
 */

// 职责链优化过的代码
const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到 100 元优惠券')
  } else {
    order200(orderType, pay, stock)
  }
}

const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购, 得到 50 元优惠券')
  } else {
    orderCommon(orderType, pay, stock)
  }
}

const orderCommon = function (orderType, pay, stock) {
  if (orderType === 3 && stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('库存不够, 无法购买')
  }
}

order500(1, true, 500) // 输出： 500 元定金预购, 得到 100 优惠券

/**
 * 业务逻辑和链路类解耦
 */

// 业务逻辑
const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购, 得到 100 元优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购, 得到 50 元优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const orderCommon = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('库存不够, 无法购买')
  }
}

// 链路类
class Chain {
  constructor(fn) {
    this.fn = fn
    this.successor = null
  }

  setNext(successor) {
    this.successor = successor
  }

  init() {
    const res = this.fn.apply(this, arguments)

    if (res === 'nextSuccessor') {
      this.successor.init.apply(this.successor, arguments)
    }

    return res
  }
}

// 包装职责链节点
const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderCommon = new Chain(orderCommon)

// 指定节点在职责链中的顺序
chainOrder500.setNext(chainOrder200)
chainOrder200.setNext(chainOrderCommon)

// 把请求传递给第一个节点
chainOrder500.init(1, true, 500) // 500 元定金预购, 得到 100 元优惠券
chainOrder500.init(2, true, 500) // 200 元定金预购, 得到 50 元优惠券
chainOrder500.init(3, true, 500) // 普通购买, 无优惠券
chainOrder500.init(1, false, 0) // 库存不够, 无法购买

/**
 * 使用 AOP 优化职责链
 */

// 业务逻辑
const order500 = function(orderType, pay, stock) {
  if ( orderType === 1 && pay === true ) {
    console.log('500 元定金预购, 得到 100 元优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const order200 = function(orderType, pay, stock) {
  if ( orderType === 2 && pay === true ) {
    console.log('200 元定金预购, 得到 50 元优惠券')
  } else {
    return 'nextSuccessor'
  }
}

const orderCommon = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买, 无优惠券')
  } else {
    console.log('库存不够, 无法购买')
  }
}

// AOP after 函数
Function.prototype.after = function(fn) {
  const self = this
  return function() {
    const result = self.apply(self, arguments)
    if (result === 'nextSuccessor') {
      return fn.apply(self, arguments)
    }
  }
}

const order = order500.after(order200).after(orderCommon)

order(1, true, 500)  // 500 元定金预购, 得到 100 元优惠券
order(2, true, 500)  // 200 元定金预购, 得到 50 元优惠券
order(3, true, 500)  // 普通购买, 无优惠券
order(1, false, 0) // 库存不够, 无法购买
