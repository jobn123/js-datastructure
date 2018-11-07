class Stack {
  constructor() {
    this.items = []
  }
  // 入栈
  add (e) {
    this.items.push(e)
  }
  // 出栈
  pop () {
    return this.items.pop()
  }
  get peek() {
    return this.items[this.items.length - 1]
  }
  // 是否为空
  get isEmpty() {
    return !this.items.length
  }
  // 栈尺寸
  get size() {
    return this.items.length
  }
  // 清空栈
  clear () {
    this.items = []
  }
}

const stack = new Stack()
console.log(stack.isEmpty)

//添加元素
stack.add(4)
stack.add(3)

//属性读取
console.log(stack.peek)
stack.add(6)
console.log(stack.size)
console.log(stack.isEmpty)

