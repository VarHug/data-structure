/**
 * 顺序栈类
 * @param {num} maxsize 最大数据存储量
 */
var SqStackClass = function (size) {
    this.maxSize = size <= 100 ? size : 100;
    this.data = new Array(this.maxsize).fill('');
    this.top = -1;
};
/**
 * 判断栈是否为空
 * @returns {num}
 */
SqStackClass.prototype.stackEmpty = function () {
    return top === -1;  
};
/**
 * 进栈
 * @param {string} str
 * @returns {boolean}
 */
SqStackClass.prototype.push = function (str) {
    if (this.top === this.maxSize - 1) {
        return false;
    }
    this.data[++top] = str;
    return true;
};
/**
 * 出栈
 * @returns {boolean}
 */
SqStackClass.prototype.pop = function () {
    if (this.stackEmpty()) {
        return false;
    }  
    this.data[this.top--] = '';
    return true;
};
/**
 * 取出栈顶元素
 * @returns {string}
 */
SqStackClass.prototype.getTop = function () {
    if (this.stackEmpty()) {
        return false;
    }  
    return this.data[top];
};
/**
 * 取出栈中所有元素构成的字符串
 * 
 */
SqStackClass.prototype.dispStack = function () {
    let i = 0,
        str = '';  
    if (!this.stackEmpty()) {
        for (i = 0; i < top; i++) {
            str += this.data[i] + ',';
        }
        str += this.data[top];
    }
    return str;
};