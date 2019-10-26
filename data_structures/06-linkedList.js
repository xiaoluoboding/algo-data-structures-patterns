// 链表节点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 链表
class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.head.next = this.head
  }

  remove(item) {
    let prevNode = this.findPrevious(item)
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next
    }
  }

  findPrevious(item) {
    let currNode = this.head
    while (!(currNode.next == null) &&
           !(currNode.next.element == 'head') &&
            (currNode.next.element != item)) {
      currNode = currNode.next
    }
    return currNode
  }

  display() {
    let currNode = this.head
    while (!(currNode.next == null) &&
           !(currNode.next.element == 'head')) {
      console.log(currNode.next.element)
      // console.log(currNode.next)
      currNode = currNode.next
    }
  }

  find(element) {
    let currNode = this.head
    while (currNode.element != element) {
      currNode = currNode.next
    }
    // console.log(currNode)
    return currNode
  }

  insert(newElement, item) {
    let newNode = new Node(newElement)
    let current = this.find(item)
    if (current) {
      newNode.next = current.next
      current.next = newNode
    }
  }
}

const cities = new LinkedList()
console.log(cities)
cities.find('head')
cities.insert("Conway", "head")
cities.insert("Carlisle", "Conway")
cities.insert("Alma", "Carlisle")
cities.display()
console.log('---')
cities.remove("Carlisle")
cities.display()
console.log('---')
console.log(cities.head.element)
console.log(cities.head.next.element)
console.log(cities.head.next.next.element)
console.log(cities.head.next.next.next.element)