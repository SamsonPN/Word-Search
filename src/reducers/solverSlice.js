import { createSlice } from '@reduxjs/toolkit';
import { removeSymbols, solveWordSearch } from '../utility';

export const solverSlice = createSlice({
    name: 'solver',
    initialState: {
        grid: [
            'D', 'Q', 'C', 'Z', 'X', 'G', 'C', 'W',
            'J', 'M', 'H', 'W', 'C', 'V', 'I', 'G',
            'G', 'U', 'S', 'N', 'F', 'X', 'U', 'H',
            'U', 'X', 'E', 'S', 'Y', 'B', 'Z', 'E',
            'D', 'A', 'H', 'Z', 'H', 'E', 'R', 'S',
            'I', 'E', 'S', 'A', 'M', 'W', 'S', 'Q',
            'A'
          ],
        words: {
            GUY: { first: [ 2, 2 ], last: [ 4, 0 ], dir: [ 1, -1 ] },
            HIS: { first: [ 4, 6 ], last: [ 6, 4 ], dir: [ 1, -1 ] },
            HERS: { first: [ 5, 1 ], last: [ 5, 4 ], dir: [ 0, 1 ] },
            SAM: { first: [ 6, 0 ], last: [ 6, 2 ], dir: [ 0, 1 ] }
          },
        rows: 7,
        cols: 7
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

/* THUNKS */
export const solvePuzzle = words => (dispatch, getState) => {
    const rows = getState().solver.rows;
    const cols = getState().solver.cols;
    const grid = getState().solver.grid;
    words = removeSymbols(words);
    let wordList = solveWordSearch(grid, words, [rows, cols]);
    console.log({wordList});
    dispatch(setWords(wordList));
}

/* ACTIONS */
export const { setGrid, setWords, setRows, setCols } = solverSlice.actions;

/* SELECTORS */
export const selectGrid = state => state.solver.grid;
export const selectWords = state => state.solver.words;
export const selectRows = state => state.solver.rows;
export const selectCols = state => state.solver.cols;

export default solverSlice.reducer;