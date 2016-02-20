/**
 * MinStack
 */
class MinStack {
    private stacks: Array<number>;
    private min:number;
    constructor() {
        this.stacks = [];
        this.min = null;
    }
    push(x: number){
        this.stacks[this.stacks.length] = x;
        if(this.min == null) {
            this.min = x;
        } else {
            if(this.min > x) {
                this.min = x;
            }
        }
    }
    pop(){
        var top = this.top();
        this.stacks.length = this.stacks.length - 1;
        if(this.min == top) {
            if(this.stacks.length == 0 ) {
                this.min = null;
            }
            this.min = this.stacks[0];
            for(var i = 0; i < this.stacks.length; i++) {
                if(this.min > this.stacks[i]) {
                    this.min = this.stacks[i];
                }
            }
        }
    }
    top(): number{
        return this.stacks[this.stacks.length - 1]; 
    }
    getMin(): number{
        return this.min;
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