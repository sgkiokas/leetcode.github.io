/*
 * Exercise description: 
 *
 * Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
 * 
 * Note: Please solve it without division and in O(n).
 * 
 */

let output = [];
let counter = 0;
let product = 0;

let productExceptSelf = nums => {
    if(nums.length < 1) {
        throw new Error('The array has to have at least one element!');
    } else if(counter === nums.length) {
        console.log(output);
        return output;
    } else {
        // remove the ith element temporarily from the input array
        let removedElement = nums.splice(nums.indexOf(nums[counter]), 1);
        product = nums.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        });

        output.push(product);
        // put the ith element back in the array in order to have it in the original form
        nums.splice(nums.indexOf(nums[counter]), 0, ...removedElement);
        counter++;

        return productExceptSelf(nums);
    }
};
