import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectWords, selectSize } from '../../reducers/solverSlice';
import { highlightWord, clearHighlights } from '../../utility';
import randomColor from 'randomcolor';
import styles from './SolvedWords.module.scss';

function colorGridWords(wordList, size) {
    for(let word in wordList) {
        addColor({...wordList[word], word, size});
    }
}

function addColor(wordInfo) {
    let { first, dir, word, size } = wordInfo;
    let [row, col] = first;
    let [dRow, dCol] = dir;
    const color = randomColor({
        luminosity: 'bright',
        format: 'hsla',
        alpha: '0.9'
    });

    for(let i = 0; i < word.length; i++) {
        let pos = (row * size) + col;
        let element = document.getElementById(`cell${pos}`);
        element.style.background = color;
        let words = JSON.parse(element.getAttribute('words'));
        words.push(word);
        element.setAttribute('words', JSON.stringify(words));
        row += dRow;
        col += dCol;
    }
    document.getElementById(word).style.color = color;
}

export default function SolvedWords() {
    const wordList = useSelector(selectWords);
    const size = useSelector(selectSize);
    const words = Object.keys(wordList).map(word => (
        <p
            id={word}
            className="solvedWords"
            key={word}
            onMouseOver={() => highlightWord({...wordList[word], word, size})}
            onMouseLeave={() => clearHighlights()}>
            {word}
        </p>
    ));

    useEffect(() => {
        colorGridWords(wordList, size);
    }, [wordList, size])

    return (
        <div className={styles.wordList}>
            {words}
        </div>
    )
}
