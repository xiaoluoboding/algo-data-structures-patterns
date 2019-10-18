/**
 * 组合模式
 */

// 结合宏命令的组合模式
class SmartLife {
  lightingLamp () {
    console.log('Smart Lamp is lighting.')
  }

  startClean() {
    console.log('Room Robot is start clean room.')
  }

  playMusic() {
    console.log('HomePod is start playing music.')
  }
}

class Command {
  constructor() {
    this.commands = []
  }

  add (command) {
    this.commands.push(command)
  }

  execute () {
    for (let command of this.commands) {
      command()
    }
  }
}

const commonCommand = () => {
  console.log('open the door')
}

const smartLife = new SmartLife()
const command = new Command()

// 将普通命令与组合命令结合起来
command.add(commonCommand)
command.add(smartLife.lightingLamp)
command.add(smartLife.startClean)
command.add(smartLife.playMusic)

command.execute()

// 文件夹树形结构例子
class Folder {
  constructor(folder) {
    this.root = null
    this.parent = null
    this.folder = folder
    this.resources = []
  }

  add(resource) {
    // 设置根节点
    if (Object.getPrototypeOf(resource) === Folder.prototype) {
      resource.root = this
    }
    resource.parent = this
    this.resources.push(resource)
  }

  scan() {
    if (this.root === null) {
      console.log(`├── ${this.folder}`)
    }

    for (let resource of this.resources) {
      if (Object.getPrototypeOf(resource) === Folder.prototype) {
        console.log(`│   ├──${resource.folder}`)
      }
      resource.scan()
    }
  }
}

class File extends Folder {
  constructor(name) {
    super(name)
    this.parent = null
    this.name = name
  }

  add() {
    console.error('文件下面不能再添加文件')
  }

  scan() {
    if (this.parent.root) {
      console.log(`│   │   ├──${this.name}`)
    } else {
      console.log(`│   ├──${this.name}`)
    }
  }
}

const root = new Folder('学习资料')
const jsFolder = new Folder('JavaScript')
const cssFolder = new Folder('CSS')

const file1 = new File('JavaScript设计模式与开发实践.pdf')
const file2 = new File('CSS揭秘.pdf')
const file3 = new File('SVG精髓.pdf')

jsFolder.add(file1)
cssFolder.add(file2)

root.add(jsFolder)
root.add(cssFolder)
root.add(file3)


const nodeFolder = new Folder('Nodejs')
const file4 = new File('深入浅出 Node.js.pdf')

nodeFolder.add(file4)

const file5 = new File('数据结构与算法JavaScript描述.pdf')
const file6 = new File('D3.js数据可视化实战手册.pdf')

root.add(nodeFolder)
jsFolder.add(file5)
root.add(file6)

console.log('.')
root.scan()
console.log('...')
