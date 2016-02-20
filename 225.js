/**
 * Stack
 */
var Stack = (function () {
    function Stack() {
        this.stacks = [];
        this.stacks = [];
    }
    Stack.prototype.push = function (x) {
        this.stacks[this.stacks.length] = x;
    };
    Stack.prototype.pop = function () {
        if (this.stacks.length - 1 >= 0) {
            this.stacks.length = this.stacks.length - 1;
        }
    };
    Stack.prototype.top = function () {
        return this.stacks[this.stacks.length - 1];
    };
    Stack.prototype.empty = function () {
        console.log(this.stacks);
        if (this.stacks.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stack;
})();
var s = new Stack();
console.log(s.empty());
s.push(1);
s.pop();
console.log(s.empty());
