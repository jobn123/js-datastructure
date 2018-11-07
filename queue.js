class Queue {
  constructor() {
    this.items = []
  }
  // 入队列
  add (e) {
    this.items.push(e)
  }
  //出队列
  pop (e) {
    return this.items.shift()
  }
  front(){
    return this.items[0]
  }
  // 是否空队列
  get isEmpty () {
    return !this.items.length
  }
  // 队列长度
  get size () {
    return this.items.length
  }
}

/**
 * 优先队列
 */

function enqueue(element, priority) {
  const queueElement = { element, priority }
  if (this.isEmpty) {
      this.items.push(queueElement)
  } else {
      const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority)
      if (preIndex > -1) {
          this.items.splice(preIndex, 0, queueElement)
      } else {
          this.items.push(queueElement)
      }
  }
}

/**
 * 循环队列
 */
class LoopQueue extends Queue {

  constructor(items) {
      super(items)
  }

  getIndex(index) {
      const length = this.items.length
      return index > length ? (index % length) : index
  }

  find(index) {
      return !this.isEmpty ? this.items[this.getIndex(index)] : null
  }
}

const loopQueue = new LoopQueue(['Surmon'])
loopQueue.enqueue('SkyRover')
loopQueue.enqueue('Even')
loopQueue.enqueue('Alice')
console.log(loopQueue.size, loopQueue.isEmpty) // 4 false

console.log(loopQueue.find(26)) // 'Evan'
console.log(loopQueue.find(87651)) // 'Alice'