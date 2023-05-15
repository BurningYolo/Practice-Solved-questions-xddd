/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let arr = []
    let set = new Set(nums)
    set.forEach(i => {
        if (i > 0 && set.has(-i)) {
            arr.push(i)
        }
    })
    return arr.length === 0 ? -1 : Math.max(...arr)
};