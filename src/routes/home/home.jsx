import React from 'react';
import Grid from '../../components/Grid';
import WordList from '../../components/WordList';
import styles from './home.module.scss';

export default function home() {
    return (
        <div className={styles.home}>
            <div className={styles.gridWrapper}>
                <Grid />
                <WordList />
            </div>
        </div>
    )
}
