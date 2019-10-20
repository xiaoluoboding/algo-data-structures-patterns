
/**
 * 模版方法模式, Coffee or Tea 的例子
 */

class Beverage {
  constructor () {
  }

  boilWater () {
    console.log('把水煮沸♨️')
  }

  brew () {}

  pourInCup() {}

  addCondiments() {}

  init () {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }
}

// ☕️ + 🥛
class Coffee extends Beverage {
  constructor () {
    super()
  }

  brew() {
    console.log('用沸水冲泡咖啡☕️')
  }

  pourInCup() {
    console.log('把咖啡倒进杯子')
  }

  addCondiments() {
    console.log('加牛奶🥛')
  }
}

const coffee = new Coffee()
coffee.init()

// 🍵 + 🍋
class Tea extends Beverage {
  constructor () {
    super()
  }

  brew() {
    console.log('用沸水冲泡茶🍵')
  }

  pourInCup() {
    console.log('把茶倒进杯子')
  }

  addCondiments() {
    console.log('加柠檬🍋')
  }
}

const tea = new Tea()
tea.init()