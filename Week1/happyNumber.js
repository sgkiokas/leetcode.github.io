/*
 * Exercise description: 
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares
 * of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 */

let isHappy = n => {
    if(n === 1) {
        return true;
    } else {
        let digits = n.toString().split('');
        let sum = 0;
        try {
            digits.forEach(digit => {
                sum += parseInt(digit) * parseInt(digit);
            });
        
            return isHappy(sum);
        } catch(err) {
            return false;
        }
        
    }
}