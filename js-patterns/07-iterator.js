/**
 * 迭代器模式
 */

// 外部迭代器
class Iterator {
  constructor(cacheObj) {
    this.cacheObj = cacheObj
    this.current = 0
  }

  next() {
    this.current += 1
  }

  isDone() {
    return this.current > this.cacheObj.length
  }

  getCurrentItem() {
    return this.cacheObj[this.current]
  }
}

const compare = (it1, it2) => {
  while (!it1.isDone() && !it2.isDone()) {
    if (it1.getCurrentItem() !== it2.getCurrentItem()) {
      return '不相等'
    }
    it1.next()
    it2.next()
  }
  return '相等'
}

const it1 = new Iterator([1, 2, 3])
const it2 = new Iterator([1, 2, 3, 4])

console.log(compare(it1, it2))
