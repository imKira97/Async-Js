class MyStack{

    constructor(){
        this.top=0;
        this.items=[];
        

    }

    push(num){
        
        this.items[this.top]=num;
        this.top=this.top+1;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        else{
            this.top=this.top-1;
            return this.items.pop();

        }
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        else{
            return this.items[this.top-1];
        }
    }
    isEmpty(){
        return this.top==0;
    }
    print(){
        var str="";
        for(var i=0;i<this.items.length;i++){
            str+=this.items[i]+" ";
        }
        return str;
        
    }

}

const m1=new MyStack();
m1.push(10);
m1.push(20);
m1.push(30);
m1.push(40);
m1.push(50);
m1.push(60);
m1.pop();
m1.isEmpty();
m1.print();
