/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var origNums = nums.concat([]);
    var numsSort = nums.sort();
    for (var i = 0; i < origNums.length; i++) {
        if (i < origNums.length - 1 && numsSort[i] == numsSort[i + 1]) {
            var firstNum = origNums.indexOf(origNums[i]);
            if (origNums.indexOf(origNums[i], firstNum + 1) - firstNum <= k) {
                return true;
            }
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([100, 10, 1, 10], 10));
console.log(containsNearbyDuplicate([100, 10, 1, 120], 10));
console.log(containsNearbyDuplicate([100, 10, 1, 10], 0));
console.log(containsNearbyDuplicate([], 0));
console.log(containsNearbyDuplicate([-1, -1], 1));
