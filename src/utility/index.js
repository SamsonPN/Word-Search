function createWordSearch(words) {
    let size = 15;
    let grid = new Array(size * size).fill('_');
    let regex = /[^A-Za-z]/gi;
    words.forEach((word, i) => {
        words[i] = word.replace(regex,"").toUpperCase();
    })
    let dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    let positions = grid.map((x, i) => i);
    words.forEach(word => {
        let newInfo = findPos({word, dirs, grid, positions, size});
        grid = newInfo.grid;
        positions = newInfo.positions;
    })
    return fillGrid(grid);
    // return grid;
}

function fillGrid(grid) {
    grid.forEach((cell,i) => {
        let randNum = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        if(cell === '_') {
            grid[i] = String.fromCharCode(randNum);
        }
    })
    return grid;
}

// finds a new position for the word to occupy
function findPos(gridInfo) {
    let {word, dirs, grid, positions, size} = gridInfo;
    let posCopy = [...positions];
    
    while(true) {
        if(posCopy.length === 0) {
            break;
        }
        let pos = shuffle(posCopy).pop();
        let newGrid = insertWord({word, dirs, grid, pos, size});
        if(newGrid) {
            grid = newGrid;
            break;
        }
    }
    return {grid, positions};
}

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let rand = Math.trunc(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}

function insertWord(wordInfo) {
    let {word, dirs, grid, pos, size} = wordInfo;
    let directions = [...dirs];
    let isInserted = false;

    while( !isInserted ) {
        if(directions.length === 0) {
            grid = false;
            break;
        }
        else {
            let gridCopy = [...grid];
            let newPos = pos;
            let row = Math.trunc(newPos / size);
            let col = newPos % size;
            let [dRow, dCol] = shuffle(directions).pop();
            
            if( wordCanFit({row, col, dRow, dCol, size, word}) ) {
                for(let i = 0; i < word.length; i++) {
                    let letter = word[i];
                    let gridLetter = grid[newPos];
                    if(gridLetter === '_' || gridLetter === letter) {
                        gridCopy[newPos] = letter;
                        if(i === word.length - 1) {
                            isInserted = true;
                            grid = [...gridCopy]
                        }
                    }
                    else {
                        break;
                    }
                    row += dRow;
                    col += dCol;
                    if( !isWithinGrid(row, col, size) ) {
                        break;
                    }
                    newPos = (row * size) + col;
                } 
            }
        }
        
    }
    return grid;
}

function wordCanFit(wordInfo){
    let {row, col, dRow, dCol, size, word} = wordInfo;
    let len = word.length - 1;
    row += (dRow * len);
    col += (dCol * len);
    return isWithinGrid(row, col, size);
}

function isWithinGrid(row, col, size) {
    return (row >= 0 && row < size) && (col >= 0 && col < size);
} 


export default createWordSearch;