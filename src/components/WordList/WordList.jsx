import React from 'react'
import { useSelector } from 'react-redux';
import { selectWords } from '../../reducers/gridSlice';
import styles from './WordList.module.scss';

export default function WordList() {
    const words = useSelector(selectWords).map(word => (
        <p key={word}>
            {word}
        </p>
    ));

    return (
        <div className={styles.wordList}>
            {words}
        </div>
    )
}
