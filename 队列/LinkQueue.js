/**
 * 链队结点类
 */
var LinkNode = function () {
    this.data = '';
    this.next = null;  
};
/**
 * 链队类
 */
var LinkQueueClass = function () {
    this.front = null;
    this.rear = null();
};
/**
 * 判断队列是否为空
 * @returns {boolean}
 */
LinkQueueClass.prototype.queueEmpty = function () {
    return this.rear === null;
};
/**
 * 进队
 * @param {string} e 
 */
LinkQueueClass.prototype.enQueue = function (e) {
    let p = new LinkNode();  
    p.data = e;
    if (this.queueEmpty()) {
        this.front = this.rear = p;
    } else {
        this.rear.next = p;
        this.rear = p;
    }
    return this.front;
};
/**
 * 出队
 * @returns {boolean}
 */
LinkQueueClass.prototype.deQueue = function () {
    if (this.queueEmpty()) {
        return false;
    }  
    let p = this.front;
    if (this.front === this.rear) {
        this.front = this.rear = null;
    } else {
        this.front = this.front.next;
    }
    p = null;
    return true;
};
/**
 * 将队中所有元素构成一个字符串返回
 * @returns 
 */
LinkQueueClass.prototype.dispQueue = function () {
    let p = this.front,
        str = '';
    if (!this.queueEmpty()) {
        while (p.next !== null) {
            str += p.data + ',';
            p = p.next;
        }
        str += p.data;
    }
    return str;
};
/**
 * 求队列中元素个数
 * @returns {num}
 */
LinkQueueClass.prototype.getCount = function () {
    let len = 0,
        p = this.front;
    while (p !== null) {
        len++;
        p = p.next;
    }  
    return len;
};