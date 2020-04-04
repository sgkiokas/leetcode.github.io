/*
 * Exercise description: 
 *
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Note:
 *
 * 1. You must do this in-place without making a copy of the array.
 * 2. Minimize the total number of operations.
 */

let zeroes = 0;
let firstPass = true;

let moveZeroes = nums => {
    if(firstPass) {
        firstPass = false;
        nums.forEach(number => {
            if(number === 0) {
                zeroes++;
            }
        })
    }

    if(zeroes === 0) {
        return nums;
    } else {
        zeroes--;
        for(i = 0; i < nums.length; i++) {
            if(nums[i] === 0 && (i + 1) < nums.length) {
                [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
            }   
        }

        return moveZeroes(nums);
    }
};
