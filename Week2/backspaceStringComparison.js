/*
 * Exercise description: 
 *
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 * 
 * Note:
 * 1. 1 <= S.length <= 200
 * 2. 1 <= T.length <= 200
 * 3. S and T only contain lowercase letters and '#' characters.
 * 
 */

let backspaceCompare = (S, T) => {
    let deletionIndicator = '#';
    let sLetters = S.split('');
    let tLetters = T.split('');

    let arrayEquality = (firstArray, secondArray) => {
        if (firstArray.length !== secondArray.length) return false;

        if(firstArray.length === 0 && secondArray.length === 0) return true;
    
        for (i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) return false;
        }
    
        return true;
    };

    let removeHashElement = processedString => {
        if(!processedString.includes(deletionIndicator) || processedString.length === 0) {
            return processedString;
        } else {
            if(processedString.includes(deletionIndicator)) {
                if(processedString.indexOf(deletionIndicator) === 0) {
                    processedString.shift();
                } else {
                    processedString.splice(processedString.indexOf(deletionIndicator) - 1, 1);
                    processedString.splice(processedString.indexOf(deletionIndicator), 1);
                }
            }
        }  

        return removeHashElement(processedString);
    };

    return arrayEquality(removeHashElement(sLetters), removeHashElement(tLetters));

};
