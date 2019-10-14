class Graph {
  constructor(v) {
    this.vertices = v  // 顶点
    this.edges = 0  // 边
    this.adj = [] // 邻接表
    for (let i = 0; i < this.vertices; i++ ) {
      this.adj[i] = []
    }
    this.marked = Array(this.vertices).fill(false)
    this.edgeTo = [] // 广度优先搜索确定路径，保存从一个顶点到下一个顶点的所有边
  }

  // 添加边
  addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
  }

  // 显示所有顶点及其相邻顶点
  showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
      let str = i + " -> "
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] !== undefined) {
          str += this.adj[i][j] + ' '
        }
      }
      console.log(str)
    }
  }

  // 深度优先搜索
  dfs(v) {
    this.marked[v] = true
    if (this.adj[v] !== undefined) {
      console.log(`Visited vertex: ${v}`)
    }
    for (let w of this.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(w)
      }
    }
  }

  // 广度优先搜索
  bfs(s) {
    console.log(this.adj)
    let queue = []
    this.marked[s] = true
    queue.push(s) // 添加到队尾
    while (queue.length > 0) {
      console.log(queue)
      let v = queue.shift() // 从队首移除
      if (v !== undefined) {
        console.log(`Visited vertex: ${v}`)
      }
      for (let w of this.adj[v]) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          this.marked[w] = true
          queue.push(w)
        }
      }
    }
  }

  // 使用栈存储与指定顶点有共同边的所有顶点
  pathTo(v) {
    let s = 0 // 顶点
    if (!this.hasPathTo(v)) {
      return undefined
    }
    let path = []
    while (v !== s) {
      path.push(v)
      v = this.edgeTo[v]
    }
    path.push(s)
    return path
  }

  // 判断是否搜索过
  hasPathTo(v) {
    return this.marked[v]
  }
}

const g = new Graph(7)

g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(1, 5)
g.addEdge(2, 4)
g.addEdge(5, 6)

g.showGraph()
// g.dfs(0)
g.bfs(0)
let paths = g.pathTo(6)
// 模拟出栈输出路径
console.log(paths.reverse().join('-'))  // 0-1-5-6


