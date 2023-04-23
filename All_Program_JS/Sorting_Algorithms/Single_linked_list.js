//(1)#### Start Insert Nodes ####/

//**** start Node create  ****/
/*class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  //## End Node create  ##/
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
console.log(list);
//(1)#### End Insert Nodes ####/ */

/* //(2)#### Start TraverSing Nodes ####/
class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  //## Start Traversing ##/
  treversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  //## End Traversing ##/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.treversing();
//(2)#### End TraverSing Nodes ####/ */

//(3)#### Start Remove or Delete Node ####/
/*class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  treversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  //## start Remove or Delete Node ##/
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log(lead);
    }
  }
  //## End Remove or Delete Node ##/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.treversing();
list.deleteNode(2);
console.log(list);
//(3)#### End Remove or Delete Node ####/ */

/* //(4)#### Start Insert Node at nay Position in Linked List ####/
class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  //## start Insert Node ##/
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
  }
  //## End Insert Node ##/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.insertNode(2, 150);
console.log(list);
//(4)#### End Insert Node at nay Position in Linked List ####/ */

//(5)#### start Search Node in Linked List ####/
class Node {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  appendNode(NodeData) {
    let newNode = {
      value: NodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  treversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.length) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  //## start fun.. Search Node ##/
  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
    console.log(result);
  }
  //## End fun. Search Node ##/
}
let list = new Node(100);
list.appendNode(200);
list.appendNode(300);
list.treversing();
list.searchNode(200);
//(5)#### End Search Node in Linked List ####/
