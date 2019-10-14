class Dictionary {
  constructor() {
    this.dataStore = []
  }

  // 向字典中插入一个键值对
  add(key, value) {
    this.dataStore[key] = value
  }

  // 根据键查询字典中的值
  find(key) {
    return this.dataStore[key]
  }

  // 从字典中移除指定键值对
  remove(key) {
    delete this.dataStore[key]
  }

  // 显示字典中的所有键值对
  showAll() {
    for (let key of Object.keys(this.dataStore)) {
      console.log(`${key} -> ${this.dataStore[key]}`)
    }
  }

  // 显示字典中根据键排序后的键值对
  showSort() {
    for (let key of Object.keys(this.dataStore).sort()) {
      console.log(`${key} -> ${this.dataStore[key]}`)
    }
  }

  // 显示字典的长度
  length() {
    return Object.keys(this.dataStore).length
  }

  // 清空字典
  clear() {
    this.dataStore = []
  }
}

let dict = new Dictionary()

dict.add('Vue.js', '137.2K')
dict.add('Bootstrap', '132.9K')
dict.add('React', '128.1K')
console.log(dict.find('Vue.js'))
dict.showAll()
console.log('--- --- --- ---')
dict.showSort()
console.log(dict.length())
dict.clear()
console.log(dict.length())