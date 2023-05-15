/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = function(nums, minK, maxK) {
	var count = 0;

	var minPosition = -1;
	var maxPosition = -1;
	var leftBound = -1;

	for (var i = 0; i < nums.length; ++i) {
		if (nums[i] == minK)
			minPosition = i;

		if (nums[i] == maxK)
			maxPosition = i;

		if (nums[i] < minK || nums[i] > maxK)
			leftBound = i;

		const smaller = Math.min(minPosition, maxPosition);
		count += Math.max(0, smaller - leftBound);
	}

	return count;
};