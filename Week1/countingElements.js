/*
 * Exercise description: 
 *
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 *
 * If there're duplicates in arr, count them seperately.
 * 
 * Constraints:
 * - 1 <= arr.length <= 1000
 * - 0 <= arr[i] <= 1000
 * 
 */

let countElements = arr => {
    let sum = 0;

    for(i = 0; i <= arr.length; i++) {
        if(arr.includes(arr[i] + 1)) {
            sum += 1;
        }
    }

    return sum;
};
