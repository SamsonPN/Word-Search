import React from 'react';
import Grid from '../../components/SolvedGrid';
import Words from '../../components/SolvedWords';
import styles from './Results.module.scss';

export default function Results() {
    return (
        <div className={styles.results}>
            <div className={styles.gridWrapper}>
                <Grid />
                <Words />
            </div>
        </div>
    )
}
