/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var result = [];
    var numsLength = nums.length;
    var sNums = [];
    var lNums = [];
    for (var i = 0; i < numsLength; i++) {
        sNums.push([nums[i], i]);
    }
    sNums.sort(function (a, b) {
        return a[0] - b[0];
    });
    var limit = 0;
    var sum = 0;
    var mm;
    for (mm = 0; mm < numsLength; mm++) {
        var d = true;
        var j = 0;
        var low = 0, high = sNums.length - 1;
        while (d && j < 100) {
            var mid = Math.floor((low + high) / 2);
            sum = nums[mm] + sNums[mid][0];
            if (sNums[mid][1] != mm) {
                if (sum > target) {
                    high = mid - 1;
                }
                else if (sum < target) {
                    low = mid + 1;
                }
                else {
                    if (mm > sNums[mid][1]) {
                        result.push(sNums[mid][1] + 1, mm + 1);
                    }
                    else {
                        result.push(mm + 1, sNums[mid][1] + 1);
                    }
                    d = false;
                    mm = numsLength;
                    break;
                }
                if (low > high) {
                    d = false;
                    break;
                }
            }
            j++;
        }
    }
    return result;
};
