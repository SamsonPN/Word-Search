import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    setRows,
    setCols,
    solvePuzzle
} from '../../reducers/solverSlice';
import Grid from '../../components/SolverInput';
import styles from './Solver.module.scss';

function checkNum(e, type, dispatch) {
    let { value } = e.target;
    let num = parseInt(value);
    if( isNaN(num) && value !== "") {
        alert("Please enter a number!");
        e.target.value = "";
        return;
    }
    else if (num < 1 || num > 20) {
        alert("Your grid is either too small or too large!")
    }
    else if (value !== "") {
        setValues(num, type, dispatch)
    }
}

function setValues(num, type, dispatch) {
    if(type === 'rows') {
        dispatch(setRows(num));
    }
    else {
        dispatch(setCols(num));
    }
}

function checkWords(e, dispatch) {
    const regex = /[^A-Za-z\s]/g;
    let wordList = document.getElementById('wordList').value;
    if(wordList.length !== 0) {
        wordList = wordList.split(",");
        for(let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            if( word.match(regex) ) {
                alert(`Please remove symbols or letters from: ${word}`)
                e.preventDefault();
                break;
            }
        }
        dispatch( solvePuzzle(wordList) );
    }
    else {
        alert('Please enter some words to get started!');
        e.preventDefault();
    }
}

export default function Solver() {
    const dispatch = useDispatch();
    return (
        <div className={styles.solver}>

            <div className={styles.directions}>
                <h1>Puzzle Solver:</h1>
                <ol>
                    <li>
                        Enter in the size of the grid below.
                        <ul>
                            <li>Default size: 3 x 3</li>
                            <li>Max size: 20 x 20</li>
                        </ul> 
                    </li>
                    <li>
                        After the grid is generated, enter in the 
                        letters in each cell in the grid
                    </li>
                    <li>
                        Enter in the words you would like to find
                    </li>
                    <li>
                        Press the 'Solve' button and give it some time
                    </li>
                </ol>
            </div>

            <div className={styles.input}>
                <textarea 
                    cols="1" 
                    rows="1"
                    placeholder="Rows"
                    maxLength="2"
                    onBlur={(e) => checkNum(e, 'rows', dispatch)}>
                </textarea>
                <textarea 
                    cols="1" 
                    rows="1"
                    placeholder="Columns"
                    maxLength="2"
                    onBlur={(e) => checkNum(e,'cols', dispatch)}>
                </textarea>
            </div>

            <Grid />

            <div className={styles.wordList}>
                <p>
                    Please separate your words by a comma or else they will not be 
                    read properly! And do remember to remove any symbols or numbers as well. 
                </p>
                <textarea
                    id="wordList"
                    rows="5"
                    placeholder="Separate, your, words, like, this">
                </textarea>
            </div>

            <div className={styles.btnWrapper}>
                <Link
                    to="/results"
                    onClick={(e) => checkWords(e, dispatch)}>
                    Solve
                </Link>
            </div>

        </div>
    )
}
