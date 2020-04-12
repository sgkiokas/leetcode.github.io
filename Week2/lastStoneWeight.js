/*
 * Exercise description: 
 *
 * We have a collection of stones, each stone has a positive integer weight.
 * 
 * Each turn, we choose the two heaviest stones and smash them together. 
 * 
 * Suppose the stones have weights x and y with x <= y.
 * 
 * The result of this smash is:
 * 
 * - If x == y, both stones are totally destroyed;
 * - If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
 * 
 * At the end, there is at most 1 stone left.
 * 
 * Return the weight of this stone (or 0 if there are no stones left.)
 * 
 * Note:
 * 1. 1 <= stones.length <= 30
 * 2. 1 <= stones[i] <= 1000
 * 
 */

let lastStoneWeight = stones => {

    // sanity checks for the stone array content
    let correctLimits = array => {
        array.forEach(element => {
            let checkLimit = element < 1 || element > 1000;
            return checkLimit;
        });
    }

    if(correctLimits(stones)) {
        throw new Error('The weight of the stones should be in the range [1, 1000].');
    } else if(stones.length > 30 || stones.length < 1) {
        throw new Error(`The length of your stone collection is wrong: ${stones.length}! It should be within [1, 30].`);
    }

    let allEqual = array => {
        return array.every((elementValue, index, array) => elementValue === array[0]);
    }

    let findHeaviest = array => {
        let heaviest = [];

        if(array.length === 2 && allEqual(stones)) {
            heaviest.push(array[0]);
            heaviest.push(array[1]);
        } else {
            array.sort((a, b) => {
                return b - a;
            })
    
            if(array.length >= 2) {
                heaviest.push(array[0]);
                heaviest.push(array[1]);
            } else {
                heaviest.push(array[0]);
            }
        }

        return heaviest;
    }

    let smashStones = array => {
        if(array.length <= 1) {
            return array;
        } else {
            let heaviest = findHeaviest(array);

            array.splice(array.indexOf(heaviest[0]), 1);
            array.splice(array.indexOf(heaviest[1]), 1);

            if(array.length === 0 && allEqual(heaviest)) {
                array.push(0);

                return array;
            } else {
                if(heaviest[0] !== heaviest[1]) {
                    array.push(heaviest[0] - heaviest[1]);
                }

                return smashStones(array);
            }
        }
    }

    return smashStones(stones)[0];
};
