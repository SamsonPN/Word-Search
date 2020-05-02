import React from 'react';
import SavedPuzzles from '../../components/SavedPuzzles';
import styles from './Saved.module.scss';
import localStorage from 'local-storage';

function deleteAllPuzzles() {
    alert('WARNING: This will permanently delete all puzzles from your browser');
    const confirm = window.confirm('Delete all puzzles?');
    if(confirm) {
        localStorage.clear();
        setTimeout(() => {
            window.location.reload();
        }, 250)
    }
}

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
                <h1>Saved Puzzles:</h1>
                <ul>
                    <li>
                        Any puzzles you create will be saved to your browser
                        and displayed here
                    </li>
                    <li>
                        You can only view them from this computer and browser
                    </li>
                    <li>
                        If you would like to delete all your puzzles, click the button below
                    </li>
                </ul>
            </div>

            <div className={styles.btnWrapper}>
                <button
                    onClick={() => deleteAllPuzzles()}>
                        Delete All Puzzles
                </button>
            </div>

            <div className={styles.puzzlesWrapper}>
                {puzzles}
            </div>
        </div>
    )
}
