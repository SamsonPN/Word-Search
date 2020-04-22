import React from 'react';
import Grid from './SolvedGrid';
import Words from './SolvedWords';
import styles from './SolvedPuzzle.module.scss';

export default function SolvedPuzzle() {
    return (
        <div className={styles.solved}>
            <Grid />
            <Words />
        </div>
    )
}
