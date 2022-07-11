class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = node => {
      // if value is less than current node, go left
      if(value < node.value) {
        // if left is null, insert
        if(!node.left) {
          node.left = newNode;
        } 
        // if left is not null, keep searching
        else {
          searchTree(node.left);
        }
      }

      // if value is greater than current node, go right
      else if(value > node.value) {
        // if right is null, insert
        if(!node.right) {
          node.right = newNode;
        } 
        // if right is not null, keep searching
        else {
          searchTree(node.right);
        }
      }
    }

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // Continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    // Continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while(currentNode) {
      // found the value
      if(value === currentNode.value) 
        return true;
      // traverse left
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      }
      // traverse right
      else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  // Depth First Search
  dfsIterative() {
    if(!root) return [];

    const result = [];
    const stack = [root];
  
    while(stack.length > 0){
      const current = stack.pop();
      result.push(current.value);
  
      if(current.right) {
        stack.push(current.right);
      }
  
      if(current.left) {
        stack.push(current.left);
      }
    }
  
    return result;
  }

  // In-order (left, root, right)
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if(node.left) traverse(node.left);
      
      result.push(node.value);

      if(node.right) traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  // Pre-order (root, left, right)
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);

      if(node.left) traverse(node.left);
      
      if(node.right) traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  // Post-order (left, right, root)
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if(node.left) traverse(node.left);

      if(node.right) traverse(node.right);
      
      result.push(node.value);      
    }

    traverse(this.root);

    return result;
  }

  // Breadth First Search
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);
    
      if(currentNode.left) {
        queue.push(currentNode.left);
      }

      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return result;
  }

  invertTree() {
      const traverse = (node) => {
      if(!node) return;

      const temp = node.left;
      node.left = node.right;
      node.right = temp;

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root)
  }
}

const bst = new BinarySearchTree(15);
bst.insert(3);
bst.insert(2);
bst.insert(12);
bst.insert(36);
bst.insert(28);
bst.insert(39);


//      15
//    /    \
//   3      36 
//  / \     / \
// 2   12  28  39 