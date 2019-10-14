class List {
  constructor () {
    this.dataStore = []
    this.listSize = 0
    this.pos = 0
  }

  // 返回列表中元素的个数
  length () {
    return this.listSize
  }

  // 清空列表中所有数据
  clear () {
    this.dataStore = []
    this.listSize = 0
    this.pos = 0
  }

  // 向列表数据结构中 push 数据，同时改变列表长度
  append (element) {
    this.dataStore[this.listSize++] = element 
  }

  // 返回列表字符串形式
  toString () {
    return this.dataStore
  }

  // 返回当前位置的元素
  getElement () {
    return this.dataStore[this.pos]
  }

  // 在当前元素位置插入新元素
  insert (element) {
    const idx = this.find(this.getElement())
    this.dataStore.splice(idx, 0, element)
    this.listSize++
  }

  // 查询元素
  find (element) {
    return this.dataStore.indexOf(element)
  }

  // 从列表中删除元素
  remove (element) {
    const idx = this.find(element)
    this.dataStore.splice(idx, 1)
    this.listSize--
  }

  // 将列表的当前位置设移动到第一个元素
  front () {
    this.pos = 0
  }

  // 将列表的当前位置移动到最后一个元素
  end () {
    this.pos = this.listSize - 1
  }

  // 将当前位置后移一位
  prev () {
    this.pos = this.pos === 0 ? 0 : this.pos - 1
  }

  // 将当前位置前移一位
  next () {
    const pos = this.pos + 1
    this.pos = pos > this.listSize
      ? this.listSize - 1
      : pos
  }

  // 返回列表的当前位置
  currPos () {
    return this.pos
  }

  // 将当前位置移动到指定位置
  moveTo (element) {
    const pos = this.find(element)
    if (pos === -1) {
      console.log(`[There is no element]: ${element}`)
    } else {
      this.pos = pos
    }
  }

  // 判断给定值是否在列表中
  contains (element) {
    return this.dataStore.indexOf(element) > -1
  }
}

const list = new List()

list.append('head')
list.append('first')
list.append('second')
list.append('third')
list.append('fourth')
list.append('fivth')
console.log(list.length())
console.log(list.getElement())
console.log(list.toString())
list.remove('second')
console.log(list.toString())
list.moveTo('fivth')
list.insert('test')
console.log(list.toString())
console.log(`[next element is]: ${list.getElement()}`)
console.log(list.currPos())
console.log(list.contains('fivth'))
// list.clear()
console.log(list.length())