/**
 * MinStack
 */
var MinStack = (function () {
    function MinStack() {
        this.stacks = [];
    }
    MinStack.prototype.push = function (x) {
        this.stacks[this.stacks.length] = x;
    };
    MinStack.prototype.pop = function () {
        this.stacks.length = this.stacks.length - 1;
    };
    MinStack.prototype.top = function () {
        return this.stacks[this.stacks.length - 1];
    };
    MinStack.prototype.getMin = function () {
        if (this.stacks.length == 0) {
            return null;
        }
        var min = this.stacks[0];
        for (var i = 0; i < this.stacks.length; i++) {
            if (min > this.stacks[i]) {
                min = this.stacks[i];
            }
        }
        return min;
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
