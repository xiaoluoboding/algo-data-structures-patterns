class Set {
  constructor() {
    this.dataStore = []
  }

  // 向集合中插入成员，成员必须唯一
  add(data) {
    if (this.dataStore.indexOf(data) === -1) {
      this.dataStore.push(data)
      return true
    }
    return false
  }

  // 从集合中删除成员
  remove(data) {
    const pos = this.dataStore.indexOf(data)
    if (pos !== -1) {
      this.dataStore.splice(pos, 1)
      return true
    }
    return false
  }

  // 显示集合成员
  show() {
    console.log(this.dataStore)
  }

  // 是否包含
  contains(data) {
    return this.dataStore.indexOf(data) !== -1
  }

  // 集合大小
  size() {
    return this.dataStore.length
  }

  // 并集
  union(set) {
    const tempSet = new Set()
    this.dataStore.forEach(item => {
      tempSet.add(item)
    })
    set.dataStore.forEach(item => {
      if (!tempSet.contains(item)) {
        tempSet.add(item)
      }
    })
    return tempSet
  }

  // 交集
  intersect(set) {
    const tempSet = new Set()
    this.dataStore.forEach((item) => {
      if (set.contains(item)) {
        tempSet.add(item)
      }
    })
    return tempSet
  }

  // 补集
  difference(set) {
    const tempSet = new Set()
    this.dataStore.forEach(item => {
      if (!set.contains(item)) {
        tempSet.add(item)
      }
    })
    return tempSet
  }

  // 判断是否是子集
  isSubset(set) {
    if (this.size() > set.size()) {
      return false
    } else {
      for (let item of this.dataStore) {
        if (!set.contains(item)) return false
      }
    }
    return true
  }
}

const cis = new Set()
cis.add('Mike')
cis.add('Clayton')
// cis.add('Cynthia')
// cis.add('Jonathan')
cis.add('Jennifer')
cis.add('Raymond')
const dmp = new Set()
dmp.add('Raymond')
dmp.add('Cynthia')
dmp.add('Jonathan')
// 并集
let uni = new Set()
uni = cis.union(dmp)
uni.show()
// 交集
let inter = new Set()
inter = cis.intersect(dmp)
inter.show()
// 补集
let diff = new Set()
diff = cis.difference(dmp)
diff.show() // cis difference dmp is diff
// 判断子集
console.log(dmp.isSubset(cis))

