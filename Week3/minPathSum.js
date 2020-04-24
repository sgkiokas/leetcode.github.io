/*
 * Exercise description: 
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
let minValue = (firstValue, secondValue) => {
    return (firstValue >= secondValue) ? secondValue : firstValue;
};

let minPathSum = grid => {
    if(grid === null || grid.length === 0) {
        return 0;
    }

    if(grid.length === 1) {
        return grid[0].reduce((accumulator, currentElement) => accumulator + currentElement, 0);
    }

    // approach the exercise based on the Minimum Path Cost problem of Dynamic Programming
    let minCostPathArray = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
    minCostPathArray[0][0] = grid[0][0];

    for(i = 1; i < grid.length; i++) {
        for(j = 1; j < grid[i].length; j++) {
            // initially, count horizontally
            minCostPathArray[0][j] = minCostPathArray[0][j - 1] + grid[0][j];
            // then, vertically
            minCostPathArray[i][0] = minCostPathArray[i - 1][0] + grid[i][0];
        }
    }

    let minimumValue = 0;

    // dynamically, find the minumum path from either above or the left element
    for(i = 1; i < minCostPathArray.length; i++) {
        for(j = 1; j < minCostPathArray[i].length; j++) {
            minimumValue = minValue(minCostPathArray[i][j - 1], minCostPathArray[i - 1][j]);
            minCostPathArray[i][j] = minimumValue + grid[i][j];
        }
    }

    return minCostPathArray[minCostPathArray.length - 1][minCostPathArray[0].length - 1];
};
