/**
 * Stack
 */
class Stack {
    private stacks = [];
    constructor() {
        this.stacks = [];
    }
    push(x: number) {
        this.stacks[this.stacks.length] = x;
    }
    pop() {
        if(this.stacks.length - 1 >= 0) {
        this.stacks.length = this.stacks.length - 1;
        }
    }
    top() {
        return this.stacks[this.stacks.length - 1]; 
    }
    empty() {
        console.log(this.stacks);
        if(this.stacks.length ==0) {
            return true;
        } else {
            return false;
        }
    }
}
var s = new Stack();
console.log(s.empty());
s.push(1);
s.pop();
console.log(s.empty());
