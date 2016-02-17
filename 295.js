var MedianFinder = (function () {
    function MedianFinder() {
        this.nums = [];
    }
    MedianFinder.prototype.addNum = function (num) {
        if (this.nums.length == 0) {
            this.nums.push(num);
        }
        else {
            var nl = this.nums.length;
            for (var i = 0; i < nl; i++) {
                if (this.nums[i] > num) {
                    this.nums.splice(i, 0, num);
                    break;
                }
                if (i == nl - 1) {
                    this.nums.push(num);
                }
            }
        }
    };
    MedianFinder.prototype.findMedian = function () {
        if (this.nums.length == 0) {
            return 0;
        }
        if (this.nums.length % 2 == 0) {
            return (this.nums[this.nums.length / 2] + this.nums[this.nums.length / 2 - 1]) / 2;
        }
        else {
            return this.nums[(this.nums.length - 1) / 2];
        }
    };
    return MedianFinder;
})();
var mf = new MedianFinder();
console.log(mf.findMedian());
mf.addNum(1);
mf.addNum(15);
console.log(mf.findMedian());
mf.addNum(2);
mf.addNum(3);
mf.addNum(4);
console.log(mf.findMedian());
