import { createSlice } from '@reduxjs/toolkit';
import createWordSearch from '../utility';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        grid: [],
        // words: {
        //     'scold': false, 
        //     'shaggy': false, 
        //     'admit': false, 
        //     'witty': false, 
        //     'substantial': false, 
        //     'tense': false, 
        //     'swift': false, 
        //     'illegal': false, 
        //     'weary': false, 
        //     'tender': false, 
        //     'occur': false, 
        //     'dress': false, 
        //     'cup': false, 
        //     'women': false, 
        //     'raise': false 
        // },
        words: [
            'scold', 
            'shaggy', 
            'admit', 
            'witty', 
            'substantial', 
            'tense', 
            'swift', 
            'illegal', 
            'weary', 
            'tender', 
            'occur', 
            'dress', 
            'cup', 
            'women', 
            'raise'
        ],
        firstChar: '',
        lastChar: ''
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
        }
    }
});

/* THUNKS */
export const fetchWords = () => (dispatch, getState) => {
    let words = [...getState().grid.words];
    let grid = createWordSearch(words);
    dispatch(setGrid(grid));
}

/* ACTIONS */
export const { setGrid, setFirstChar, setLastChar } = gridSlice.actions;


/* SELECTORS*/
export const selectWords = state => state.grid.words;
export const selectGrid = state => state.grid.grid;


export default gridSlice.reducer;

