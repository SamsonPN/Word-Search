import { createSlice } from '@reduxjs/toolkit';
import { removeSymbols, solveWordSearch } from '../utility';

export const solverSlice = createSlice({
    name: 'solver',
    initialState: {
        grid: [],
        words: {},
        size: 10,
        showResults: false
    },
    reducers: {
        setGrid: (state, action) => {
            state.grid = action.payload;
        },
        setWords: (state, action) => {
            state.words = action.payload;
        },
        setSize: (state, action) => {
            state.size = action.payload;
        },
        setShowResults: (state, action) => {
            state.showResults = action.payload;
        }
    }
})

/* THUNKS */
export const solvePuzzle = words => (dispatch, getState) => {
    const size = getState().solver.size
    const grid = getState().solver.grid;
    words = removeSymbols(words);
    let wordList = solveWordSearch(grid, words, size);
    dispatch(setWords(wordList));
}

/* ACTIONS */
export const { 
    setGrid, 
    setWords, 
    setSize,
    setShowResults
} = solverSlice.actions;

/* SELECTORS */
export const selectGrid = state => state.solver.grid;
export const selectWords = state => state.solver.words;
export const selectSize = state => state.solver.size;
export const selectShowResults = state => state.solver.showResults;

export default solverSlice.reducer;