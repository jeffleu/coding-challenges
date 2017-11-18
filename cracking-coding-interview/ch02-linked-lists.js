/************************************************************************
  
  LinkedListNode class and helper functions for tests

************************************************************************/

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  
  addToTail(val) {
    !this.next ? this.next = new LinkedListNode(val) : this.next.addToTail(val);
  }
}

const printList = (head) => {
  let currentNode = head;
  let result = '';
  
  while(currentNode) {
    result += `${currentNode.val} -> `;
    currentNode = currentNode.next;
  }
  
  return result + `null`;
};

/************************************************************************
  
  2.1: REMOVE DUPLICATES
  Write code to remove duplicates from an unsorted linked list.

  FOLLOW UP
  How would you solve this problem if a temporary buffer is not allowed?

  Hints: #9, #40

************************************************************************/

const removeDuplicates = (head) => {
  let currentNode = head;
  let nextNode = currentNode.next;
  
  while(nextNode) {
    if (currentNode.val !== nextNode.val) {
      currentNode.next = nextNode;
      nextNode = nextNode.next;
      currentNode = currentNode.next;
    } else {
      nextNode = nextNode.next;
    }
  }
  
  currentNode.next = nextNode;
  return head;
};

const removeDuplicatesExpected = '1 -> 2 -> 3 -> 4 -> null';

// 1 -> 2 -> 2 -> 3 -> 4 -> null
const removeDuplicatesList1 = new LinkedListNode(1);
removeDuplicatesList1.addToTail(2);
removeDuplicatesList1.addToTail(2);
removeDuplicatesList1.addToTail(3);
removeDuplicatesList1.addToTail(4);
const removeDuplicatesAnswer1 = printList(removeDuplicates(removeDuplicatesList1));
removeDuplicatesAnswer1
console.log(`expected ${removeDuplicatesAnswer1} to equal ${removeDuplicatesExpected}:`, removeDuplicatesAnswer1 === removeDuplicatesExpected);

// 1 -> 2 -> 3 -> 4 -> 4 -> null
const removeDuplicatesList2 = new LinkedListNode(1);
removeDuplicatesList2.addToTail(2);
removeDuplicatesList2.addToTail(3);
removeDuplicatesList2.addToTail(4);
removeDuplicatesList2.addToTail(4);
const removeDuplicatesAnswer2 = printList(removeDuplicates(removeDuplicatesList2));
console.log(`expected ${removeDuplicatesAnswer2} to equal ${removeDuplicatesExpected}:`, removeDuplicatesAnswer2 === removeDuplicatesExpected);

// 1 -> 1 -> 2 -> 3 -> 4 -> null
const removeDuplicatesList3 = new LinkedListNode(1);
removeDuplicatesList3.addToTail(1);
removeDuplicatesList3.addToTail(2);
removeDuplicatesList3.addToTail(3);
removeDuplicatesList3.addToTail(4);
const removeDuplicatesAnswer3 = printList(removeDuplicates(removeDuplicatesList3));
console.log(`expected ${removeDuplicatesAnswer3} to equal ${removeDuplicatesExpected}:`, removeDuplicatesAnswer3 === removeDuplicatesExpected);

/************************************************************************
  
  2.2: RETURN Kth TO LAST
  Implement an algorithm to find the kth to last element of a singly 
  linked list.

  Hints: #8, #25, #41, #67, #126

************************************************************************/

const kthToLast = (head, k) => {
  let currentNode = head;
  let nextNode = head;
  
  while(k && nextNode) {
    nextNode = nextNode.next;
    k--;
  }
  
  while(nextNode) {
    currentNode = currentNode.next;
    nextNode = nextNode.next;
  }
  
  return !k ? currentNode.val : null;
};

const kthToLastList = new LinkedListNode(5);
kthToLastList.addToTail(10);
kthToLastList.addToTail(15);
kthToLastList.addToTail(20);
kthToLastList.addToTail(25);

const kthToLastAnswer1 = kthToLast(kthToLastList, 1);
const kthToLastAnswer2 = kthToLast(kthToLastList, 2);
const kthToLastAnswer3 = kthToLast(kthToLastList, 3);
const kthToLastAnswer4 = kthToLast(kthToLastList, 4);
const kthToLastAnswer5 = kthToLast(kthToLastList, 10);
console.log(`expected ${kthToLastAnswer1} to equal 25:`, kthToLastAnswer1 === 25);
console.log(`expected ${kthToLastAnswer2} to equal 20:`, kthToLastAnswer2 === 20);
console.log(`expected ${kthToLastAnswer3} to equal 15:`, kthToLastAnswer3 === 15);
console.log(`expected ${kthToLastAnswer4} to equal 10:`, kthToLastAnswer4 === 10);
console.log(`expected ${kthToLastAnswer5} to equal null:`, kthToLastAnswer5 === null);

/************************************************************************
  
  2.3: DELETE MIDDLE NODE
  Implement an algorithm to delete a node in the middle (i.e., any node 
  but the first and last node, not necessarily the exact middle) of a 
  singly linked list, given only access to that node.

  EXAMPLE
  Input: The node c from the linked list a->b->c->d->e->f
  Result: Nothing is returned, but the new linked list looks like a->b->d->e->f

  Hints: #72

************************************************************************/

const deleteMiddleNode = (node) => {
  let nextNode = node.next;
  node.val = nextNode ? nextNode.val : null;
  node.next = nextNode ? nextNode.next : null;
};

const deleteMiddleNodeList = new LinkedListNode('a');
deleteMiddleNodeList.addToTail('b');
deleteMiddleNodeList.addToTail('c');
deleteMiddleNodeList.addToTail('d');
deleteMiddleNodeList.addToTail('e');
deleteMiddleNodeList.addToTail('f');

const cNode = deleteMiddleNodeList.next.next;
deleteMiddleNode(cNode);

const deleteMiddleNodeActual = printList(deleteMiddleNodeList);
const deleteMiddleNodeExpected = 'a -> b -> d -> e -> f -> null';
console.log(`expected ${deleteMiddleNodeActual} to equal ${deleteMiddleNodeExpected}:`, deleteMiddleNodeActual === deleteMiddleNodeExpected);

/************************************************************************
  
  2.4: PARTITION
  Write code to partition a linked list around a value x, such that all
  nodes less than x come before all nodes greater than or equal to x. If 
  x is contained within the list, the values of x only need to be after 
  the elements less than x (see below). The partition element x can 
  appear anywhere in the "right partition"; it does not need to appear 
  between the left and right partitions.

  EXAMPLE
  Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
  Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

  Hints: #3, #24

************************************************************************/



/************************************************************************
  
  2.5: SUM LIST
  You have two numbers represented by a linked list, where each node
  contains a single digit. The digits are stored in reverse order, such
  that the 1 's digit is at the head of the list. Write a function that 
  adds the two numbers and returns the sum as a linked list.

  EXAMPLE
  Input: (7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
  Output: 2 -> 1 -> 9. That is, 912.

  FOLLOW UP
  Suppose the digits are stored in forward order. Repeat the above 
  problem.

  EXAMPLE
  Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
  Output: 9 - > 1 -> 2. That is, 912.

  Hints: #7, #30, #71, #95, #109

************************************************************************/

const sumListReverse = (head) => {
  let num1 = '';
  let num2 = '';
  let currentNode = head;
  
  while(currentNode) {
    if (num1.length < 3) {
      num1 = `${currentNode.val}` + num1;
    } else {
      num2 = `${currentNode.val}` + num2;
    }
    currentNode = currentNode.next;
  }
  
  return parseInt(num1) + parseInt(num2);
};

const sumList = (head) => {
  let num1 = '';
  let num2 = '';
  let currentNode = head;
  
  while(currentNode) {
    if (num1.length < 3) {
      num1 += currentNode.val;
    } else {
      num2 += currentNode.val;
    }
    currentNode = currentNode.next;
  }
  
  return parseInt(num1) + parseInt(num2);
};

const sumListReverseList = new LinkedListNode(7);
sumListReverseList.addToTail(1);
sumListReverseList.addToTail(6);
sumListReverseList.addToTail(5);
sumListReverseList.addToTail(9);
sumListReverseList.addToTail(2);

const sumListList = new LinkedListNode(6);
sumListList.addToTail(1);
sumListList.addToTail(7);
sumListList.addToTail(2);
sumListList.addToTail(9);
sumListList.addToTail(5);

const sumListAnswer1 = sumListReverse(sumListReverseList);
const sumListAnswer2 = sumList(sumListList);
console.log(`expected ${sumListAnswer1} to equal 912:`, sumListAnswer1 === 912);
console.log(`expected ${sumListAnswer2} to equal 912:`, sumListAnswer2 === 912);

/************************************************************************
  
  2.6: PALINDROME
  Implement a function to check if a linked list is a palindrome.

  Hints: #5, #13, #29, #61, #101

************************************************************************/



/************************************************************************
  
  2.7: INTERSECTION
  Given two (singly) linked lists, determine if the two lists intersect.
  Return the intersecting node. Note that the intersection is defined 
  based on reference, not value. That is, if the kth node of the first
  linked list is the exact same node (by reference) as the jth node of
  the second linked list, then they are intersecting.

  Hints: #20, #45, #55, #65, #76, #93, #111, #120, #129

************************************************************************/



/************************************************************************
  
  2.8: LOOP DETECTION
  Given a circular linked list, implement an algorithm that returns the
  node at the beginning of the loop.

  DEFINITION
  Circular linked list: A (corrupt) linked list in which a node's next
  pointer points to an earlier node, so as to make a loop in the linked
  list.

  EXAMPLE
  Input: A -> B -> C - > D -> E -> C [the same C as earlier]
  Output: C

  Hints: #50, #69, #83, #90

************************************************************************/

