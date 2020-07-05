/* eslint-disable no-unused-vars */

/**
 * 栈
 */
class Stack {
  constructor(items = []) {
    this.items = items
  }
  /**
   * @param {any} e 押入栈中的元素
   */
  push(item) {
    this.items.push(item)
  }
  /**
   * 弹出栈内嘴上层元素
   */
  pop() {
    return this.items.pop()
  }
  /**
   * @return {any} 返回栈内最上层元素
   */
  peek() {
    return this.items[this.items.length - 1]
  }
  /**
   * @return {boolean} 返回栈是否为空
   */
  isEmpty() {
    return this.items.length === 0
  }
  /**
   * @return {number} 返回栈的大小
   */
  size() {
    return this.items.length
  }
  /**
   * @return {string} 返回栈内元素,以字符串拼接
   */
  toString() {
    let string = ''
    for (let i = this.items.length - 1; i >= 0; i--) {
      string += this.items[i] + ' '
    }
    return string
  }
}

/**
 * 队列
 */
class Queue {
  constructor(items = []) {
    this.items = items
  }
  /**
   * @param {any} e 押入队列中的元素
   */
  push(item) {
    this.items.push(item)
  }
  /**
   * 弹出队列中的一个元素
   */
  pop() {
    let pop = this.items[0]
    this.items.splice(0, 1)
    return pop
  }
  /**
   * @return {any} 返回队列内第一个元素
   */
  peek() {
    return this.items[0]
  }
  /**
   * @return {boolean} 返回队列是否为空
   */
  isEmpty() {
    return this.items.length === 0
  }
  /**
   * @return {number} 返回队列的大小
   */
  size() {
    return this.items.length
  }
  /**
   * @return {string} 返回队列内元素,以字符串拼接
   */
  toString() {
    let string = ''
    for (let i = 0; i < this.items.length; i++) {
      string += this.items[i] + ' '
    }
    return string
  }
}

/**
 * 优先级队列
 */
class PriorityQueue extends Queue {
  /**
   * @param {any} e 押入队列中的元素
   * @param {number} e 押入队列中的元素的优先级
   * 向队列中插入元素
   */
  push(item, priority = Infinity) {
    if (priority && this.items.length) {
      for (let i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, { item, priority })
          break
        } else if (i === this.items.length - 1) {
          this.items.push({ item, priority })
          break
        }
      }
    } else {
      this.items.push({ item, priority })
    }
  }
  /**
   * @return {string} 返回栈内元素及优先级,以字符串拼接
   */
  toString() {
    let string = ''
    for (let i = 0; i < this.items.length; i++) {
      string += this.items[i].item + '-' + this.items[i].priority + ' '
    }
    return string
  }
}

/**
 * 链表
 */
class LinkedList {
  /**
   * @param {number} length 链表初始长度
   * @param {LinkedList} head 链表中的head
   */
  constructor(length = 0, head = null) {
    this.length = length
    this.head = head
  }

  /**
   * @param {LinkedList} data 链表中的一个块
   * @param {LinkedList} next 链表中的next
   * 向链表最后插入元素
   */
  append(data, next = null) {
    if (!this.head) {
      this.head = {
        data,
        next
      }
      this.length++
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = {
        data,
        next
      }
      this.length++
    }
  }

  /**
   * @param {number} position 插入块的指定位置
   * @param {*} data 需要插入的块
   * 向链表指定位置插入块
   */
  insert(position, data) {
    if (position < 0 || position > this.length) return false
    if (position === 0) {
      let current = { data, next: this.head }
      this.head = current
    } else {
      let current = this.head
      let previous = null
      for (let i = 0; i < position; i++) {
        previous = current
        current = current.next
      }
      let q = { data, next: current }
      previous.next = q
    }
    this.length++
  }

  /**
   * @param {number} position 需要获取的下表值
   * @returns {any} 返回指定下标的data
   * 获取链表中指定下标的data
   */
  get(position) {
    if (position < 0 || position >= this.length) return null
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  /**
   * @param {any} data 需要查找的data
   * @returns {number} 返回查找的data的index
   * 查找的data的index
   */
  indexOf(data) {
    let current = this.head
    let index = 0
    while (current) {
      if (data === current.data) return index
      current = current.next
      index++
    }
    return -1
  }

  /**
   * @param {number} position 需要修改的data的下标值
   * @param {any} data 修改后的data
   * @returns {boolean} 是否成功修改
   * 修改指定块内容
   */
  update(position, data) {
    if (position < 0 || position >= this.length) return false
    let current = this.head
    let index = 0
    while (index++ < position) {
      current = current.next
    }
    current.data = data
    return true
  }

  /**
   * @param {number} position 需要删除块的下标
   * @returns {null||any} 是否删除成功,成功则返回删除的data,失败返回null
   * 删除指定位置的块
   */
  removeAt(position){
    if (position < 0 || position >= this.length) return null
    let current = this.head
    if(position===0){
      this.head = this.head.next
      this.length-=1
      return current.data
    }
    let index = 0
    let previous = null
    while(index++ <position){
      previous = current
      current = current.next
    }
    previous.next = current.next
      this.length-=1
      return current.data
  }

  /**
   * @param {any} data 需要指定内容删除的块
   * @returns {null||any} 是否删除成功,成功则返回删除的data,失败返回null
   * 删除指定内容删除的块
   */
  remove(data){
    let position = this.indexOf(data)
    return this.removeAt(position)
  }

  /**
   * @return {string} 返回链表内data,以字符串拼接
   */
  toString() {
    let listString = ''
    let current = this.head
    while (current) {
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }

  /**
   * @returns 返回链表是否为空
   */
  isEmpty(){
    return this.length === 0
  }

  /**
   * @returns 返回链表长度
   */
  size(){
    return this.length
  }
}


let a = new LinkedList()
// a.append(1)
// a.append(2)
// a.append(3)
// a.append(4)
// a.append(5)
// a.append(6)
// a.removeAt(5)
// a.insert(6, '赖赖')
// console.log(a.toString())
// console.log(a.indexOf('赖赖'));
console.log(a.size());






// require('http').createServer((req, res) => {
// }).listen(8001, () => {
// });