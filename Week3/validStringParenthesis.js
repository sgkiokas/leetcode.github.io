/*
 * Exercise description: 
 *
 * Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity
 * of a string by these rules:
 * 
 * 1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * 2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'
 * 4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
 * 5. An empty string is also valid
 * 
 * Note: The string size will be in the range [1, 100].
 * 
 */

let checkValidString = s => {
    let inputToArray = s.split('');
    let allAsterisks = inputToArray.every(symbol => {
        return symbol === '*';
    });

    let parenthesisStack = [];
    let asterisksStack = [];

    if(allAsterisks || s.length === 0) {
        return true;
    } else if(s.length === 1 && inputToArray[0] !== '*') {
        return false;
    } else {
        inputToArray.forEach(symbol => {
            if(symbol === '(') {
                parenthesisStack.push(symbol);
            } else if(symbol === ')') {
                if(parenthesisStack.length !== 0) {
                    parenthesisStack.pop();
                } else if(asterisksStack !== 0) {
                    asterisksStack.pop();
                } else {
                    return false;
                }
            } else if(symbol === '*') {
                asterisksStack.push(symbol);
            }
        });
    }

    while(parenthesisStack.length !== 0 && asterisksStack.length !== 0) {
        if(parenthesisStack.pop() > asterisksStack.pop()){
            return false;
        }
    }

    return (parenthesisStack.length === 0);
};
