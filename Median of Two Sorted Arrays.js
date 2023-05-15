/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
 * 
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums3=nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(nums3.length / 2)
    return nums3.length % 2 !== 0 ? nums3[mid] : (nums3[mid - 1] + nums3[mid]) / 2;
}