/*
 * Exercise description: 
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 */

let maxSubArray = nums => {
    let max = 0
    let currentMax = 0; 

    let allNegatives = nums.every(number => {
        return number < 0;
    });

    for (i = 0; i < nums.length; i++) { 
        currentMax = currentMax + nums[i]; 
        if (nums.length === 1) {
            max = nums[i];
        } else if (allNegatives) {
            let positiveNums = nums.map((number => number * (- 1)));
            max = Math.min(...positiveNums); 
            max = max * (-1);
        } else if (currentMax < 0) {
            currentMax = 0;
        } else if (max < currentMax) {
            max = currentMax;
        }
    } 

    return max; 
}