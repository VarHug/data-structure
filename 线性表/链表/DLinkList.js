/**
 * 双链表结点类
 */
var DLinkList = function () {
    this.data = '';
    this.prior = null;
    this.next = null;
};

/**
 * 双链表类
 */
var DLinkListClass = function () {
    this.dhead = new DLinkList();
    this.dhead.data = '双链表头结点';
};
/**
 * 头插法建立双链表
 * @param {string[]} split 
 * @returns {DLinkList} this.dhead
 */
DLinkListClass.prototype.createListF = function (split) {
    let s, i;
    for (i = 0, len = split.length; i < len; i++) {
        s = new DLinkList();
        s.data = split[i];
        s.next = this.dhead.next;
        if (this.dhead.next !== null) {
            this.dhead.next.prior = s;
        }
        this.dhead.next = s;
        s.prior = this.dhead;
    }  
    return this.dhead;
};

/**
 * 尾插法建立双链表
 * @param {string[]} split 
 * @returns {DLinkList} this.dhead
 */
DLinkListClass.prototype.createListR = function (split) {
    let s, r, i;
    r = this.dhead;
    for (i = 0, len = split.length; i < len; i++) {
        s = new DLinkList();
        s.data = split[i];
        r.next = s;
        s.prior = r;
        r = s;
    }
    r.next = null;
    return this.dhead;
};
/**
 * 将双链表的所有结点值构成一个字符串返回
 * @returns {string} str
 */
DLinkListClass.prototype.dispList = function () {
    let str = '',
        p = this.dhead.next;
    if (p !== null) {
        while (p !== null) {
            str += p.data + ' ';
            p = p.next;
        }
    }
    return str;
};
/**
 * 求双链表数据结点的个数
 * @returns {num} len
 */
DLinkListClass.prototype.listLength = function () {
    let len = 0,
        p = this.dhead;
    while (p.next !== null) {
        len++;
        p = p.next;
    }
    return len;  
};
/**
 * 求双链表中某个数据元素值
 * @param {num} i 
 * @returns 
 */
DLinkListClass.prototype.getElem = function (i) {
    let j = 0,
        p = this.dhead;
    while (j < i && p !== null) {
        j++;
        p = p.next;
    }
    if (p === null) {
        return false;
    } else {
        return p.data;
    }
};
/**
 * 按元素值查找
 * @param {string} e 
 * @returns {num}
 */
DLinkListClass.prototype.locateElem = function (e) {
    let i = 1,
        p = this.dhead.next;
    while (p !== null && p.data !== e) {
        p = p.next;
        i++;
    }
    if (p = null) {
        return 0;
    } else {
        return i;
    }
};
/**
 * 插入数据元素
 * @param {num} i 
 * @param {string} e 
 * @returns 
 */
DLinkListClass.prototype.listInsert = function (i, e) {
    let j = 0, 
        s,
        p = this.dhead;
    while (j < i - 1 && p !== null) {
        j++;
        p = p.next;
    }
    if (p === null) {
        return false;
    } else {
        s = new DLinkList();
        s.data = e;
        s.next = p.next;
        if (p.next !== null) {
            p.next.prior = s;
        }
        s.prior = p;
        p.next = s;
    }
    return this.dhead;
};
/**
 * 删除数据元素
 * @param {num} i 
 */
DLinkListClass.prototype.listDelete = function (i) {
    let j = 0,
        p = this.dhead,
        q;
    while (j < i - 1 && p !== null) {
        j++;
        p = p.next;
    }
    if (p === null) {
        return false;
    } else {
        q = p.next;
        if (q === null) {
            return false;
        }
        p.next = q.next;
        if (p.next !== null) {
            p.next.prior = p;
        }
        q = null;
        return true;
    }
};