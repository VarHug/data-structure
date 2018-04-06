/**
 * 循环队列类
 * @param {num} size 
 */
var SqQueueClass = function (size) {
    this.maxSize = size <= 100 ? size : 100;
    this.data = new Array(this.maxSize).fill('');
    this.front = 0;
    this.rear = 0;
};  
/**
 * 判断队列是否为空
 * @returns {boolean}
 */
SqQueueClass.prototype.queueEmpty = function (e) {
    return this.front === this.rear;
};
/**
 * 判断队列是否为满
 * @returns {boolean}
 */
SqQueueClass.prototype.queueFull = function () {
    return (this.rear + 1) % this.maxSize === this.front;  
};
/**
 * 返回队中元素个数
 * @returns {num}
 */
SqQueueClass.prototype.getCount = function () {
    return (this.rear - this.front + this.maxSize) % this.maxSize;  
};
/**
 * 进队
 * @param {string} e
 * @returns {boolean}
 */
SqQueueClass.prototype.enQueue = function () {
    if (this.queueFull()) {
        return false;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.data[this.rear] = e;
    return true;
};  
/**
 * 出队
 * @returns {boolean}
 */
SqQueueClass.prototype.deQueue = function () {
    if (this.queueEmpty()) {
        return false;
    }  
    this.front = (this.front + 1) % this.maxSize;
    return true;
};
/**
 * 将队中所有元素构成一个字符串返回
 * @returns {string}
 */
SqQueueClass.prototype.dispQueue = function () {
    let i,
        str = '';
    if (!this.queueEmpty()) {
        i = (this.front + 1) % this.maxSize;
        while (i !== this.rear) {
            str += this.data[i] + ',';
            i = (i + 1) % this.maxSize;
        }
        str += this.data[this.rear];
    }
    return str;
};
