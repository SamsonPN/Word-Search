import { createSlice } from '@reduxjs/toolkit';
// import { removeSymbols } from '../utility';

export const solverSlice = createSlice({
    name: 'solver',
    initialState: {
        grid: [],
        words: [],
        rows: 3,
        cols: 3
    },
    reducers: {
        setGrid: (state, action) => {
            state.grid = action.payload;
        },
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
export const { setGrid, setWords, setRows, setCols } = solverSlice.actions;

/* SELECTORS */
export const selectGrid = state => state.solver.grid;
export const selectWords = state => state.solver.words;
export const selectRows = state => state.solver.rows;
export const selectCols = state => state.solver.cols;

export default solverSlice.reducer;