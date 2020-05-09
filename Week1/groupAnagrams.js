/*
 * Exercise description: 
 *
 * Given an array of strings, group anagrams together.
 * 
 * Note:
 * - All inputs will be in lowercase.
 * - The order of your output does not matter.
 * 
 */

let groupAnagrams = strs => {
    let anagramsMapper = {};
    let result = [];

    strs.forEach(element => {
        // use the sorted letters as the common lookup key for each of the entries
        let letters = element.split('').sort();

        if(anagramsMapper[letters]) {
            anagramsMapper[letters].push(element);
        } else {
            anagramsMapper[letters] = [element];
        }
    });

    Object.entries(anagramsMapper).forEach(element => {
        result.push(element[1]);
    });

    return result;
}
