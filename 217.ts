/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums: Array<number>) {
    var origNums = nums.concat([]);
    var numsSort = nums.sort();
    for(var i = 0; i < origNums.length; i++) {
        if(i < origNums.length-1 && numsSort[i] == numsSort[i + 1]) {
            return true;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([100, 10, 1, 10]));
console.log(containsNearbyDuplicate([100, 10, 1, 120]));
console.log(containsNearbyDuplicate([100, 10, 1, 10]));
console.log(containsNearbyDuplicate([]));
console.log(containsNearbyDuplicate([-1, -1]));