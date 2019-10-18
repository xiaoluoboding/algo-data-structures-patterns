/**
 * 单例模式
 */
class Singleton {
  constructor (name) {
    this.name = name
  }

  static getInstance (name) {
    if (!this.instance) {
      this.instance = new Singleton(name)
    }
    return this.instance
  }
}

const instance1 = Singleton.getInstance('Husky')
const instance2 = Singleton.getInstance('Kitty')

console.log(instance1 === instance2)
