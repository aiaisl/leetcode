/**
 * MinStack
 */
class MinStack {
    private stacks: Array<number>;
    constructor() {
        this.stacks = [];
    }
    push(x: number){
        this.stacks[this.stacks.length] = x; 
    }
    pop(){
        this.stacks.length = this.stacks.length - 1;
    }
    top(): number{
        return this.stacks[this.stacks.length - 1]; 
    }
    getMin(): number{
        if(this.stacks.length == 0 ) {
            return null;
        }
        var min = this.stacks[0];
        for(var i = 0; i < this.stacks.length; i++) {
            if(min > this.stacks[i]) {
                min = this.stacks[i];
            }
        }
        return min;
    }
}
var minStack = new MinStack();
minStack.push(2)
minStack.push(0)
minStack.push(3)
minStack.push(0)
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());