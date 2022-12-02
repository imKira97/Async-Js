class Queue{

    constructor(){
        this.queue = [];
        this.front=0;
        this.rear=0;
    }

    push(element){
        this.queue.push(element);
        this.rear++;
    }
    pop(){

        if(this.isEmpty()){
            return "Queue is Empty";
        }
        else{

        
        const value=this.queue[this.front];
        this.queue[this.front]=undefined;
        this.front++;
        return value;
    }

    }

    isEmpty(){
        return  this.rear-this.front==0;
    }

    printQueue(){
        if(this.isEmpty()){
            return "Queue is Empty";
        }
        else{
            var str=" Queue is ";
            for(let i=this.front;i<this.rear;i++){
                str=str+this.queue[i];
            }
            return str;

        }
        
    }
}

const q1=new Queue();
q1.push(10);
q1.push(20);
q1.push(30);
q1.push(40);
q1.push(50);
q1.push(60);

console.log('queue is '+q1.printQueue());
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.pop());
console.log(q1.isEmpty());
console.log(q1.printQueue());

