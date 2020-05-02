import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    setGrid, 
    setWords, 
    setShowPuzzle,
    setPuzzleTitle
} from '../../reducers/gridSlice';
import Grid from '../Grid';
import WordList from '../WordList';
import localStorage from 'local-storage';
import PropTypes from 'prop-types';
import styles from './SavedPuzzles.module.scss';

function downloadPuzzle(puzzleInfo) {
    const { dispatch, puzzle, grid, wordList} = puzzleInfo;
    dispatch(setShowPuzzle(true));
    dispatch(setPuzzleTitle(puzzle));
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
}

function playPuzzle(dispatch, grid, wordList) {
    dispatch(setGrid(grid));
    dispatch(setWords(wordList));
}

function deletePuzzle(e, puzzle) {
    const confirmDel = window.confirm('Delete this puzzle?');
    if(confirmDel) {
        localStorage.remove(puzzle);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    else {
        e.preventDefault();
    }
}

export default function SavedPuzzles(props) {
    const dispatch = useDispatch();
    const { puzzle } = props;
    const { grid, wordList } = localStorage(puzzle);
    return (
        <div className={styles.puzzles}>

            <div className={styles.puzzleInfo}>
                <h1>{puzzle}</h1>
                <div className={styles.btnWrapper}>
                    <Link
                        to="/puzzle"
                        download=""
                        onClick={() => downloadPuzzle({dispatch, puzzle, grid, wordList})}>
                        Download Puzzle
                    </Link>
                    <Link
                        to="/"
                        play=""
                        onClick={() => playPuzzle(dispatch, grid, wordList)}>
                        Play Puzzle
                    </Link>
                    <button
                        delete=""
                        onClick={(e) => deletePuzzle(e, puzzle)}>
                        Delete Puzzle
                    </button>
                </div>
            </div>

            <div className={styles.gridWrapper}>
                <Grid savedGrid={grid}/>
                <WordList savedWords = {wordList} />
            </div>

    </div>
    )
}

SavedPuzzles.propTypes = {
    puzzle: PropTypes.string.isRequired
}
