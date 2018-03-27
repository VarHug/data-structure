/**
 * 顺序表构造函数
 * @param {[]} arr 
 */
var Sqlist = function (arr) {
    this.data = new Array();
    this.length = 0;
    if (arr) {
        createList(arr, this);
    }
};
/**
 * 由arr中的元素建立顺序表
 * @param {[]} arr 
 */
Sqlist.prototype.createList = function (arr) {
    if (!this.length) {
        createList(arr, this);
    } else {
        throw new Error('顺序表已经存有数据，无法建立顺序表');
    }
};
/**
 * 将顺序表中的所有元素构成一个字符串返回
 * @returns string
 */
Sqlist.prototype.dispList = function () {
    if (this.length > 0) {
        let str = this.data[0] + '';
        for (let i = 1; i < this.length; i++) {
            str += ' ' + this.data[i];
        }
        return str;
    } else {
        return '顺序表为空';
    }
};
/**
 * 求顺序表的长度
 * @returns num
 */
Sqlist.prototype.listLength = function () {
    return this.length;  
};
/**
 * 求线性表中某序号的元素值
 * @param {num} index 
 * @returns {string} 
 */
Sqlist.prototype.getElem = function (i) {
    if (typeof i !== 'number') {
        throw new Error('参数配置错误');
    }
    if (i < 1 || i > this.length) {
        return false;
    }
    return this.data[i - 1];
};
/**
 * 按元素值查找其序号
 * @param {string} str 
 * @returns 
 */
Sqlist.prototype.locateElem = function (str) {
    let i = 0,
        collator = Intl.Collator(),
        self = this;
    while (i < this.length && collator.compare(self.data[i], str) !== 0) {
        i++;
    }
    if (i >= this.length) {
        return 0;
    } else {
        return i + 1;
    }
};
/**
 * 向顺序表中插入数据元素
 * @param {number} i 
 * @param {string} str 
 * @returns 
 */
Sqlist.prototype.listInsert = function (i, str) {
    if (typeof i !== 'number' || typeof str !== 'string') {
        throw new Error('参数配置错误');
    }
    if (i < 1 || i > this.length + 1) {
        return false;
    }
    let j = this.length;
    for (; j >= i; j--) {
        this.data[j] = this.data[j - 1];
    }
    this.data[i - 1] = str;
    this.length++;
    return true; 
};
/**
 * 删除数据元素
 * @param {number} i 
 * @returns 
 */
Sqlist.prototype.listDelete = function (i) {
    if (typeof i !== 'number') {
        throw new Error('参数配置错误');
    }
    if (i < 1 || i > this.length) {
        return false;
    }
    let str = this.data[i - 1],
        j = i - 1;
    for (; j < this.length - 1; j++) {
        this.data[j] = this.data[j + 1];
    }
    this.data[j] = null;
    this.length--;
    return true;
};



var createList = function (arr, self) {
    if (!arr) {
        throw new Error('传入数据不能为空')
    }
    let i = 0;
    for (len = arr.length; i < len; i++) {
        if (typeof arr[i] === 'string') {
            self.data[i] = arr[i];
        } else {
            throw new Error('传入数据不为字符串类型')
        }
    }
    self.length = i;
};