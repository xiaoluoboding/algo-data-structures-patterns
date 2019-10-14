class Stack {
  constructor () {
    this.dataStore = []
    this.top = 0
  }

  push (element) {
    this.dataStore.push(element)
    this.top++
  }

  pop () {
    this.top--
    return this.dataStore.pop()
  }

  peek () {
    return this.dataStore[this.top - 1]
  }

  display () {
    console.log(this.dataStore)
  }

  length () {
    return this.top
  }

  clear () {
    this.dataStore = []
    this.top = 0
  }
}

const word = 'racecar'

const isPalindrome = word => {
  if (word < 0) return
  const str = Number.isInteger(word) ? word.toString() : word
  const arr = Array.from(str)
  while (arr.length > 1) {
    if (arr.pop() !== arr.shift()) return false
  }
  return true
}

// console.log(isPalindrome(word))
const stack = new Stack()
stack.push('head')
stack.push('first')
stack.push('second')

console.log(stack.peek())
console.log(stack.length())
stack.display()
console.log('---')
const popped = stack.pop()
console.log(popped)
console.log(stack.peek())
console.log(stack.length())
stack.display()


