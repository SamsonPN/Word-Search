import { createSlice } from '@reduxjs/toolkit';
import createWordSearch from '../utility';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        grid: [],
        firstChar: '',
        highlighted: [],
        words: []
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
        }
    }
});


const wordExample = [
    'scold', 
    'shaggy', 
    'admit', 
    'witty', 
    'substantial', 
    'tense', 
    'weary', 
    'tender', 
    'occur', 
    'dress',
    'i am gr$$00oot',
    'raise',
    'multimedia',
    'acknowledge',
    'honey',
    'wallace',
    'internship',
    'ABARTICULATIO',
    'articulated',
    'samsonnguyen'
];

/* THUNKS */
export const fetchWords = () => dispatch => {
    let regex = /[^A-Za-z]/gi;
    const words = [...wordExample].sort((a, b) => b.length - a.length);
    words.forEach((word, i) => {
        words[i] = word.replace(regex,"").toUpperCase();
    })
    dispatch(setWords(words));
    let {grid, wordList} = createWordSearch(words);
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
}

/* ACTIONS */
export const { setGrid, setWords, setFirstChar, setHighlighted } = gridSlice.actions;


/* SELECTORS*/
export const selectWords = state => state.grid.words;
export const selectGrid = state => state.grid.grid;
export const selectFirstChar = state => state.grid.firstChar;
export const selectHighlighted = state => state.grid.highlighted;

export default gridSlice.reducer;





