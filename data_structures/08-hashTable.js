class HashTable {
  constructor() {
    this.table = new Array(144)
  }

  // 除留余数法生成hash值，容易发生碰撞
  simpleHash(data) {
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i)
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length
  }

  // 避免发生碰撞的散列函数
  betterHash(data) {
    const H = 37
    let total = 0
    for (let i = 0; i < data.length; ++i) {
      total += H * total + data.charCodeAt(i)
    }
    total = total % this.table.length
    if (total < 0) {
      total += this.table.length - 1
    }
    return parseInt(total)
  }

  // 向散列表中存入数据
  put(data) {
    const pos = this.betterHash(data)
    this.table[pos] = data
  }

  // 显示散列表数据
  showDistro() {
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(i + ": " + this.table[i])
      }
    }
  }
}

const someNames = [
  "David", "Jennifer", "Donnie",
  "Raymond", "Cynthia", "Mike",
  "Clayton", "Danny", "Jonathan"
]

const hashTable = new HashTable()

someNames.forEach(name => {
  hashTable.put(name)
})

hashTable.showDistro()