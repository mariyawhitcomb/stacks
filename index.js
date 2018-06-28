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
