import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { selectWords, selectFoundWords } from '../../reducers/gridSlice';
import styles from './WordList.module.scss';

export default function WordList() {
    const isInitialMount = useRef(true);
    const foundWords = useSelector(selectFoundWords);
    const words = useSelector(selectWords);

    useEffect(() => {
        // used to only run useEffect code on update
        if(isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            if(foundWords === Object.keys(words).length) {
                let startNewSearch = window.confirm("Congratulations, you've solved the grid! Would you like to start another?");
                if(startNewSearch) {
                    window.location.reload();
                }
            }
        }
    })
    let wordList = Object.keys(words).map(word => (
        <p
            id={word}
            key={word}
            found={words[word].found}>
            {word}
        </p>
    ))
    
    return (
        <div className={styles.wordList}>
            {wordList}
        </div>
    )
}
