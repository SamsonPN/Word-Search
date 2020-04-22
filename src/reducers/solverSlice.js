import { createSlice } from '@reduxjs/toolkit';
// import { removeSymbols } from '../utility';

export const solverSlice = createSlice({
    name: 'solver',
    initialState: {
        words: [],
        rows: 0,
        cols: 0
    },
    reducers: {
        setWords: (state, action) => {
            state.words = action.payload;
        },
        setRows: (state, action) => {
            state.rows = action.payload;
        },
        setCols: (state, action) => {
            state.cols = action.payload;
        },
    }
})

/* ACTIONS */
export const { setWords, setRows, setCols } = solverSlice.actions;

/* SELECTORS */
export const selectWords = state => state.solver.words;
export const selectRows = state => state.solver.rows;
export const selectCols = state => state.solver.cols;

export default solverSlice.reducer;