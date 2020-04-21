import React, { useRef } from 'react';
import Grid from '../../components/Grid';
import WordList from '../../components/WordList';
import styles from './Puzzle.module.scss';
import html2canvas from 'html2canvas';

function printPuzzle(downloadAnchor) {
    const shouldPrint = window.confirm('Print this puzzle?');
    if( shouldPrint ) {
        const grid = document.getElementById('printGrid');
        html2canvas(grid).then( (canvas) => {
            let base64image = canvas.toDataURL('image/png');
            downloadAnchor.setAttribute('href', base64image);
            downloadAnchor.setAttribute('download', 'wordsearch');
            downloadAnchor.click();
        });
    }
}

export default function Puzzle() {
    const downloadAnchor = useRef(null);
    return (
        <div className={styles.puzzle}>

            <div 
                id="printGrid" 
                className={styles.gridWrapper}>
                <Grid />
                <WordList />
            </div>

            <div className={styles.btnWrapper}>
                <button
                    onClick={() => printPuzzle(downloadAnchor.current)}>
                    Download Puzzle
                </button>
                <button>
                    Play Puzzle
                </button>
                <a ref={downloadAnchor} href="#!"></a>
            </div>
        </div>
    )
}
