/*
 * Exercise description: 
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 * 
 */

 /**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = grid => {
    let islandsSum = 0;

    // empty grid
    if(grid === null || grid.length === 0) {
        return islandsSum;
    } 

    for(i = 0; i < grid.length; i++) {
        for(j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                islandsSum += countLand(grid, i, j);
            }
        }
    }

    return islandsSum;
};

let countLand = (grid, i, j) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid.length || grid[i][j] === '0') {
        return 0;
    }

    // we have visited this point, so mark it with '0'
    grid[i][j] = '0';

    // go down
    countLand(grid, i + 1, j);
    // go up
    countLand(grid, i - 1, j);
    // go right
    countLand(grid, i, j + 1);
    // go left
    countLand(grid, i, j - 1);

    return 1;
}
