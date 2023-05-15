/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const calcMid = (l, r) => {
    return l + Math.floor((r - l) / 2);
}

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (right >= left) {
        const mid = calcMid(left, right);
   
        if (nums[mid] == target) {
            return mid;  
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};