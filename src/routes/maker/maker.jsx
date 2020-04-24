import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makePuzzle, setShowPuzzle } from '../../reducers/gridSlice';
import { preventEnter } from '../../utility';
import styles from './Maker.module.scss';

function generatePuzzle(dispatch, history) {
    let words = [];
    let hasDuplicates = false;
    [...document.getElementsByClassName('puzzleInput')].forEach(el => {
        let word = el.value;
        if(words.includes(word)) {
            hasDuplicates = true;
        }
        if(word !== "") {
            words.push(word);
        }
    });
    if( words.length < 10) {
        alert('Please enter at least 10 words to make the word search!')
    }
    else if( hasDuplicates ) {
        alert('Please remove duplicates!');
    }
    else {
        if( hasValidWords(words) ) {
            dispatch(setShowPuzzle(true));
            dispatch(makePuzzle(words));
            history.push('/puzzle');
        }
    }
}

function hasValidWords(words) {
    const regex = /[^A-Za-z]/g;
    let isValid = true;
    let invalidWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split(" ").join("");
        if(word.length < 3 || word.length > 13 || word.match(regex) ) {
            isValid = false;
            invalidWords.push(word);
        }
    }
    if( !isValid ) {
        alert(`Please make sure these words: ${[...invalidWords]} \n are between 3-13 words long and do not contain symbols or numbers!`);
    }
    return isValid;
}

export default function Maker() {
    const history = useHistory();
    const dispatch = useDispatch();
    const textareas = [];
    for(let i = 0; i < 20; i++) {
        textareas.push(
            <textarea
                className="puzzleInput"
                key={i}
                maxLength="13"
                rows="1"
                cols="1"
                placeholder={i + 1}
                onKeyPress={(e) => preventEnter(e)}>
            </textarea>
        )
    }
    return (
        <div className={styles.maker}>
            <div className={styles.directions}>
                <h1>Puzzle Maker:</h1>
                <p>
                    Please enter between 10 - 20 words to create a word search.
                    Each word should be between 3 - 13 letters in length and should not contain any
                    symbols or numbers! In some cases, every word might not fit in the grid and thus will
                    be removed!
                </p>
            </div>
            <div className={styles.inputWrapper}>
                {textareas}
            </div>
            <div className={styles.btnWrapper}>
                <button 
                    className="generatorBtn"
                    to="/puzzle"
                    onClick={() => generatePuzzle(dispatch, history)}>
                    Generate Wordsearch
                </button>
            </div>
        </div>
    )
}