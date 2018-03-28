/**
 * 链表节点类
 */
var LinkList = function () {
    this.data = null;
    this.next = null;  
};
/**
 * 单链表类
 */
var LinkListClass = function () {
    this.head = new LinkList();
    this.head.data = 'headNode';
};
/**
 * 头插法建立单链表
 * @param {string[]} split 
 */
LinkListClass.prototype.createListF = function (split) {
    if (this.head.next !== null) {
        console.log('单链表已经存有数据，无法建立新单链表');
        throw new Error('Unexpected operation');
    }
    let s;
    for (let i = 0,len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        s.next = this.head.next;
        this.head.next = s;
    }
};
/**
 * 尾插法建立单链表
 * @param {string[]} split 
 */
LinkListClass.prototype.createListR = function (split) {
    if (this.head.next !== null) {
        console.log('单链表已经存有数据，无法建立新单链表');
        throw new Error('Unexpected operation');
    }
    let s, r;
    r = this.head;
    for (let i = 0, len = split.length; i < len; i++) {
        s = new LinkList();
        s.data = split[i];
        r.next = s;
        r = s;
    }
    r.next = null;
};
/**
 * 将单链表的所有节点值构成一个字符串返回
 * @returns string
 */
LinkListClass.prototype.dispList = function () {
    let str = '',
        cur = this.head.next;
    if (!cur) {
        while (cur !== null) {
            str += cur.data;
            cur = cur.next;
        }
    }
    return str;
};
/**
 * 求单链表数据节点个数
 * @returns num
 */
LinkListClass.prototype.listLength = function () {
    let len = 0,
        cur = this.head;
    while (cur.next !== null) {
        len++;
        cur = cur.next;
    }
    return len;
};
/**
 * 求单链表中某个数据元素值
 * @returns string
 */
LinkListClass.prototype.getElem = function () {
    let j = 0,
        cur = this.head;
    while (j < i && cur !== null) {
        j++;
        cur = cur.next;
    }
    if (cur) {
        return cur.data;
    }
};