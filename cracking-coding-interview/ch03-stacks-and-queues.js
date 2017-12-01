/************************************************************************
  
  3.1: THREE IN ONE
  Describe how you could use a single array to implement three stacks.

  Hints: #2, #12, #38, #58

************************************************************************/



/************************************************************************
  
  3.2: STACK MIN
  How would you design a stack which, in addition to push and pop, has a
  function min which returns the minimum element? Push, pop and min
  should all operate in 0(1) time.

  Hints: #27, #59, #78

************************************************************************/

class StackMin {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  
  push(val) {
    let valueToAdd = val;
    
    if (!this.min) {
      this.min = val;
    } else if (val < this.min) {
      valueToAdd = 2 * val - this.min;
      this.min = val;
    }
    
    this.stack[this.stack.length] = valueToAdd;
  }

  pop() {
    const removed = this.stack[this.stack.length - 1];
    this.stack.length--;

    if (!this.stack.length) {
      this.min = null;
    } else if (removed < this.min) {
      this.min = 2 * this.min - removed;
    }
    
    return removed;
  }
}

const stackMinTest = new StackMin();
console.log('ADDING VALUES');
console.log(`expected ${stackMinTest.min} to equal null:`, stackMinTest.min === null);
stackMinTest.push(3);
console.log(`expected ${stackMinTest.min} to equal 3:`, stackMinTest.min === 3);
stackMinTest.push(5);
console.log(`expected ${stackMinTest.min} to equal 3:`, stackMinTest.min === 3);
stackMinTest.push(2);
console.log(`expected ${stackMinTest.min} to equal 2:`, stackMinTest.min === 2);
stackMinTest.push(1);
console.log(`expected ${stackMinTest.min} to equal 1:`, stackMinTest.min === 1);
stackMinTest.push(1);
console.log(`expected ${stackMinTest.min} to equal 1:`, stackMinTest.min === 1);
stackMinTest.push(-1);
console.log(`expected ${stackMinTest.min} to equal -1:`, stackMinTest.min === -1);

console.log('\nREMOVING VALUES');
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal 1:`, stackMinTest.min === 1);
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal 1:`, stackMinTest.min === 1);
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal 2:`, stackMinTest.min === 2);
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal 3:`, stackMinTest.min === 3);
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal 3:`, stackMinTest.min === 3);
stackMinTest.pop();
console.log(`expected ${stackMinTest.min} to equal null:`, stackMinTest.min === null);

/************************************************************************
  
  3.3: STACK OF PLATES
  Imagine a (literal) stack of plates. If the stack gets too high, it
  might topple. Therefore, in real life, we would likely start a new 
  stack when the previous stack exceeds some threshold. Implement a data
  structure SetOfStacks that mimics this. SetO-fStacks should be composed
  of several stacks and should create a new stack once the previous one
  exceeds capacity. SetOfStacks. push() and SetOfStacks. pop() should 
  behave identically to a single stack (that is, pop () should return 
  the same values as it would if there were just a single stack).

  FOLLOW UP
  Implement a function popAt ( int index) which performs a pop operation
  on a specific sub-stack.

  Hints: #64, #81

************************************************************************/

class SetOfStacks {
  constructor(max) {
    this.stack = [[]];
    this.currentStackIndex = 0;
    this.threshold = max;
  }
  
  push(value) {
    const currentStack = this.stack[this.currentStackIndex];
    
    if (currentStack.length < this.threshold) {
      currentStack.push(value);
    } else {
      this.stack.push([value]);
      this.currentStackIndex++;
    }
  }
  
  pop() {
    const currentStack = this.stack[this.currentStackIndex];
    
    if (this.currentStackIndex > 0 || currentStack.length) {
      const removed = currentStack.pop();
    
      if (!currentStack.length && this.currentStackIndex > 0) {
        this.stack.pop();
        this.currentStackIndex--;
      }
      
      return removed;
    }
  }
}

const setOfStacksTest = new SetOfStacks(3);
console.log('ADDING VALUES');
setOfStacksTest.push(1);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected ${setOfStacksTest.stack[0][0]} to equal 1:`, setOfStacksTest.stack[0][0] === 1);
setOfStacksTest.push(2);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected ${setOfStacksTest.stack[0][1]} to equal 2:`, setOfStacksTest.stack[0][1] === 2);
setOfStacksTest.push(3);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected ${setOfStacksTest.stack[0][2]} to equal 3:`, setOfStacksTest.stack[0][2] === 3);
setOfStacksTest.push(4);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected ${setOfStacksTest.stack[1][0]} to equal 4:`, setOfStacksTest.stack[1][0] === 4);
setOfStacksTest.push(5);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected ${setOfStacksTest.stack[1][1]} to equal 5:`, setOfStacksTest.stack[1][1] === 5);
setOfStacksTest.push(6);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected ${setOfStacksTest.stack[1][2]} to equal 6:`, setOfStacksTest.stack[1][2] === 6);
setOfStacksTest.push(7);
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 3:`, setOfStacksTest.stack.length === 3);
console.log(`expected ${setOfStacksTest.stack[2][0]} to equal 7:`, setOfStacksTest.stack[2][0] === 7);

console.log('\nREMOVING VALUES');
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected last stack length to equal 3:`, setOfStacksTest.stack[1].length === 3);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected last stack length to equal 2:`, setOfStacksTest.stack[1].length === 2);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 2:`, setOfStacksTest.stack.length === 2);
console.log(`expected last stack length to equal 1:`, setOfStacksTest.stack[1].length === 1);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected last stack length to equal 3:`, setOfStacksTest.stack[0].length === 3);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected last stack length to equal 2:`, setOfStacksTest.stack[0].length === 2);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected last stack length to equal 1:`, setOfStacksTest.stack[0].length === 1);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected last stack length to equal 0:`, setOfStacksTest.stack[0].length === 0);
setOfStacksTest.pop();
console.log(`expected number of stacks ${setOfStacksTest.stack.length} to equal 1:`, setOfStacksTest.stack.length === 1);
console.log(`expected last stack length to equal 0:`, setOfStacksTest.stack[0].length === 0);

/************************************************************************
  
  3.4: QUEUE VIA STACKS
  Implement a MyQueue class which implements a queue using two stacks.

  Hints: #98, #114

************************************************************************/

class TwoStackQueue {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }
  
  enqueue(value) {
    this.inbox.push(value);
  }
  
  dequeue() {
    if (!this.outbox.length) {
      if (!this.inbox.length) return null;
      
      while (this.inbox.length) {
        this.outbox.push(this.inbox.pop());
      }      
    }
    
    return this.outbox.pop();
  }
}

const queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

const removed1 = queue.dequeue();
console.log(`expected ${removed1} to equal 1:`, removed1 === 1);

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

const removed2 = queue.dequeue();
console.log(`expected ${removed2} to equal 2:`, removed2 === 2);
const removed3 = queue.dequeue();
console.log(`expected ${removed3} to equal 3:`, removed3 === 3);
const removed4 = queue.dequeue();
console.log(`expected ${removed4} to equal 4:`, removed4 === 4);
const removed5 = queue.dequeue();
console.log(`expected ${removed5} to equal 5:`, removed5 === 5);
const removed6 = queue.dequeue();
console.log(`expected ${removed6} to equal 6:`, removed6 === 6);

queue.enqueue(7);
const removed7 = queue.dequeue();
console.log(`expected ${removed7} to equal 7:`, removed7 === 7);

/************************************************************************
  
  3.5: SORT STACK
  Write a program to sort a stack such that the smallest items are on
  the top. You can use an additional temporary stack, but you may not
  copy the elements into any other data structure (such as an array).
  The stack supports the following operations: push, pop, peek, and is
  empty.

  Hints: #15, #32, #43

************************************************************************/



/************************************************************************
  
  3.6: ANIMAL SHELTER
  An animal shelter, which holds only dogs and cats, operates on a
  strictly "first in, first out" basis. People must adopt either the
  "oldest" (based on arrival time) of all animals at the shelter, or 
  they can select whether they would prefer a dog or a cat (and will 
  receive the oldest animal of that type). They cannot select which 
  specific animal they would like. Create the data structures t maintain
  this system and implement operations such as enqueue, dequeueAny,
  dequeueDog, and dequeueCat. You may use the built-in Linked list data
  structure.

  Hints: #22, #56, #63

************************************************************************/

