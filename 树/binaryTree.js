/**
 * 二叉树结点类
 * @param {*} val
 */
var Node = function (val) {
  this.val = val;
  this.lchild = null;
  this.rchild = null;
};

/**
 * 二叉排序树类
 * @param {Array} dataArray
 */
var BinaryTree = function (dataArray) {
  this.root = null;
  this._init(dataArray);
};

/**
 * 初始化二叉排序树方法
 * @param {Array} dataArray
 */
BinaryTree.prototype._init = function (dataArray) {
  if (dataArray.length < 0) {
    return;
  }
  dataArray.forEach((item) => {
    this.insert(item);
  });
};

/**
 * 暴露的插入结点方法
 * @param {Number} val
 */
BinaryTree.prototype.insert = function (val) {
  if (this.root === null) {
    this.root = new Node(val);
  } else {
    this._insertNode(this.root, val);
  }
};

/**
 * 内部递归插入结点方法
 * @param {Node} node
 * @param {Number} newVal
 */
BinaryTree.prototype._insertNode = function (node, newVal) {
  if (newVal === node.val) {
    return;
  } else if (newVal < node.val) {
    if (node.lchild === null) {
      node.lchild = new Node(newVal);
    } else {
      this._insertNode(node.lchild, newVal);
    }
  } else {
    if (node.rchild === null) {
      node.rchild = new Node(newVal);
    } else {
      this._insertNode(node.rchild, newVal);
    }
  }
};

/**
 * 中序遍历方法
 * @param {function} callback
 */
BinaryTree.prototype.inOrder = function (callback) {
  _inOrderNode(this.root, callback);

  function _inOrderNode (node, callback) {
    if (node !== null) {
      _inOrderNode(node.lchild, callback);
      callback(node.val);
      _inOrderNode(node.rchild, callback);
    }
  };
};

/**
 * 前（先）序遍历方法
 * @param {function} callback
 */
BinaryTree.prototype.preOrder = function (callback) {
  _preOrderNode(this.root, callback);

  function _preOrderNode (node, callback) {
    if (node !== null) {
      callback(node.val);
      _preOrderNode(node.lchild, callback);
      _preOrderNode(node.rchild, callback);
    }
  }
};

/**
 * 后序遍历方法
 * @param {function} callback
 */
BinaryTree.prototype.postOrder = function (callback) {
  _postOrderNode(this.root, callback);

  function _postOrderNode(node, callback) {
    if (node !== null) {
      _postOrderNode(node.lchild, callback);
      _postOrderNode(node.rchild, callback);
      callback(node.val);
    }
  };
};

// var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];

// var bt = new BinaryTree(nodes);

// var inOrderTxt = '中序遍历的结果是：';
// var preOrderTxt = '前序遍历的结果是：';
// var postOrderTxt = '后序遍历的结果是：';

// bt.inOrder((val) => {
//   inOrderTxt += val + ' ';
// });

// bt.preOrder((val) => {
//   preOrderTxt += val + ' ';
// });

// bt.postOrder((val) => {
//   postOrderTxt += val + ' ';
// });

// console.log(inOrderTxt);
// console.log(preOrderTxt);
// console.log(postOrderTxt);
