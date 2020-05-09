/*
 * Exercise description: 
 *
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 * 
 *  Constraints:
 * - The length of the array is in range [1, 20,000]
 * - The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

let continuousSubarraysCounter = 0;

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = (nums, k) => {

    if(nums.length < 1 || nums.length > 20000) {
        throw new Error(`The array must be within the [1, 20,000] range. You supplied ${nums.length}`);
    }

    if(!withinRangeChecker(nums)) {
        throw new Error(`The numbers supplied must be within the [-1000, 1000] range`);
    }

    if(k < -1e7 || k > 1e7) {
        throw new Error(`The value of k must be within [-1e7, 1e7] range`);
    }

    if(nums === null || nums.length === 0 || unreachableTarget(nums, k)) {
        return continuousSubarraysCounter;
    } else {
        let currentSum = 0;
        let newSum = 0;
        for(i = 0; i < nums.length; i++) {
            if(nums[i] > k) {
                continue;
            } 
    
            newSum = currentSum + nums[i];
            if(newSum < k) {
                currentSum += nums[i];
                continue;
            } else {
                if(newSum === k) {
                    continuousSubarraysCounter++;
                    if(nums.length === 1) {
                        return continuousSubarraysCounter;
                    }
                }
                // create new slice and recurse
                let numsSlice = nums.slice(i);
                if(numsSlice === undefined || numsSlice.length === 0 ) {
                    return continuousSubarraysCounter;
                } else {
                    return subarraySum(numsSlice, k);
                }
            }
        }
    }
};

let withinRangeChecker = numbers => {
    return numbers.every(number => {
        return number > -1000 && number < 10000;
    });
}

let unreachableTarget = (numbers, target) => {
    let numbersSum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    return (numbersSum < target) ? true : false;
}
