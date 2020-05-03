import { createSlice } from '@reduxjs/toolkit';
import { createWordSearch, removeSymbols, saveToStorage } from '../utility';
import { key } from '../test';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        grid: [],
        firstChar: '',
        highlighted: [],
        words: {},
        color: '',
        foundWords: 0,
        showPuzzle: false,
        startTime: 0,
        puzzleTitle: ''
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
        },
        setPuzzleTitle: (state, action) => {
            state.puzzleTitle = action.payload;
        }
    }
});



/* THUNKS */

// development only
// export const fetchWords = (newGame) => (dispatch, getState) => {
//     const currentGrid = getState().grid.grid;
//     const wordExample = ['scold', 'shaggy', 'admit', 'witty', 'substantial', 'tense', 'weary', 'tender', 'occur', 'dress','i am gr$$00oot', 'raise','multimedia','acknowledge','honey','wallace','internship','ABARTICULATIO','articulated','samsonnguyen'];
//     // const wordExample = ['his'];
//     if(currentGrid.length === 0 || newGame) {
//         let words = wordExample.sort((a, b) => b.length - a.length);
//         words = removeSymbols(words);
//         let {grid, wordList} = createWordSearch(words);
//         dispatch(setGrid(grid));
//         dispatch(setWords(wordList));
//     }
// };

export const fetchWords = (newGame) => (dispatch, getState) => {
    const currentGrid = getState().grid.grid;
    if( currentGrid.length === 0 || newGame) {
        fetch('/.netlify/functions/getwords')
            .then(res => res.json())
            .then(fetchedWords => {
                let words = fetchedWords.map(word => word.word);
                words = removeSymbols(words);
                let {grid, wordList} = createWordSearch(words);
                dispatch(setGrid(grid));
                dispatch(setWords(wordList));
            })
    }
};

export const makePuzzle = words => (dispatch, getState) => {
    const title = getState().grid.puzzleTitle;
    words = removeSymbols(words);
    let { grid, wordList } = createWordSearch(words);
    saveToStorage(title, wordList, grid);
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
    setStartTime,
    setPuzzleTitle
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
export const selectPuzzleTitle = state => state.grid.puzzleTitle;


export default gridSlice.reducer;





