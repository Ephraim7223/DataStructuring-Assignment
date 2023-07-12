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
     base = base + 1;
     return base
     console.log(base);
   }
}

pushToArray()

function popFromArray(){
    if(size-base===1){
    console.log('array is empty can not pop');
    }else{
        console.log('can be poped into array');
        base  = base - 1;
        return base
        console.log(base);
    }
}

popFromArray()

function clearArray(){
    if(size-base === 1){
    console.log('array is empty can not clear');
    }else{
    console.log('the array has been cleared');
    size = size - size;
    return size
    console.log(size);
    }
}

clearArray()

function searchArray(){
    if(size-base===1){
    console.log('array is empty can not search');
    }else{
        console.log('can search from the array');
        size = size - size[whatYouWantToSearch];
        return size;
    }
}

searchArray()

function pickFromArray(){
    if(size-base===1){
    console.log('array is empty can not pick');
    }else{
        console.log('can pick from the array');
        
        size = size - size[whatYouWantToRemove];
        return size
    }
}

//quick check
stack = [ ]
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
