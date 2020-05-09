/*
 * Exercise description: 
 *
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * 
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - 0 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = nums => {
    withinRangeChecker = numbers => {
        numbers.every(number => {
            return number >= 0 && number <= Math.pow(10, 5);
        });
    }

    if(nums.length < 1 || nums.length > Math.pow(10, 4) * 3) {
        throw new Error(`The nums table should have a length in the range [1, 3 * 10^4]. The supplied one is ${nums.length}`);
    }

    if(withinRangeChecker(nums)) {
        throw new Error('The values of the nums array must be within the [0, 10^5] range.');
    } 

    if(nums.length === 1) {
        return true;
    } else {
        let checkedIndex = nums.length - 1;
        for(i = nums.length - 1; i >= 0; i--) {
            if(i + nums[i] >= checkedIndex) {
                checkedIndex = i;
            }
        }

        // determine if we have reached the first array element
        return checkedIndex === 0;
    }
};
