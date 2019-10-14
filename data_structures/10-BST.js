class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  show() {
    console.log(this.data)
  }
}

class BST {
  constructor() {
    this.root = null
  }

  // 插入节点
  insert(data) {
    const node = new Node(data, null, null)
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = node
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = node
            break
          }
        }
      }
    }
  }

  // 中序遍历
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left)
      node.show()
      this.inOrder(node.right)
    }
  }

  // 先序遍历
  preOrder(node) {
    if (node !== null) {
      node.show()
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }

  // 后序遍历
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      node.show()
    }
  }

  // 查找最小值，最小值在左子节点上
  getMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  // 查询最大值，最大值在右子节点上
  getMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  // 查询给定值，先查找左子节点，再查找右子节点
  find(data) {
    let current = this.root
    while (current !== null) {
      if (data === current.data) {
        return true
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  // 寻找最小值
  getSmallest(node) {
    if (node.left === null) {
      return node
    } else {
      return this.getSmallest(node.left)
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data)
  }

  removeNode(node, data) {
    if (node === null) {
      return null
    }
    if (data === node.data) {
      // 没有子节点的节点
      if (node.left === null && node.right === null) {
        return null
      }
      // 没有左子节点的节点
      if (node.left === null) {
        return node.right
      }
      // 没有右子节点的节点
      if (node.right === null) {
        return node.left
      }
      // 有两个子节点的节点
      const tempNode = this.getSmallest(node.right)
      node.data = tempNode.data
      node.right = this.removeNode(node.right, tempNode.datq)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }

  // 显示整个Tree
  showRoot() {
    console.log(JSON.stringify(this.root))
  }
}

const nums = new BST()
nums.insert(12)
nums.insert(23)
nums.insert(3)
nums.insert(34)
nums.insert(45)
nums.insert(56)
nums.insert(6)
nums.insert(67)
nums.insert(78)
nums.insert(89)
nums.insert(9)
nums.insert(90)
nums.showRoot()
// nums.inOrder(nums.root)
// nums.preOrder(nums.root)
// nums.postOrder(nums.root)
console.log('--- --- ---')
console.log(`Min node data is: ${nums.getMin()}`)
console.log(`Max node data is: ${nums.getMax()}`)
console.log(nums.find(67))
nums.removeNode(nums.root, 12)
nums.showRoot()
