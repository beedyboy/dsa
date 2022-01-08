class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) { //to check if the index is within the first half of the list
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index - 1; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index, value) {
      let temp = this.get(index);
      if(temp) {
          temp.value = value;
          return true;
      }
      return false;
  }
  insert(index, value) {
      if(index === 0) return this.unshift(value);
      if(index === this.length) return this.push(value);
      if(index < 0 || index > this.length) return false;

      let newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.next = after;
    after.prev = newNode;
    this.length++
    return true;

  }
  remove(index) {
      if(index === 0) return this.shift();
    if(index === this.length) return this.pop();
      if(index < 0 || index > this.length) return false;

    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
    
  }
}

let list = new DoublyLinkedList(0);
list.push(1);
list.push(2);
console.log(list);
console.log("----------------------");
console.log(list.pop());
console.log(list.pop());
console.log(list.unshift(7));
console.log(list.pop());
