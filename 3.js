// Tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BianarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // dfs
  preOrder(root) {
    if (root) {
      // print root
      console.log(root.value);
      // work for left sub tree
      this.preOrder(root.left);
      // work for right sub tree
      this.preOrder(root.right);
    }
  }
}

const bst = new BianarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// bst.preOrder(bst.root);
bst.preOrder(bst.root);
