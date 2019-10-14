class Queue {
  constructor () {
    this.dataStore = []
  }

  // 向队尾添加一个元素
  enqueue (element) {
    this.dataStore.push(element)
  }

  // 从队首删除一个元素
  dequeue () {
    this.dataStore.shift()
  }

  // 读取队首元素值
  front () {
    return this.dataStore[0]
  }

  // 读取队尾元素值
  back () {
    return this.dataStore[this.dataStore.length - 1]
  }

  // 显示队列中所有元素
  display () {
    console.log(this.dataStore)
  }

  // 判断对列是否为空
  isEmpty () {
    return this.dataStore.length === 0
  }
}

const queue = new Queue()

queue.enqueue('root')
queue.enqueue('first')
queue.enqueue('second')
queue.enqueue('third')
queue.display()
console.log('---')
queue.dequeue()
queue.display()
console.log(`Front element: ${queue.front()}`)
console.log(`Back element: ${queue.back()}`)









