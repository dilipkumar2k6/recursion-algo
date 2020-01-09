const hasConflict = (board, i, j) => {
    // if any queen on same row then conflict
    for(let k=0; k < board.length; k++) {
        if(board[i][k] === 'q') {
            return true;
        }
    }
    // if any queen on same colum then conflict
    for(let k=0; k < board.length; k++) {
        if(board[k][j] === 'q') {
            return true;
        }
    }
    // if any queen in same diagonal then conflict
    for(let k=0; k < board.length; k++) {
        if(i-k >= 0  && j -k >=0  && board[i-k][j-k] === 'q') {
            return true;
        }
    }
    for(let k=0; k < board.length; k++) {
        if(i -k >=0 && board[i-k][j+k] === 'q') {
            return true;
        }
    }
    return false;
}
const find_all_arrangementsHelper = (board, i, results) => {

    // if reach at the end then print
    if(i === board.length) {
        results.push(board.map(a => a.join('')));
        return;
    }

    // place queen on all possible places
    for(let j=0; j < board.length; j++) {
        if(hasConflict(board, i, j)) {
            continue;
        }
        // place queen
        board[i][j] = 'q';
        // try for next row
        find_all_arrangementsHelper(board, i + 1, results);
        board[i][j] = '-';
    }
}

/*
 * Complete the function below.
 */
function find_all_arrangements(n) {
    const results = [];
    const board = new Array(n).fill(0).map(a => new Array(n).fill('-'));
    // start with row 0
    find_all_arrangementsHelper(board, 0, results);
    return results;
}

console.log(find_all_arrangements(2));

