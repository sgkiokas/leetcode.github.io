/*
 * Exercise description: 
 *
 * You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
 * 
 * - direction can be 0 (for left shift) or 1 (for right shift). 
 * - amount is the amount by which string s is to be shifted.
 * - A left shift by 1 means remove the first character of s and append it to the end.
 * - Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
 * 
 * Return the final string after all operations. 
 * 
 * Constraints:
 * 
 * - 1 <= s.length <= 100
 * - s only contains lower case English letters.
 * - 1 <= shift.length <= 100
 * - shift[i].length == 2
 * - 0 <= shift[i][0] <= 1
 * - 0 <= shift[i][1] <= 100
 */

let hasUpperCaseLetters = checkedString => {
    return (/[A-Z]/.test(checkedString));
}

let stringShift = (s, shift) => {
    // check that the constraints are satisfied
    if(s.length < 1 || s.length > 100) {
        throw new Error(`Your string length is ${s.length} and it is not with the range [1, 100].`);
    }

    if(hasUpperCaseLetters(s)) {
        // do not throw error, just turn all the characters to lower case
        s = s.toLowerCase();
    }

    if(shift.length < 1|| shift.length > 100) {
        throw new Error(`The supplied shift matrix contains ${shift.length} elements and it does not fall into the range [1, 100].`);
    };

    let shiftedString = s.split('');
    for(i = 0; i < shift.length; i++) {
        let direction = shift[i][0];
        let amount = shift[i][1];
        let tempArray = [];

        if(amount < 0 || amount > 100) {
            throw new Error(`The number of steps to shift the string supplied is ${amount} and it is not with the range [1, 100].`);
        }

        if(amount !== 0) {
            // left shift (append at the end)
            if(direction === 0) {
                tempArray = shiftedString.splice(0, amount);
                shiftedString.push(...tempArray);
            // right shift (append at the beginning)
            } else if(direction === 1) {
                tempArray = shiftedString.splice((-1) * amount, amount);
                shiftedString.unshift(...tempArray);
            } else {
                throw new Error(`The direction value should be binary. You supplied: ${direction}`);
            }
        } else {
            continue;
        }
    }

    return shiftedString.join('');
};
