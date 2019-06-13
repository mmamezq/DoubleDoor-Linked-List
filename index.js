
// Node Constructor
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        }
    }

//Simple Linked List with Hardcoded Data

//Instantiate First Node
const head = new Node(0);
let counter = 0;
let value = 1;
let current = head;

//While loop to build link list chain with values 1 through 10
while(counter < 10){
    current.next = new Node (value);
    current = current.next;
    counter += 1;
    value += 1;
}

//Have pointer "current" point to head of linked list
current = head;

//Print
while(current !== null){
    console.log(current.data);
    current = current.next;
}
