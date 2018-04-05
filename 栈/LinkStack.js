/**
 * 链栈结点类
 * 
 */
var LinkStack = function () {
    this.data = '';
    this.next = null;
};
/**
 * 链栈类
 */
var LinkStackClass = function () {
    this.head = new LinkStack();
    this.head.data = '头结点';  
};
/**
 * 判断栈是否为空
 * @returns {boolean}
 */
LinkStackClass.prototype.stackEmpty = function () {
    return this.head.next === null;  
};
/**
 * 进栈
 * @param {string} str 
 */
LinkStackClass.prototype.push = function (str) {
    let p = new LinkStack();
    p.data = str;
    p.next = this.head.next;
    this.head.next = p;  
};
/**
 * 出栈
 */
LinkStackClass.prototype.pop = function () {
    if (this.stackEmpty()) {
        return false;
    }
    let p = this.head.next,
        e = p.data;
    this.head.next = p.next;
    p = null;
    return e;
};
/**
 * 取栈顶元素
 * @returns {string}
 */
LinkStackClass.prototype.getTop = function () {
    if (this.stackEmpty()) {
        return false;
    }  
    let p = this.head.next;
    return p.data;
};
/**
 * 
 * @returns {string}
 */
LinkStack.prototype.dispStack = function () {
    let str = '';
    if (!this.stackEmpty()) {
        let p = this.head.next;
        while (p.next !== null) {
            str += p.data + ',';
            p = p.next;
        }
        str += p.data;
    }  
    return str;
};