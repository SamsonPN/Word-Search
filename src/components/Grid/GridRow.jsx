import React from 'react';
import styles from './Grid.module.scss';

export default function GridRow(props) {
    const { row, gridCells } = props;
    let gridCellContainer = gridCells.map((cell, i) => (
        <div
            row={row}
            col={i}
            key={i}
            onClick={() => console.log({row: row, col: i})}>
            {cell}
        </div>
    ))
    return (
        <div className={styles.gridRow}>
            {gridCellContainer}
        </div>
    )
}
