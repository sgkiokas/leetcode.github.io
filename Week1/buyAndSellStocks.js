/*
 * Exercise description: 
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */

let profit = 0;
let buyPrice = 0;
let highestPrice = 0;
let minPrice;
let maxPrice;
let dayOfMinPrice;
let minPriceDayIndex;
let stopTransactions = false;
let isDescendingArray;

let maxProfit = prices => {

    // helper functions
    minPrice = prices => {
        return Math.min(...prices);
    };

    maxPrice = prices => {
        return Math.max(...prices);
    };

    dayOfMinPrice = prices => {
        return prices.findIndex(price => {
            return price === minPrice(prices);
        });
    };

    isDescendingArray = prices => {
        return prices.every((price, index) => {
            return index === 0 || price <= prices[index - 1];
        })
    }


    minPriceDayIndex = dayOfMinPrice(prices);

    if(stopTransactions) {
        return profit;
    } else if(isDescendingArray(prices)) {
        return profit;
    } else {
        // check if the best price is at the last day
        if(minPriceDayIndex !== prices.length) {
            for(i = minPriceDayIndex; i < prices.length; i++) {
                if(minPriceDayIndex === i) {
                    buyPrice = prices[i];
                }

                // find the highest price until it starts falling again
                for(j = minPriceDayIndex + 1; j < prices.length; j++) {
                    highestPrice = prices[j];

                    if(prices[j + 1] >= prices[j]) {
                        highestPrice = prices[j + 1];
                    } else {
                        break;
                    }
                }

                // sell
                if(prices[i] === highestPrice && highestPrice !== 0) {
                    profit = highestPrice - prices[minPriceDayIndex] + profit;

                    // calculate new min value from the array slice we haven't any transaction yet
                    prices = prices.slice(i);
                    minPriceDayIndex = dayOfMinPrice(prices);

                    if(prices[0] === maxPrice(prices)) {
                        stopTransactions = true;
                    }
                }
            }
        }

        return maxProfit(prices);
    }
}
