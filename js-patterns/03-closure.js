// 闭包
class Extent {
  constructor () {
    this.value = 0
  }
  call () {
    this.value++
    console.log(this.value)
  }
}

const extent = new Extent()

extent.call()
extent.call()
extent.call()
