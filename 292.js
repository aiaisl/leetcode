/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    if (n % 4 == 0) {
        return false;
    }
    else {
        return true;
    }
};
console.log(canWinNim(4));
console.log(canWinNim(5));
console.log(canWinNim(6));
console.log(canWinNim(7));
console.log(canWinNim(8));
