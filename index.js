class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}
class Stack {
    constructor(){
        this.head = null
        this.length = 0
    }
    push(data){
        this.head = new Node(data, this.head)
        this.length++
    }
    pop(){
        if(this.length>0){
            let data = this.head.data
            this.head = this.head.next
            this.length--
            return data
        }
    }
    peek(){
        console.log(this.head.data)
        return this.head.data
    }
}
var newstack = new Stack()

newstack.push('hello')
newstack.push("world")
newstack.pop()
newstack.peek()
console.log(newstack)


class Queue {
    constructor(){
        this.front = null
        this.back = null
    }
    enqueue(element){
        var N = new Node(element, null)
        if (this.back === null){
            this.front = N
            this.back = N
        }else{
            this.back.next = N
            this.back = this.back.next
        }
    }
    dequeue(){
        if(this.front !== null){
            var first = this.front
            this.front = this.front.next
            return first.data
        }else{
            if(this.back !== null){
                this.back = null
            }
        }
    }
    peek(){
        return this.front.data
    }
}
var newQueue = new Queue()

newQueue.enqueue(20)
newQueue.enqueue(30)
newQueue.enqueue(40)
newQueue.enqueue(50)
newQueue.dequeue()
newQueue.peek()
var peek = newQueue.peek()
console.log(peek)
console.log(newQueue)
