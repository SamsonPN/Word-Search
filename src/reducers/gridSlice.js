import { createSlice } from '@reduxjs/toolkit';
import { createWordSearch, removeSymbols } from '../utility';
import { key } from '../key';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        grid: [],
        firstChar: '',
        highlighted: [],
        words: [],
        color: '',
        foundWords: 0
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
        }
    }
});


// const wordExample = ['scold', 'shaggy', 'admit', 'witty', 'substantial', 'tense', 'weary', 'tender', 'occur', 'dress','i am gr$$00oot', 'raise','multimedia','acknowledge','honey','wallace','internship','ABARTICULATIO','articulated','samsonnguyen'];

/* THUNKS */
export const fetchWords = () => (dispatch, getState) => {
    let currentGrid = getState().grid.grid;
    // if( currentGrid.length === 0) {
    //     fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minLength=3&maxLength=13&limit=20&api_key=${key}`)
    //         .then(res => res.json())
    //         .then(fetchedWords => {
    //             let words = fetchedWords.map(word => word.word).sort((a, b) => b.length - a.length);
    //             words = removeSymbols(words);
    //             let {grid, wordList} = createWordSearch(words);
    //             dispatch(setGrid(grid));
    //             dispatch(setWords(wordList));
    //         })
    // }
};

export const makePuzzle = words => dispatch => {
    words = removeSymbols(words);
    let { grid, wordList } = createWordSearch(words);
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
}

/* ACTIONS */
export const { setGrid, setWords, setFirstChar, setHighlighted, setColor, incrementFound } = gridSlice.actions;


/* SELECTORS */
export const selectWords = state => state.grid.words;
export const selectGrid = state => state.grid.grid;
export const selectFirstChar = state => state.grid.firstChar;
export const selectHighlighted = state => state.grid.highlighted;
export const selectColor = state => state.grid.color;
export const selectFoundWords = state => state.grid.foundWords;

export default gridSlice.reducer;





