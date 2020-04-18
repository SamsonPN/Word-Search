import React from 'react'
import { useSelector } from 'react-redux';
import { selectWords } from '../../reducers/gridSlice';
import styles from './WordList.module.scss';

export default function WordList() {
    const words = useSelector(selectWords);
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
