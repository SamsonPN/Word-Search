import React from 'react';
import { useSelector } from 'react-redux';
import { selectWords, selectRows } from '../../reducers/solverSlice';
import styles from './SolvedWords.module.scss';
import randomColor from 'randomcolor';

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
        // console.log(element.getAttribute('words'));
        row += dRow;
        col += dCol;
    }
    document.getElementById(word).style.color = color;
}

function highlightWord(wordInfo) {
    clearHighlights();
    let { first, dir, word, size } = wordInfo;
    let [row, col] = first;
    let [dRow, dCol] = dir;
    for(let i = 0; i < word.length; i++) {
        let pos = (row * size) + col;
        document.getElementById(`cell${pos}`).setAttribute('highlighted', true);
        row += dRow;
        col += dCol;
    }
}

function clearHighlights() {
    [...document.getElementsByClassName('gridCell')].forEach(cell => {
        cell.removeAttribute('highlighted');
    })
}


export default function SolvedWords() {
    const wordList = useSelector(selectWords);
    const size = useSelector(selectRows);
    const words = Object.keys(wordList).map(word => (
        <p
        id={word}
        key={word}
        onMouseOver={() => highlightWord({...wordList[word], word, size})}
        onMouseLeave={() => clearHighlights()}>
            {word}
        </p>
    ));
    setTimeout(() => {
        colorGridWords(wordList, size);
    }, 250);
    return (
        <div className={styles.wordList}>
            {words}
        </div>
    )
}
