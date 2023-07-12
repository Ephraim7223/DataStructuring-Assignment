let anArray = [ ]

let base = anArray.indexOf(anArray)
console.log(base);

const size = anArray.length
console.log(size);

function isFull(){
    if(size-base===1){
        console.log('the array is full');
    }
}

isFull()

function isEmpty(){
    if(base===-1){
        console.log('the array is empty');
    }
}

isEmpty()

function pushToArray(base, number ){
   if(size-base===1){
    console.log('the array is full');
   }
   else{
     base = 1;
     return base
     console.log(base);
   }
}

pushToArray()

function popToArray(){
    if(size-base===1){
    console.log('array is empty can not push');
    }else{
        console.log('can be pushed to array');
    }
}

popToArray()

function clearArray(){
    if(size-base===1){
    console.log('array is empty can not clear');
    }else{
        console.log('can clear the array');
    }
}

clearArray()

function searchArray(){
    if(size-base===1){
    console.log('array is empty can not search');
    }else{
        console.log('can search from the array');
    }
}

searchArray()

function pickFromArray(){
    if(size-base===1){
    console.log('array is empty can not pick');
    }else{
        console.log('can pick from the array');
    }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop.";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty. No top element.";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

// Example usage:
const myStack = new Stack();
myStack.push("gun");
myStack.push("katana");
myStack.push("kunai");
console.log(myStack.peek()); // Output: "gun"
console.log(myStack.size()); // Output: 3
console.log(myStack.pop()); // Output: "gun"
console.log(myStack.pop()); // Output: "katana"
console.log(myStack.isEmpty()); // Output: false
myStack.clear();
console.log(myStack.isEmpty()); // Output: true

// Second
