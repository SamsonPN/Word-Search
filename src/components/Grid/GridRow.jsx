import React from 'react';
import styles from './Grid.module.scss';

export default function GridRow(props) {
    const { row } = props;
    const rowSize = 15;
    const gridCells = [];
    for(let i = 0; i < rowSize; i++) {
        gridCells.push(
            <div
                row={row}
                col={i}
                key={i}
                onClick={() => console.log({row: row, col: i})}>
                    {i}
            </div>
        )
    }
    return (
        <div className={styles.gridRow}>
            {gridCells}
        </div>
    )
}
