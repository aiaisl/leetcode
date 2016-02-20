/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var numsClone = nums.concat([]);
    for (var i = nums.length - 1; i >= 0; i--) {
        if ((i + k) % nums.length < nums.length) {
            nums[(i + k) % nums.length] = numsClone[i];
        }
        else {
            nums[(i + k) % nums.length - nums.length] = numsClone[i];
        }
    }
    console.log(nums);
};
rotate([-1], 10);
