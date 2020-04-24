import { isWithinGrid } from './createWordSearch.js';
const dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

export function solveWordSearch(wordsearch, words, size) {
    const positions = trackLetterPos(wordsearch, size);
    let wordList = {};
    words.forEach(word => {
        wordList = findWord({wordsearch, word, wordList, positions, size})
    })
    return wordList;
}

function trackLetterPos(wordsearch, size) {
    let positions = {};
    wordsearch.forEach((letter, i) => {
        let row = Math.trunc(i / size);
        let col = i % size;
        if(positions[letter] == null) {
            positions[letter] = {
                [i]: [row, col]
            }
        }
        else {
            positions[letter][i] = [row, col];
        }
    })
    return positions;
}

function findWord(wordInfo) {
    let {word, wordList, positions} = wordInfo;
    let firstLetter = positions[word[0]];
    // for every occurence of the first letter in the list
    for (let pos in firstLetter) {
        let firstPos = firstLetter[pos];
        wordList = checkDirection({...wordInfo, firstPos})
    }
    return wordList;
}

// checks in all 8 directions
function checkDirection(wordInfo) {
    let {wordsearch, word, wordList, positions, size, firstPos} = wordInfo;
    let wLen = word.length - 1;
    let lastPositions = positions[word[wLen]];
    // for each direction
    for(let i = 0; i < dirs.length; i++) {
        let direction = dirs[i];
        let [dRow, dCol] = direction;
        let [row, col] = firstPos;
        row += (dRow * wLen);
        col += (dCol * wLen);
        
        if( isWithinGrid(row, col, size) ) {
            let lastPos = (row * size) + col;
            
            if ( lastPositions[lastPos] ) {
                let isFound = checkWord({wordsearch, word, firstPos, direction, size})
                if ( isFound ) {
                    console.log('i am here!')
                    wordList[word] = {
                        first: firstPos,
                        last: lastPositions[lastPos],
                        dir: direction
                    };
                    break;
                }  
            }
        }
    }
    return wordList;
}

function checkWord(wordInfo) {
    let {wordsearch, word, firstPos, direction, size} = wordInfo;
    let [row, col] = firstPos;
    let [dRow, dCol] = direction;
    let found = true;
    
    for(let i = 0; i < word.length; i++) {
        let letter = word[i];
        let pos = (row * size) + col;
        if(wordsearch[pos] !== letter) {
            found = false;
            break;
        }
        row += dRow;
        col += dCol;
    }
    return found;
}