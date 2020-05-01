import React from 'react';
import SavedPuzzles from '../../components/SavedPuzzles';
import styles from './Saved.module.scss';

export default function Saved() {
    const puzzleList = window.localStorage;
    const puzzles = Object.keys(puzzleList).map(puzzle => (
        <SavedPuzzles 
            key={puzzle}
            puzzle={puzzle} />
    ));
    return (
        <div className={styles.saved}>
            <div className={styles.pageInfo}>
                Saved Puzzles
            </div>
            <div className={styles.puzzlesWrapper}>
                {puzzles}
            </div>
        </div>
    )
}
