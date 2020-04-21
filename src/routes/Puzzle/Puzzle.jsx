import React from 'react';
import Grid from '../../components/Grid';
import WordList from '../../components/WordList';
import styles from './Puzzle.module.scss';

export default function Puzzle() {
    return (
        <div className={styles.puzzle}>
            <div>
                <Grid />
                <WordList />
            </div>
        </div>
    )
}
