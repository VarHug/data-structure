/**
 * 顺序栈类
 * Creates an instance of SqStack.
 * @param {Number} size
 * @memberof SqStack
 */
class SqStack {
  constructor(size) {
    this._size = size || 100
    this.data = new Array(this._size).fill(null)
    this._top = -1
  }

  /**
   * 判断栈是否为空
   * @returns {Boolean}
   * @memberof SqStack
   */
  empty() {
    return this._top === -1
  }

  /**
   * 进栈
   * @param {*} item
   * @returns {Array}
   * @memberof SqStack
   */
  push(item) {
    this.data[++this._top] = item
    return this.data
  }

  /**
   * 出栈
   * @returns {Boolean}
   * @memberof SqStack
   */
  pop() {
    if (this.empty()) {
      return false
    }
    this.data[this._top--] = null
    return true
  }

  /**
   * 取栈顶元素
   * @returns {}
   * @memberof SqStack
   */
  top() {
    if (this.empty()) {
      return false
    }
    return this.data[this._top]
  }
}
