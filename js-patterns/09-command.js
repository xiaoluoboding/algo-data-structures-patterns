/**
 * 命令模式
 * 假如我们置办了一些智能家居，回到家中要自动开启台灯，扫地机器人为你清扫房间，同时播放着休闲音乐
 */

class SmartLife {
  lightingLamp() {
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
  constructor(subject) {
    this.subject = subject
    this.commands = []
  }

  execute(command) {
    this.commands.push(command)
    return this.subject[command]()
  }
}

const smartLife = new Command(new SmartLife())

smartLife.execute('lightingLamp')
smartLife.execute('startClean')
smartLife.execute('playMusic')