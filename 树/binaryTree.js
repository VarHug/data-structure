class Node {
  /**
   * 二叉树结点类
   * Creates an instance of Node.
   * @param {Number} val
   * @memberof Node
   */
  constructor(val) {
    this.val = val;
    this.lchild = null;
    this.rchild = null;
  }
}

class BinaryTree {
  /**
   * 二叉排序树类
   * Creates an instance of BinaryTree.
   * @param {Array} dataArray
   * @memberof BinaryTree
   */
  constructor(dataArray) {
    this.root = null;
    let _this_ = this;
    _init(dataArray);

    /**
     * 初始化方法
     * @param {Array} dataArray
     */
    function _init (dataArray) {
      if (dataArray.length < 0) {
        return;
      }
      dataArray.forEach((item) => {
        _this_.insert(item);
      });
    }
  }

  /**
   * 插入结点方法
   * @param {Number} val
   * @memberof BinaryTree
   */
  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      _insertNode(this.root, val);
    }
  
    function _insertNode (node, newVal) {
      if (newVal === node.val) {
        return;
      } else if (newVal < node.val) {
        if (node.lchild === null) {
          node.lchild = new Node(newVal);
        } else {
          _insertNode(node.lchild, newVal);
        }
      } else {
        if (node.rchild === null) {
          node.rchild = new Node(newVal);
        } else {
          _insertNode(node.rchild, newVal);
        }
      }
    }
  }

  /**
   * 中序遍历方法
   * @param {function} callback
   * @memberof BinaryTree
   */
  inOrder(callback) {
    _inOrderNode(this.root, callback);

    function _inOrderNode (node, callback) {
      if (node !== null) {
        _inOrderNode(node.lchild, callback);
        callback(node.val);
        _inOrderNode(node.rchild, callback);
      }
    }
  }

  /**
   * 前（先）序遍历方法
   * @param {function} callback
   * @memberof BinaryTree
   */
  preOrder(callback) {
    _preOrderNode(this.root, callback);

    function _preOrderNode (node, callback) {
      if (node !== null) {
        callback(node.val);
        _preOrderNode(node.lchild, callback);
        _preOrderNode(node.rchild, callback);
      }
    }
  }

  /**
   * 后序遍历方法
   * @param {function} callback
   * @memberof BinaryTree
   */
  postOrder(callback) {
    _postOrderNode(this.root, callback);

    function _postOrderNode(node, callback) {
      if (node !== null) {
        _postOrderNode(node.lchild, callback);
        _postOrderNode(node.rchild, callback);
        callback(node.val);
      }
    }
  }

  /**
   * 查找二叉树中的最小值
   * @memberof BinaryTree
   */
  findMin() {
    return _minNode(this.root);

    function _minNode(node) {
      if (node) {
        while (node && node.lchild !== null) {
          node = node.lchild;
        }

        return node.val;
      }

      return null;
    }
  }

  /**
   * 查找二叉树中的最大值
   * @memberof BinaryTree
   */
  findMax() {
    return _maxNode(this.root);

    function _maxNode(node) {
      if (node) {
        while (node && node.rchild !== null) {
          node = node.rchild;
        }

        return node.val;
      }

      return null;
    }
  }

  /**
   * 查找结点
   * @param {Number} data
   * @memberof BinaryTree
   */
  findNode(data) {
    return _findNode(this.root, data);

    function _findNode (node, data) {
      if (node) {
        if (data < node.val) {
          return _findNode(node.lchild, data);
        } else if (data > node.val) {
          return _findNode(node.rchild, data);
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  }

  /**
   * 删除结点
   * @param {Number} data
   * @memberof BinaryTree
   */
  removeNode(data) {
    this.root = _removeNode(this.root, data);
    return this.root;

    function _removeNode(node, data) {
      if (node) {
        if (data < node.val) {
          node.lchild = _removeNode(node.lchild, data);
          return node;
        } else if (data > node.val) {
          node.rchild = _removeNode(node.rchild, data);
          return node;
        } else {
          // 叶子结点
          if (node.lchild === null && node.rchild === null) {
            node = null;
            return node;
          }
          // 无左孩子有右孩子
          if (node.lchild === null) {
            node = node.rchild;
            return node;
          }
          // 有左孩子无右孩子
          if (node.rchild === null) {
            node = node.lchild;
            return node;
          }
          // 左右孩子都有
          let minNode = _findMinNode(node.rchild);
          node.val = minNode.val;
          node.rchild = _removeNode(node.rchild, minNode.val);
          return node;
        }
      } else {
        return null;
      }
    }

    function _findMinNode(node) {
      if (node) {
        while (node && node.lchild !== null) {
          node = node.lchild;
        }

        return node;
      }

      return null;
    }
  }
}

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
