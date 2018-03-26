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
        console.log('顺序表已经存有数据，无法建立顺序表');
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



var createList = function (arr, self) {
    if (!arr) {
        return;
    }
    let i = 0;
    for (len = arr.length; i < len; i++) {
        self.data[i] = arr[i];
    }
    self.length = i;
};