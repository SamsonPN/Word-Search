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
                <h1>Saved Puzzles</h1>
                <ul>
                    <li>
                        Any puzzles you create will be saved here
                    </li>
                    <li>
                        You can only view them from this computer and browser
                    </li>
                </ul>
            </div>
            <div className={styles.puzzlesWrapper}>
                {puzzles}
            </div>
        </div>
    )
}
