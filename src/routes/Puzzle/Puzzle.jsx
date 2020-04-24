import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectShowPuzzle, setShowPuzzle } from '../../reducers/gridSlice';
import Grid from '../../components/Grid';
import WordList from '../../components/WordList';
import styles from './Puzzle.module.scss';
import html2canvas from 'html2canvas';

function printPuzzle(downloadAnchor) {
    const shouldPrint = window.confirm('Download this puzzle?');
    if( shouldPrint ) {
        const grid = document.getElementById('printGrid');
        grid.style.justifyContent = 'center';
        html2canvas(grid).then( (canvas) => {
            let base64image = canvas.toDataURL('image/png');
            downloadAnchor.setAttribute('href', base64image);
            downloadAnchor.setAttribute('download', 'wordsearch');
            downloadAnchor.click();
        });
        grid.style.justifyContent = 'flex-start';
    }
}

export default function Puzzle() {
    const downloadAnchor = useRef(null);
    const showPuzzle = useSelector(selectShowPuzzle);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if( !showPuzzle ) {
            history.push('/maker');
        }
        return () => {
            dispatch(setShowPuzzle(false));
        }
    });

    return (
        <div className={styles.puzzle}>
            <h1>Enjoy the word search!</h1>

            <div className={styles.btnWrapper}>
                <button
                    className={styles.downloadBtn}
                    onClick={() => printPuzzle(downloadAnchor.current)}>
                    Download Puzzle
                </button>
                <Link 
                    to="/"
                    className={styles.playBtn}>
                    Play Puzzle
                </Link>
            </div>

            <div 
                id="printGrid" 
                className={styles.gridWrapper}>
                <Grid />
                <WordList />
            </div>
            <a 
                ref={downloadAnchor} 
                href="#!">
                Download
            </a>
        </div>
    )
}
