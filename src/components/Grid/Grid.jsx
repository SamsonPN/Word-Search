import React from 'react'
import styles from './Grid.module.scss';
import GridRow from './GridRow';

export default function Grid() {
    const gridSize = 10;
    const gridRows = [];
    for(let i = 0; i < gridSize; i++) {
        gridRows.push(
            <GridRow key={i} row={i}/>
        )
    }
    return (
        <div className={styles.grid}>
            {gridRows}
        </div>
    )
}