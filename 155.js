/**
 * MinStack
 */
var MinStack = (function () {
    function MinStack() {
        this.stacks = [];
        this.min = null;
    }
    MinStack.prototype.push = function (x) {
        this.stacks[this.stacks.length] = x;
        if (this.min == null) {
            this.min = x;
        }
        else {
            if (this.min > x) {
                this.min = x;
            }
        }
    };
    MinStack.prototype.pop = function () {
        var top = this.top();
        this.stacks.length = this.stacks.length - 1;
        if (this.min == top) {
            if (this.stacks.length == 0) {
                this.min = null;
            }
            this.min = this.stacks[0];
            for (var i = 0; i < this.stacks.length; i++) {
                if (this.min > this.stacks[i]) {
                    this.min = this.stacks[i];
                }
            }
        }
    };
    MinStack.prototype.top = function () {
        return this.stacks[this.stacks.length - 1];
    };
    MinStack.prototype.getMin = function () {
        return this.min;
    };
    return MinStack;
})();
var minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
