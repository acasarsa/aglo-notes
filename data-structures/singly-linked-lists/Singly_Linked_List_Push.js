// piece of data - val
// reference to next node - next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
    // this creates a sll head - tail - length
  }
  
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
console.log(list)

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")