# Word Search in Grid

This repository contains a JavaScript function that solves the LeetCode problem #79 - Word Search. Given a 2D grid of characters `board` and a string `word`, the function determines whether the `word` can be constructed from letters of sequentially adjacent cells in the `board`, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Problem Description

Given a 2D grid `board` and a string `word`, the function should return `true` if the `word` can be found in the `board`, following the conditions mentioned above. Otherwise, it should return `false`.

### Examples:

Example 1:
```javascript
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"
Output: true
```

Example 2:
```javascript
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "SEE"
Output: true
```

Example 3:
```javascript
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCB"
Output: false
```

## Function Implementation

The repository provides a function `doesWordExistInGrid` that solves the Word Search problem using a depth-first search (DFS) approach. The function explores the grid, starting from each cell, searching for a path that forms the given word.

The function uses a helper function `dfs` to perform the DFS search. It employs a set called `visitedCells` to keep track of the visited cells to ensure that a letter cell is not used more than once. The variable `isWordFound` is used to store the result of whether the word was found in the grid.

## How to Use

To use the function, simply copy and paste the code into your JavaScript project. You can call the `doesWordExistInGrid` function with the appropriate parameters (board and word) to check if the word can be formed in the grid.

Example usage:

```javascript
console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Output: true
console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // Output: true
console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // Output: false
```

Please note that the function uses a DFS approach, which is a backtracking algorithm. Therefore, its time complexity depends on the size of the grid and the word, and it is generally not the most efficient solution for very large grids or words.
