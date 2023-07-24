/*Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false */


const doesWordExistInGrid = (board, word)=>{
    let wordIndex = 0;
    let visitedCells = new Set();
    let isWordFound = false;
    const dfs = (row, col)=>{
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || visitedCells.has(`${row}-${col}`) || isWordFound){
            return;
        }
        if(board[row][col] === word[wordIndex]){
            visitedCells.add(`${row}-${col}`);
            wordIndex++;
            if(wordIndex === word.length){
                isWordFound = true;
                return;
            }
            dfs(row+1, col);
            dfs(row-1, col);
            dfs(row, col+1);
            dfs(row, col-1);
            visitedCells.delete(`${row}-${col}`);
            wordIndex--;
        }
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            dfs(i, j);
        }
    }
    return isWordFound;

}

console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); //true
console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); //true
console.log(doesWordExistInGrid([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); //false