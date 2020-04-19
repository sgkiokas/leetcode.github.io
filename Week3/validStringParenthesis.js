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

    let result;
    let results = [];

    if(allAsterisks) {
        return true;
    } else if(s.length === 0) {
        return true;
    } else if(s.length === 1 && inputToArray[0] !== '*') {
        return false;
    } else {
        // test the string validity in 3 phases
        for(i = 0; i < 3; i++) {
            let alteredInput = '';
            switch (i) {
                case 0:
                    alteredInput = s.split('*').join('');
                    break;
                case 1:
                    alteredInput = s.split('*').join(')');
                    break;
                case 2:
                    alteredInput = s.split('*').join('(');
                    break;
                default:
                    break;
            }

            let stack = [];
            let parenthesisMapper = {
                '(': ')'
            };
        
            alteredInput.split('').forEach(symbol => {
                if(symbol === '(') {
                    stack.push(symbol);
                } else if(symbol === ')') {
                    let removedCharacter = stack.pop();
                    if(parenthesisMapper[removedCharacter] !== symbol) {
                        results.push(false);
                    }
                }
            });

            if(stack.length === 0) {
                result = true;
            } else {
                result = false;
            }

            results.push(result);
        }
    }

    return results.includes(true);
};
