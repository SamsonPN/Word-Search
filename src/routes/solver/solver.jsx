import React from 'react';
import Grid from '../../components/SolvedGrid';
import { useDispatch } from 'react-redux';
import { 
    setWords,
    setRows,
    setCols
 } from '../../reducers/solverSlice';
import styles from './Solver.module.scss';

function checkNum(e, type, dispatch) {
    let num = parseInt(e.target.value);
    if( isNaN(num) ) {
        alert("Please enter a number!");
        e.target.value = "";
        return;
    }
    
    if(type === 'rows') {
        dispatch(setRows(num));
    }
    else {
        dispatch(setCols(num));
    }
}

function checkWords(dispatch) {
    const regex = /[^A-Za-z\s]/g;
    let wordList = document.getElementById('wordList').value;
    if(wordList.length !== 0) {
        wordList = wordList.split(",");
        for(let i = 0; i < wordList.length; i++) {
            let word = wordList[i];
            if( word.match(regex) ) {
                alert(`Please remove symbols or letters from: ${word}`)
                break;
            }
        }
        dispatch( setWords(wordList) );
    }
    else {
        alert('Please enter some words to get started!')
    }
}

export default function Solver() {
    const dispatch = useDispatch();
    return (
        <div className={styles.solver}>

            <div className={styles.directions}>
                <h1>Getting Started:</h1>
                <ol>
                    <li>
                        Enter in the size of the grid below. 
                        Max size is 20 x 20
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
                    maxLength="1"
                    onBlur={(e) => checkNum(e, 'rows', dispatch)}>
                </textarea>
                <textarea 
                    cols="1" 
                    rows="1"
                    placeholder="Columns"
                    maxLength="1"
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
                    placeholder="Separate, your, words, like, this">
                </textarea>
            </div>

            <div>
                <button
                    onClick={() => checkWords(dispatch)}>
                    Solve
                </button>
            </div>
        </div>
    )
}
