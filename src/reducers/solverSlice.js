import { createSlice } from '@reduxjs/toolkit';
import { removeSymbols, solveWordSearch } from '../utility';

export const solverSlice = createSlice({
    name: 'solver',
    initialState: {
        grid: [
            'H', 'O', 'F', 'S', 'W', 'W', 'X', 'L',
            'V', 'J', 'I', 'Z', 'P', 'S', 'N', 'L',
            'K', 'H', 'A', 'W', 'H', 'S', 'A', 'M',
            'A', 'H', 'U', 'C', 'R', 'Y', 'C', 'L',
            'A', 'M', 'L', 'E', 'U', 'X', 'T', 'A',
            'E', 'A', 'H', 'G', 'V', 'S', 'Q', 'P',
            'N'
          ],
        words: {
            GUY: { first: [ 6, 1 ], last: [ 4, 1 ], dir: [ -1, 0 ] },
            HIS: { first: [ 2, 3 ], last: [ 0, 3 ], dir: [ -1, 0 ] },
            HERS: { first: [ 6, 0 ], last: [ 3, 0 ], dir: [ -1, 0 ] },
            SAM: { first: [ 6, 3 ], last: [ 4, 5 ], dir: [ -1, 1 ] },
            HAM: { first: [ 3, 4 ], last: [ 3, 2 ], dir: [ 0, -1 ] },
            CLAM: { first: [ 4, 2 ], last: [ 4, 5 ], dir: [ 0, 1 ] },
            CAN: { first: [ 4, 2 ], last: [ 2, 0 ], dir: [ -1, -1 ] },
            CLAN: { first: [ 3, 6 ], last: [ 6, 6 ], dir: [ 1, 0 ] }
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