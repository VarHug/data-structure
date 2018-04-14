/**
 * 双亲存储结构结点类型
 */
var PTree = function () {
    this.data = '';
    this.parent = null;
};
/**
 * 树的双亲存储结构类
 * @param {num} maxSize 
 */
var TreeClass = function (maxSize) {
    this.maxSize = maxSize < 100 ? maxSize : 100;
    this.t = new Array[this.maxSize];
    this.nums = 0; //树中结点个数
};
/**
 * 
 * 
 * @param {num[]} no 结点编号数组
 * @param {string[]} val 结点值数组
 * @param {pno} pno 双亲编号数组
 * @param {num} n 树中结点个数
 */
TreeClass.prototype.createTree = function (no, val, pno, n) {
    let i, j;
    for (i = 0; i < n; i++) {
        j = 0;
        while (j < n && no[j] !== i) {
            j++;
        }
        if (j === n)
            return false;
        this.t[i] = new PTree();
        this.t[i].data = val[j];
        this.t[i].parent = pno[j];
    }
    this.nums = n;
    return true;
};

TreeClass.prototype.dispTree = function () {
    let i, str = '';
    if (this.nums > 0) {
        str += '树中共有' + this.nums + '个结点\r\n';
        str += '结点编号\t结点值\t双亲编号\r\n';
        for (i = 0; i < this.nums; i++) {
            str += i + '\t' + this.t[i].data + '\t' + this.t[i].parent + '\r\n';
        }
    }  
    return str;
};



