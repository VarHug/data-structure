/**
 * 链表结点类
 */
var LinkList = function () {
    this.data = '';
    this.next = null;  
};
/**
 * 循环链表类
 */
var CLinkListClass = function () {
    this.head = new LinkList();  
    this.head.data = '头结点';
};
/**
 * 头插法建立循环链表
 * @param {string[]} split 
 * @returns {LinkList}
 */
CLinkListClass.prototype.createListF = function (split) {
    let i, s;
    this.head.next = this.head;
    for (i = 0, len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        s.next = this.head.next;
        this.head.next = s;
    }
    return this.head;
};
/**
 * 尾插法建立循环链表
 * @param {string[]} split 
 * @returns {LinkList}
 */
CLinkListClass.prototype.createListR = function (split) {
    let i, s, r;
    r = this.head;
    for (i = 0, len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        r.next = s;
        r = s;
    }
    r.next = this.head;
    return this.head;
};
/**
 * 将循环链表的所有结点构成一个字符串返回
 * @returns {string}
 */
CLinkListClass.prototype.dispList = function () {
    let str = '',
        p = this.head.next;
    if (p !== this.head) {
        while (p !== this.head) {
            str += p.data + ' ';
            p = p.next;
        }
    }
    return str;
};
/**
 * 求循环链表的结点个数
 * @returns {num}
 */
CLinkListClass.prototype.listLength = function () {
    let n = 0,
        p = this.head;
    while (p.next !== this.head) {
        n++;
        p = p.next;
    }
    return n;
};
/**
 * 求循环链表中某个数据的元素值
 * @param {num} i 
 */
CLinkListClass.prototype.getElem = function (i) {
    let j = 1,
        p = this.head.next;
    while (j < i && p !== this.head) {
        j++;
        p = p.next;
    }
    if (p === this.head) {
        return false;
    } else {
        return p.data;
    }
};
/**
 * 按元素值查找
 * @param {string} e 
 */
CLinkListClass.prototype.locateElem = function (e) {
    let i = 1,
        p = this.head.next;
    while (p !== this.head && p.data !== e) {
        i++;
        p = p.next;
    }
    if (p === this.head) {
        return 0;
    } else {
        return i;
    }
};
/**
 * 插入数据元素
 * @param {num} i 
 * @param {string} e 
 * @returns {LinkList}
 */
CLinkListClass.prototype.listInsert = function (i, e) {
    let j = 1,
        s,
        p;
    if (i < 1) {
        return false;
    }
    if (i === 1) {
        s = new LinkList();
        s.data = e;
        s.next = this.head;
        this.head.next = s;
    } else {
        p = this.head.next;
        while (j < i - 1 && p !== this.head) {
            j++;
            p = p.next;
        }
        if (p === this.head) {
            return false;
        } else {
            s = new LinkList();
            s.data = e;
            s.next = p.next;
            p.next = s;
        }
    }
    return this.head;
};
/**
 * 删除数据元素
 * @param {num} i 
 * @returns {LinkList}
 */
CLinkListClass.prototype.listDelete = function (i) {
    let j = 1,
        q,
        p;
    if (i < 1) {
        return false;
    }
    if (i === 1) {
        p = this.head.next;
        this.head.next = p.next;
        p = null;
    } else {
        p = this.head.next;
        while (j < i - 1 && p !== this.head) {
            j++;
            p = p.next;
        }
        if (p === this.head) {
            return false;
        } else {
            q = p.next;
            if (q === this.head) {
                return false;
            }
            p.next = q.next;
            q = null;
            return this.head;
        }
    }
};