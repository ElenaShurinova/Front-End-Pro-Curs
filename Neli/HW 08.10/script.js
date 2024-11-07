class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class SpecialStack extends Stack {
    constructor() {
      super();
      this.minStack = new Stack();
    }
  
    push(element) {
      super.push(element);
      if (this.minStack.isEmpty() || element <= this.minStack.peek()) {
        this.minStack.push(element);
      }
    }
  
    pop() {
      const poppedElement = super.pop();
      if (poppedElement === this.minStack.peek()) {
        this.minStack.pop();
      }
      return poppedElement;
    }
  
    getMin() {
      if (this.minStack.isEmpty()) {
        return "Stack is empty";
      }
      return this.minStack.peek();
    }
  }
  
//////////////////////////////////////////////////////////
  let specialStack = new SpecialStack();
  specialStack.push(10);
  specialStack.push(20);
  specialStack.push(5);
  specialStack.push(30);
  
  console.log(specialStack.getMin()); // 5
  specialStack.pop();
  specialStack.pop();
  console.log(specialStack.getMin()); // 10
  

  
  class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  class SpecialQueue extends Queue {
    constructor() {
      super();
      this.maxQueue = new Queue();
    }
  
    enqueue(element) {
      super.enqueue(element);
      while (!this.maxQueue.isEmpty() && this.maxQueue.items[this.maxQueue.items.length - 1] < element) {
        this.maxQueue.dequeue();
      }
      this.maxQueue.enqueue(element);
    }
  
    dequeue() {
      const dequeuedElement = super.dequeue();
      if (dequeuedElement === this.maxQueue.front()) {
        this.maxQueue.dequeue();
      }
      return dequeuedElement;
    }
  
    getMax() {
      if (this.maxQueue.isEmpty()) {
        return "Queue is empty";
      }
      return this.maxQueue.front();
    }
  }
  
//////////////////////////////////////////////////////////////////////////
  let specialQueue = new SpecialQueue();
  specialQueue.enqueue(10);
  specialQueue.enqueue(20);
  specialQueue.enqueue(5);
  specialQueue.enqueue(30);
  
  console.log(specialQueue.getMax()); // 30
  specialQueue.dequeue();
  specialQueue.dequeue();
  console.log(specialQueue.getMax()); // 30
  

  
  class DynamicStack {
    constructor() {
      this.items = [];
      this.capacity = 1;
    }
  
    push(element) {
      if (this.items.length === this.capacity) {
        this.capacity *= 2;
        this.items.length = this.capacity;
      }
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Пример использования
  let dynamicStack = new DynamicStack();
  dynamicStack.push(10);
  dynamicStack.push(20);
  dynamicStack.push(30);
  dynamicStack.push(40);
  
  console.log(dynamicStack.peek()); // 40
  dynamicStack.pop();
  console.log(dynamicStack.peek()); // 30
