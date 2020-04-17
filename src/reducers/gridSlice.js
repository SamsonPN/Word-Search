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
        ],
        firstChar: '',
        lastChar: '',
        highlighted: []
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

/* THUNKS */
export const fetchWords = () => (dispatch, getState) => {
    let words = [...getState().grid.words].sort((a, b) => b.length - a.length);
    let grid = createWordSearch(words);
    dispatch(setGrid(grid));
}

/* ACTIONS */
export const { setGrid, setFirstChar, setHighlighted } = gridSlice.actions;


/* SELECTORS*/
export const selectWords = state => state.grid.words;
export const selectGrid = state => state.grid.grid;
export const selectFirstChar = state => state.grid.firstChar;
export const selectHighlighted = state => state.grid.highlighted;

export default gridSlice.reducer;





