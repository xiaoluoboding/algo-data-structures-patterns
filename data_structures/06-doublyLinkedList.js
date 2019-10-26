// 链表节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.currentNode = this.head
  }

  remove(item) {
    let currNode = this.find(item)
    if (!(currNode.next == null)) {
      currNode.prev.next = currNode.next
      currNode.next.prev = currNode.prev
      currNode.next = null
      currNode.prev = null
    }
  }

  findLast(item) {
    let currNode = this.head
    while (!(currNode.next == null)) {
      currNode = currNode.next
    }
    return currNode
  }

  display() {
    let currNode = this.head
    while (!(currNode.next == null)) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }

  displayReverse() {
    let currNode = this.head
    currNode = this.findLast()
    while (!(currNode.prev == null)) {
      console.log(currNode.element)
      currNode = currNode.prev
    }
  }

  find(element) {
    let currNode = this.head
    while (currNode.element != element) {
      currNode = currNode.next
    }
    return currNode
  }

  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    if (current) {
      newNode.next = current.next
      newNode.prev = current
      current.next = newNode
    }
  }

  show() {
    console.log(this.currentNode)
  }

  advance(n) {
    let currNode = this.currentNode
    while (n > 0 && currNode.next !== null) {
      currNode = currNode.next
      n--
    }
    this.currentNode = currNode
  }

  back(n) {
    let currNode = this.currentNode
    while (n > 0 && !(currNode.element == 'head')) {
      currNode = currNode.prev
      n--
    }
    this.currentNode = currNode
  }
}

const cities = new LinkedList()
console.log(JSON.stringify(cities))
cities.find('head')
cities.insert("one", "head")
cities.insert("two", "one")
cities.insert("three", "two")
cities.insert("four", "three")
cities.display()
console.log('---')
console.log(cities)
console.log('---')
cities.remove("three")
cities.displayReverse()
console.log('--- show ---')
cities.show()
cities.advance(4)
cities.show()
cities.back(2)
cities.show()