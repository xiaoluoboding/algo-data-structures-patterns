/**
 * 发布-订阅模式
 */
class Watcher {
  constructor(args) {
    this.clientList = []
  }

  listen(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn) // 订阅的消息添加进缓存列表
  }

  trigger() {
    const key = Array.prototype.shift.call(arguments)
    const fns = this.clientList[key]

    // 如果没有绑定对应的消息
    if (!fns || fns.length === 0) {
      return false
    }

    for (let i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  }

  remove(key, fn) {
    const fns = this.clientList[key]

    // 如果没有被订阅，则直接返回
    if (!fns) {
      return false
    }

    if (!fn) {
      const idx = Object.keys(this.clientList).findIndex(val => val === key)
      // console.log(this.clientList)
      console.log(idx)
      this.clientList.splice(idx, 1)
      console.log(this.clientList)
      fns && (fns.length = 0) // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
    } else {
      for (let l = fns.length - 1; l >= 0; l--) {
        let _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }

  getClients() {
    const clients = Object.keys(this.clientList).join(', ')
    console.log(clients)
  }
}

const salesOffices = {}
const so = new Watcher(salesOffices)

// 客户甲的订阅消息
so.listen('squareMeter90', function (price) {
  console.log('价格 = ' + price)
})

// 客户乙的订阅消息
so.listen('squareMeter120', function (price) {
  console.log('价格 = ' + price)
})

// 售楼处发布消息给客户甲和乙
so.trigger('squareMeter90', 2000000)
so.trigger('squareMeter120', 3000000)

// 查询所有客户
so.getClients()

// 删除订阅
so.remove('squareMeter120')
so.trigger('squareMeter120', 2000000)
so.getClients()