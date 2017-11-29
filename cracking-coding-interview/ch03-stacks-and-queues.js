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



/************************************************************************
  
  3.4: QUEUE VIA STACKS
  Implement a MyQueue class which implements a queue using two stacks.

  Hints: #98, #114

************************************************************************/



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

