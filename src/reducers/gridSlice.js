import { createSlice } from '@reduxjs/toolkit';
import { createWordSearch, removeSymbols } from '../utility';
import { key } from '../test';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        grid: [
            'J', 'N', 'E', 'Y',
            'U', 'G', 'N', 'T',
            'C', 'O', 'S', 'S',
            'R', 'R', 'W',
            'R', 'I', 'P', 'M',
            'X', 'C', 'T', 'I',
            'B', 'Y', 'X', 'V',
            'E', 'U', 'G',
            'G', 'X', 'O', 'N',
            'D', 'T', 'E', 'N',
            'K', 'R', 'D', 'M',
            'A', 'D', 'C',
            'N', 'A', 'I', 'X',
            'F', 'Z', 'G', 'T',
            'P', 'P', 'E', 'H',
            'D', 'I', 'N',
            'I', 'S', 'K', 'I',
            'N', 'A', 'D', 'I',
            'G', 'O', 'T', 'I',
            'I', 'M', 'G',
            'T', 'Y', 'A', 'W',
            'X', 'Z', 'E', 'M',
            'O', 'W', 'H', 'S',
            'N', 'E', 'R',
            'R', 'N', 'P', 'M',
            'V', 'I', 'L', 'I',
            'K', 'E', 'G', 'T',
            'G', 'N', 'J',
            'E', 'C', 'I', 'G',
            'P', 'I', 'W', 'D',
            'I', 'R', 'I', 'O',
            'I', 'T', 'F',
            'C', 'H', 'B', 'I',
            'C', 'O', 'O', 'A',
            'K', 'E', 'L', 'R',
            'Y', 'A', 'S',
            'N', 'R', 'N', 'B',
            'T', 'X', 'N', 'T',
            'S', 'U', 'G', 'Y',
            'N', 'R', 'E',
            'O', 'O', 'O', 'H',
            'Q', 'Z', 'K', 'I',
            'K', 'V', 'I', 'J',
            'I', 'Y', 'U',
            'C', 'N', 'S', 'W',
            'F', 'B', 'E', 'N',
            'O', 'W', 'H', 'A',
            'D', 'W', 'F',
            'S', 'O', 'M', 'T',
            'M', 'W', 'W', 'G',
            'O', 'F', 'U', 'S',
            'T', 'N', 'L',
            'I', 'U', 'A', 'X',
            'A', 'C', 'T', 'I',
            'O', 'N', 'A', 'B',
            'L', 'E', 'N',
            'D', 'S', 'S', 'M',
            'C', 'J', 'W', 'B',
            'B', 'E', 'I', 'Z',
            'A', 'C', 'F'
          ],
        firstChar: '',
        highlighted: [],
        words: {
            HISTORY: { first: [ 3, 11 ], last: [ 9, 11 ], dir: [ 1, 0 ] },
            SAMSON: { first: [ 14, 2 ], last: [ 9, 2 ], dir: [ -1, 0 ] },
            NGUYEN: { first: [ 0, 6 ], last: [ 0, 1 ], dir: [ 0, -1 ] },
            KNOWLEDGE: { first: [ 10, 6 ], last: [ 2, 6 ], dir: [ -1, 0 ] },
            POWER: { first: [ 3, 9 ], last: [ 7, 9 ], dir: [ 1, 0 ] },
            READING: { first: [ 0, 12 ], last: [ 6, 12 ], dir: [ 1, 0 ] },
            BOOOKS: { first: [ 14, 8 ], last: [ 9, 8 ], dir: [ -1, 0 ] },
            DISCONCERTING: { first: [ 14, 0 ], last: [ 2, 0 ], dir: [ -1, 0 ] },
            HIGLIGHTED: { first: [ 11, 10 ], last: [ 2, 10 ], dir: [ -1, 0 ] },
            ASYNCHRONOUS: { first: [ 3, 1 ], last: [ 14, 1 ], dir: [ 1, 0 ] },
            ACTIONABLE: { first: [ 13, 4 ], last: [ 13, 13 ], dir: [ 0, 1 ] },
            INTIMIDATING: { first: [ 1, 7 ], last: [ 12, 7 ], dir: [ 1, 0 ] },
            RUDIMENTARY: { first: [ 0, 13 ], last: [ 10, 13 ], dir: [ 1, 0 ] }
          },
        color: '',
        foundWords: 0,
        showPuzzle: true,
        startTime: 0
    },
    reducers: {
        setWords: (state, action) => {
            state.words = action.payload;
        },
        setGrid: (state, action) => {
            state.grid = action.payload;
        },
        setFirstChar: (state, action) => {
            state.firstChar = action.payload;
        },
        setLastChar: (state, action) => {
            state.lastChar = action.payload;
        },
        setHighlighted: (state, action) => {
            state.highlighted = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        incrementFound: (state) => {
            state.foundWords += 1;
        },
        setShowPuzzle: (state, action) => {
            state.showPuzzle = action.payload;
        },
        setStartTime: (state, action) => {
            state.startTime = action.payload;
        }
    }
});



/* THUNKS */

export const fetchWords = (newGame) => (dispatch) => {
    const wordExample = ['scold', 'shaggy', 'admit', 'witty', 'substantial', 'tense', 'weary', 'tender', 'occur', 'dress','i am gr$$00oot', 'raise','multimedia','acknowledge','honey','wallace','internship','ABARTICULATIO','articulated','samsonnguyen'];
    // const wordExample = ['his'];
    let words = wordExample.sort((a, b) => b.length - a.length);
    words = removeSymbols(words);
    let {grid, wordList} = createWordSearch(words);
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
};

// export const fetchWords = (newGame) => (dispatch, getState) => {
//     const currentGrid = getState().grid.grid;
//     const limit = Math.trunc( (Math.random() * (20 - 15 + 1)) + 15 );
//     if( currentGrid.length === 0 || newGame) {
//         fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minLength=3&maxLength=10&limit=${limit}&api_key=${key}`)
//             .then(res => res.json())
//             .then(fetchedWords => {
//                 let words = fetchedWords.map(word => word.word);
//                 words = removeSymbols(words);
//                 let {grid, wordList} = createWordSearch(words);
//                 dispatch(setGrid(grid));
//                 dispatch(setWords(wordList));
//             })
//     }
// };

export const makePuzzle = words => dispatch => {
    words = removeSymbols(words);
    let { grid, wordList } = createWordSearch(words);
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
}

export const resetFoundWords = () => (dispatch, getState) => {
    let wordCopy = {...getState().grid.words};
    Object.keys(wordCopy).forEach(word => {
        let contents = wordCopy[word];
        wordCopy[word] = {...contents, found: "false"}
    })
    dispatch(setWords(wordCopy)); 
}

/* ACTIONS */
export const { 
    setGrid, 
    setWords, 
    setFirstChar, 
    setHighlighted, 
    setColor, 
    incrementFound, 
    setShowPuzzle ,
    setStartTime
} = gridSlice.actions;


/* SELECTORS */
export const selectWords = state => state.grid.words;
export const selectGrid = state => state.grid.grid;
export const selectFirstChar = state => state.grid.firstChar;
export const selectHighlighted = state => state.grid.highlighted;
export const selectColor = state => state.grid.color;
export const selectFoundWords = state => state.grid.foundWords;
export const selectShowPuzzle = state => state.grid.showPuzzle;
export const selectStartTime = state => state.grid.startTime;

export default gridSlice.reducer;





