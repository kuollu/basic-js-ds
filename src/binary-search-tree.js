const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootProp = null
  constructor() {
    this.rootProp = null
  }

  root() {
    return this.rootProp
  }

  add(data) {
    let node = new Node(data)
    let currentNode = null
    let prevNode = null
    if (this.rootProp == null) {
      this.rootProp = node
    }
    else {
      currentNode = this.rootProp
      while (currentNode !== null) {
        if (currentNode.data === data) {
          return
        }
        prevNode = currentNode
        if (data > currentNode.data) {
          currentNode = currentNode.right
        }
        else {
          currentNode = currentNode.left
        }
      }
      if (data > prevNode.data) {
        prevNode.right = node
      }
      else {
        prevNode.left = node
      }
    }
  }


  has(data) {
    return this.find(data) != null
  }

  find(data) {
    let currentNode = this.rootProp
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode
      }
      else if (data > currentNode.data) {
        currentNode = currentNode.right
      }
      else currentNode = currentNode.left
    }
    return null
  }

  remove(data) {
    this.root = removeData(this.root, data)
    function removeData(currentNode, data) {
      if (!currentNode) {
        return null
      }
      if (data < currentNode.data) {
        currentNode.left = removeData(currentNode.left, data)
        return currentNode
      }
      else if (currentNode.data < data) {
        currentNode.right = removeData(currentNode.right, data)
        return currentNode;
      }
      else {
        if (currentNode.left && !currentNode.right) {
          return null
        }
        if (currentNode.left == null) {
          currentNode = currentNode.right
          return currentNode
        }
        if (currentNode.right == null) {
          currentNode = currentNode.left
        }
        let minFromRight = currentNode.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        currentNode.data = minFromRight.data
        currentNode.right = removeData(currentNode.right, minFromRight.data)
        return currentNode
      }
    }

  }

  min() {
    let currentNode = this.rootProp
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.rootProp
    while (currentNode.right !== null) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}

let tree = new BinarySearchTree()
tree.root()
tree.add(2)

module.exports = {
  BinarySearchTree
};