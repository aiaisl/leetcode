/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var result = 0;
    var k1 = [];
    var l = s.length;
    for (var i = 0; i < l; i++) {
    	if(k1.indexOf(s[i]) >= 0){
            k1.splice(0, k1.indexOf(s[i]) + 1);
        }
        k1.push(s[i]);
        if(k1.length > result){
            result = k1.length;
        }
    }
    return result;
};