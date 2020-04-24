import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectGrid,
    selectWords,
    selectSize
} from '../../reducers/solverSlice';
import { highlightWord, clearHighlights } from '../../utility';
import styles from './SolvedGrid.module.scss';

function getWordInfo(e, wordList, size) {
    let words = JSON.parse(e.target.attributes.words.value);
    words.forEach(word => {
        highlightWord({...wordList[word], word, size});
        document.getElementById(word).setAttribute('highlighted', true);
    });
}

export default function SolvedGrid() {
    const grid = useSelector(selectGrid);
    const wordList = useSelector(selectWords);
    const size = useSelector(selectSize);
    const gridCells = grid.map((letter, i) => (
        <div
            id={`cell${i}`}
            className={`${styles.gridCell} gridCell`}
            key={i}
            words={'[]'}
            onMouseEnter={(e) => getWordInfo(e, wordList, size)}
            onMouseLeave={() => clearHighlights()}> 
            {letter}
        </div>
    ))
    return (
        <div className={styles.grid}>
            {gridCells}
        </div>
    )
}
