import { createSlice } from '@reduxjs/toolkit';

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        words: {
            'scold': false, 
            'shaggy': false, 
            'admit': false, 
            'witty': false, 
            'substantial': false, 
            'tense': false, 
            'swift': false, 
            'illegal': false, 
            'weary': false, 
            'tender': false, 
            'occur': false, 
            'dress': false, 
            'cup': false, 
            'women': false, 
            'raise': false, 
        },
        firstChar: '',
        lastChar: ''
    },
    reducers: {
        setWords: (state, action) => {
            state.words = action.payload;
        },
        setFirstChar: (state, action) => {
            state.firstChar = action.payload;
        },
        setLastChar: (state, action) => {
            state.lastChar = action.payload;
        }
    }
});

/* ACTIONS */
export const { setFirstChar, setLastChar } = gridSlice.actions;


/* SELECTORS*/
export const selectWords = state => state.grid.words;


export default gridSlice.reducer;